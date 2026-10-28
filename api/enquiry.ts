import type { IncomingMessage, ServerResponse } from 'node:http'
import { deliverEnquiry, isEnquiryRateLimited } from '../server/enquiryApi.js'

type VercelRequest = IncomingMessage & { body?: unknown }

export default async function handler(request: VercelRequest, response: ServerResponse) {
  response.setHeader('Content-Type', 'application/json; charset=utf-8')
  response.setHeader('Cache-Control', 'no-store')
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST')
    response.statusCode = 405
    response.end(JSON.stringify({ ok: false, message: 'Method not allowed.' }))
    return
  }

  const origin = request.headers.origin
  const host = request.headers.host
  try {
    if (origin && host && new URL(origin).host !== host) {
      response.statusCode = 403
      response.end(JSON.stringify({ ok: false, message: 'Request rejected.' }))
      return
    }
  } catch {
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

  const result = await deliverEnquiry((request.body ?? {}) as Parameters<typeof deliverEnquiry>[0])
  response.statusCode = result.status
  response.end(JSON.stringify(result.body))
}
