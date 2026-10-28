import type { IncomingMessage, ServerResponse } from 'node:http'
import type { Plugin } from 'vite'

const categories = new Set([
  'Accounting and bookkeeping',
  'Tax and GST assistance',
  'Business advisory',
  'LLP compliance support',
  'Other business enquiry',
])

type Enquiry = {
  name?: unknown
  email?: unknown
  category?: unknown
  message?: unknown
  website?: unknown
}

type ApiResult = { status: number; body: { ok: boolean; message: string } }

const attempts = new Map<string, { count: number; resetAt: number }>()
const WINDOW_MS = 10 * 60 * 1000
const MAX_REQUESTS = 10

export function isEnquiryRateLimited(key: string) {
  const now = Date.now()
  if (attempts.size > 1000) {
    for (const [ip, attempt] of attempts) if (attempt.resetAt <= now) attempts.delete(ip)
  }
  const entry = attempts.get(key)
  if (!entry || entry.resetAt <= now) {
    attempts.set(key, { count: 1, resetAt: now + WINDOW_MS })
    return false
  }
  entry.count += 1
  return entry.count > MAX_REQUESTS
}

export async function deliverEnquiry(input: Enquiry): Promise<ApiResult> {
  // Quietly accept the hidden honeypot field so basic bots do not learn the check.
  if (typeof input.website === 'string' && input.website.trim()) {
    return { status: 200, body: { ok: true, message: 'Enquiry sent.' } }
  }

  const name = typeof input.name === 'string' ? input.name.trim() : ''
  const email = typeof input.email === 'string' ? input.email.trim() : ''
  const category = typeof input.category === 'string' ? input.category.trim() : ''
  const message = typeof input.message === 'string' ? input.message.trim() : ''

  if (!name || name.length > 100 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254 || !categories.has(category) || message.length > 1000) {
    return { status: 400, body: { ok: false, message: 'Check the form fields and try again.' } }
  }

  const apiToken = process.env.MAILERSEND_API_TOKEN?.trim()
  const from = process.env.MAILERSEND_FROM_EMAIL?.trim()
  const to = process.env.ENQUIRY_TO_EMAIL?.trim() || 'parv.sharmaa@outlook.com'
  if (!apiToken || !from) {
    return { status: 503, body: { ok: false, message: 'Email delivery is not configured yet. Please email parv.sharmaa@outlook.com directly.' } }
  }

  const text = [
    'New business enquiry for Apex Advisory LLP',
    '',
    `Name: ${name}`,
    `Business email: ${email}`,
    `Category: ${category}`,
    '',
    'Message:',
    message || '—',
  ].join('\n')

  try {
    const response = await fetch('https://api.mailersend.com/v1/email', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: { email: from, name: 'Apex Advisory LLP' },
        to: [{ email: to }],
        reply_to: { email, name },
        subject: `Business enquiry: ${category}`,
        text,
      }),
      signal: AbortSignal.timeout(10000),
    })
    if (response.headers.get('x-send-paused') === 'true') {
      console.error('MailerSend accepted the request while sending was paused.')
      return { status: 502, body: { ok: false, message: 'Email sending is paused right now. Please email parv.sharmaa@outlook.com.' } }
    }
    if (!response.ok) {
      // Do not log request contents or provider response bodies containing personal data.
      console.error(`Enquiry email provider returned HTTP ${response.status}.`)
      return { status: 502, body: { ok: false, message: 'The email could not be sent. Please try again or email parv.sharmaa@outlook.com.' } }
    }
    return { status: 200, body: { ok: true, message: 'Your enquiry has been received. We’ll reply to your business email.' } }
  } catch {
    console.error('Enquiry email delivery failed before completion.')
    return { status: 502, body: { ok: false, message: 'The email could not be sent. Please try again or email parv.sharmaa@outlook.com.' } }
  }
}

function sameOrigin(request: IncomingMessage) {
  const origin = request.headers.origin
  const host = request.headers.host
  if (!origin || !host) return true
  try {
    return new URL(origin).host === host
  } catch {
    return false
  }
}

async function parseBody(request: IncomingMessage): Promise<Enquiry | undefined> {
  const chunks: Buffer[] = []
  let length = 0
  for await (const chunk of request) {
    const buffer = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk)
    length += buffer.length
    if (length > 16_384) return undefined
    chunks.push(buffer)
  }
  try {
    return JSON.parse(Buffer.concat(chunks).toString('utf8')) as Enquiry
  } catch {
    return undefined
  }
}

async function handleRequest(request: IncomingMessage, response: ServerResponse) {
  response.setHeader('Content-Type', 'application/json; charset=utf-8')
  response.setHeader('Cache-Control', 'no-store')
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST')
    response.statusCode = 405
    response.end(JSON.stringify({ ok: false, message: 'Method not allowed.' }))
    return
  }
  if (!sameOrigin(request)) {
    response.statusCode = 403
    response.end(JSON.stringify({ ok: false, message: 'Request rejected.' }))
    return
  }
  const forwardedFor = request.headers['x-forwarded-for']
  const clientIp = (Array.isArray(forwardedFor) ? forwardedFor[0] : forwardedFor)?.split(',').at(-1)?.trim() || request.socket.remoteAddress || 'unknown'
  if (isEnquiryRateLimited(clientIp)) {
    response.statusCode = 429
    response.end(JSON.stringify({ ok: false, message: 'Too many attempts. Please try again in a few minutes.' }))
    return
  }
  const input = await parseBody(request)
  if (!input) {
    response.statusCode = 400
    response.end(JSON.stringify({ ok: false, message: 'Invalid form submission.' }))
    return
  }
  const result = await deliverEnquiry(input)
  response.statusCode = result.status
  response.end(JSON.stringify(result.body))
}

export function enquiryApi(): Plugin {
  const middleware = (request: IncomingMessage, response: ServerResponse, next: (error?: Error) => void) => {
    void handleRequest(request, response).catch(next)
  }
  return {
    name: 'apex-enquiry-api',
    configureServer(server) {
      server.middlewares.use('/api/enquiry', middleware)
    },
    configurePreviewServer(server) {
      server.middlewares.use('/api/enquiry', middleware)
    },
  }
}
