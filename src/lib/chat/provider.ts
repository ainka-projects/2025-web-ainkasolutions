// lib/chat/provider.ts
import { SYSTEM_PROMPT } from './constants'

export type ClientMessage = {
  role: 'user' | 'assistant'
  content: string
}

// Message format gửi lên LLM (thêm system)
type LlmMessage = {
  role: 'system' | 'user' | 'assistant'
  content: string
}

const CHAT_BOT_STYLE = process.env.CHAT_BOT_STYLE ?? 'groq'
const GROQ_MODEL = process.env.GROQ_MODEL ?? 'llama-3.1-8b-instant'

function getModelConfig() {
  switch (CHAT_BOT_STYLE) {
    case 'openai':
      return {
        provider: 'openai' as const,
        baseUrl: 'https://api.openai.com/v1',
        model: 'gpt-4.1-mini', // hoặc gpt-4.1 tùy budget
        apiKey: process.env.OPENAI_API_KEY,
      }
    case 'openaimini':
      return {
        provider: 'openai' as const,
        baseUrl: 'https://api.openai.com/v1',
        model: 'gpt-4o-mini',
        apiKey: process.env.OPENAI_API_KEY,
      }
    case 'groq':
    default:
      return {
        provider: 'groq' as const,
        baseUrl: 'https://api.groq.com/openai/v1',
        // Model còn đang support
        model: GROQ_MODEL,
        apiKey: process.env.GROQ_API_KEY,
      }
  }
}

/**
 * Hàm duy nhất để gọi LLM (OpenAI / Groq)
 * -> mọi “huấn luyện” nằm ở SYSTEM_PROMPT & buildMessages
 */
export async function callChatModel(clientMessages: ClientMessage[]): Promise<string> {
  const { baseUrl, model, apiKey } = getModelConfig()

  if (!apiKey) {
    throw new Error('API key cho chatbot chưa được cấu hình (OPENAI_API_KEY hoặc GROQ_API_KEY)')
  }

  const messages: LlmMessage[] = [{ role: 'system', content: SYSTEM_PROMPT }, ...clientMessages]

  const res = await fetch(`${baseUrl}/chat/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      messages,
      temperature: 0.6,
      max_tokens: 256,
    }),
  })

  if (!res.ok) {
    const text = await res.text()
    console.error('LLM error:', text)
    throw new Error('Chat bot hiện đang bận, bạn thử lại sau giúp mình nhé.')
  }

  const data = await res.json()
  const reply: string =
    data.choices?.[0]?.message?.content ??
    'Xin lỗi, hiện mình không trả lời được câu này, bạn thử lại giúp mình nhé.'

  return reply
}
