'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { MessageCircle, X, SendHorizonal } from 'lucide-react'

type ChatMessage = {
  role: 'user' | 'assistant'
  content: string
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content:
        'Xin chào 👋 Mình là Ainka Bot. Bạn đang cần tư vấn về website, landing page hay tự động hoá cho doanh nghiệp?',
    },
  ])
  const [input, setInput] = useState('')
  const [isSending, setIsSending] = useState(false)
  const [userQuestionCount, setUserQuestionCount] = useState(0)

  // Thông tin lead
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [note, setNote] = useState('')

  const messagesEndRef = useRef<HTMLDivElement | null>(null)

  // Tự động mở sau 5s nếu user chưa tương tác
  useEffect(() => {
    if (hasInteracted) return
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 5000)
    return () => clearTimeout(timer)
  }, [hasInteracted])

  // Scroll xuống cuối khi có message mới
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages])

  const toggleOpen = () => {
    setIsOpen((prev) => !prev)
    setHasInteracted(true)
  }

  const handleSend = async () => {
    if (!input.trim() || isSending) return

    const userMsg: ChatMessage = { role: 'user', content: input.trim() }
    const newMessages = [...messages, userMsg]

    setMessages(newMessages)
    setInput('')
    setIsSending(true)
    setUserQuestionCount((c) => c + 1)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      })

      const data = await res.json()

      if (data.error) {
        setMessages((prev) => [...prev, { role: 'assistant', content: data.error as string }])
      } else {
        setMessages((prev) => [...prev, { role: 'assistant', content: String(data.reply) }])
      }
    } catch (error) {
      console.error(error)
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'Có lỗi kết nối, bạn thử gửi lại giúp mình nhé 🙏',
        },
      ])
    } finally {
      setIsSending(false)
    }
  }

  const handleSubmitInput = (e: React.FormEvent) => {
    e.preventDefault()
    handleSend()
  }

  const handleSubmitLead = async (e: React.FormEvent) => {
    e.preventDefault()

    // TODO: Gọi API /api/leads để lưu vào Prisma + Neon
    console.log('Lead info:', { name, phone, note })

    alert('Cảm ơn bạn! Đội ngũ Ainka sẽ liên hệ tư vấn trong thời gian sớm nhất ❤️')

    setName('')
    setPhone('')
    setNote('')
  }

  // Sau 2 câu hỏi của khách thì show form lead
  const showLeadForm = userQuestionCount >= 2

  return (
    <>
      {/* Nút chat tròn */}
      <button
        onClick={toggleOpen}
        className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl transition hover:scale-105 hover:bg-blue-500 focus:outline-none"
        aria-label="Mở chat tư vấn"
      >
        <MessageCircle className="h-7 w-7" />
      </button>

      {/* Khung chat */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 z-50 flex w-80 max-w-[90vw] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl transition-transform duration-200 ease-out">
          {/* Header */}
          <div className="flex items-center justify-between bg-gradient-to-r from-blue-600 to-cyan-500 px-3 py-2 text-white">
            <div className="flex items-center gap-2">
              <div className="relative h-10 w-10 overflow-hidden rounded-full bg-white/10">
                <Image src="/images/ainka-bot.png" alt="Ainka Bot" fill className="object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold">Ainka Bot</span>
                <span className="text-[11px] text-blue-100">Đang online - sẵn sàng tư vấn</span>
              </div>
            </div>
            <button
              onClick={toggleOpen}
              className="rounded-full p-1 hover:bg-white/10"
              aria-label="Đóng chat"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Nội dung chat + input + form lead */}
          <div className="flex max-h-96 flex-col bg-slate-50">
            {/* Vùng chat */}
            <div className="flex-1 space-y-2 overflow-y-auto px-3 py-3 text-sm">
              {messages.map((msg, idx) => {
                const isUser = msg.role === 'user'
                return (
                  <div key={idx} className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
                    {!isUser && (
                      <div className="mr-2 mt-1 h-7 w-7 overflow-hidden rounded-full bg-blue-500/10">
                        <Image
                          src="/images/ainka-bot.png"
                          alt="Ainka Bot"
                          width={28}
                          height={28}
                          className="h-7 w-7 object-cover"
                        />
                      </div>
                    )}
                    <div
                      className={`max-w-[75%] rounded-2xl px-3 py-2 shadow-sm ${
                        isUser
                          ? 'rounded-br-sm bg-blue-600 text-white'
                          : 'rounded-tl-sm bg-white text-slate-900'
                      }`}
                    >
                      <p className="whitespace-pre-line">{msg.content}</p>
                    </div>
                  </div>
                )
              })}
              {isSending && (
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="h-2 w-2 animate-ping rounded-full bg-blue-500" />
                  Ainka Bot đang trả lời...
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Ô nhập chat */}
            <form
              onSubmit={handleSubmitInput}
              className="flex items-center gap-2 border-t border-slate-200 bg-white px-2 py-2"
            >
              <input
                className="h-9 flex-1 rounded-full border border-slate-200 px-3 text-sm outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-300"
                placeholder="Nhập câu hỏi của bạn..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button
                type="submit"
                disabled={isSending || !input.trim()}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white shadow-sm transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:bg-slate-300"
                aria-label="Gửi tin nhắn"
              >
                <SendHorizonal className="h-4 w-4" />
              </button>
            </form>

            {/* Form lấy thông tin – hiện sau khi nói chuyện một chút */}
            {showLeadForm && (
              <form
                onSubmit={handleSubmitLead}
                className="space-y-2 border-t border-slate-200 bg-white px-3 py-3 text-xs"
              >
                <p className="text-[11px] text-slate-600">
                  Để đội ngũ Ainka có thể tư vấn chi tiết hơn, bạn cho mình xin <b>tên</b> và{' '}
                  <b>số điện thoại</b> nhé 📞
                </p>

                <div className="flex flex-col gap-1">
                  <label className="font-medium text-slate-700">Tên của bạn</label>
                  <input
                    className="h-8 rounded-lg border border-slate-200 px-2 text-sm outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-300"
                    placeholder="VD: Anh Khoa"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-medium text-slate-700">Số điện thoại</label>
                  <input
                    className="h-8 rounded-lg border border-slate-200 px-2 text-sm outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-300"
                    placeholder="VD: 09xx xxx xxx"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-medium text-slate-700">
                    Nội dung cần tư vấn (tuỳ chọn)
                  </label>
                  <textarea
                    className="min-h-[50px] rounded-lg border border-slate-200 px-2 py-1 text-sm outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-300"
                    placeholder="VD: muốn làm website + landing page chạy ads"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  className="mt-1 inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-blue-500 active:scale-[0.98]"
                >
                  Gửi thông tin cho Ainka
                </button>

                <p className="text-[10px] text-slate-400">
                  Bằng cách gửi, bạn đồng ý cho Ainka liên hệ tư vấn qua số điện thoại bạn cung cấp.
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  )
}
