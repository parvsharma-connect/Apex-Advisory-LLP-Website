import type { IncomingMessage, ServerResponse } from 'node:http'
import { handleAssistantRequest } from '../server/assistantApi.js'

type VercelRequest = IncomingMessage & { body?: unknown }

export default async function handler(request: VercelRequest, response: ServerResponse) {
  await handleAssistantRequest(request, response)
}
