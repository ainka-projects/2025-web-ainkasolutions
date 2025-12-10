'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  Menu,
  X,
  MessageCircleHeart,
  MessageCircleMore,
  MonitorCheckIcon,
  ArrowRight,
  Users,
  LineChart,
  MoveRight,
} from 'lucide-react'

const navItems = [
  { id: 'services', label: 'Services', icon: MonitorCheckIcon },
  { id: 'performance', label: 'Performance', icon: LineChart },
  { id: 'team', label: 'Team', icon: Users },
  { id: 'case-studies', label: 'Case Studies', icon: MessageCircleHeart },
]

export default function HeaderTop() {
  const [open, setOpen] = useState(false)

  const handleScroll = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        {/* logo -> scroll về hero/home */}
        <button
          type="button"
          onClick={() => handleScroll('hero')}
          className="flex items-center gap-2 focus:outline-none"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 ring-1 ring-slate-700/70 overflow-hidden">
            <Image
              src="/images/logo/ainka-logo-100.png"
              alt="Ainka Logo"
              width={24}
              height={24}
              className="object-contain"
            />
          </div>
          <span className="hidden text-sm font-semibold tracking-tight text-slate-100 sm:inline">
            Ainka Solutions
          </span>
        </button>

        {/* desktop menu */}
        <div className="hidden items-center gap-6 text-sm font-medium text-slate-200 md:flex">
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => handleScroll(id)}
              className="flex items-center gap-1.5 text-slate-300 transition hover:text-sky-400"
            >
              <Icon className="h-4 w-4" />
              <span>{label}</span>
            </button>
          ))}

          <button
            onClick={() => handleScroll('contact')}
            className="inline-flex items-center gap-1.5 rounded-full bg-red-500 px-4 py-1.5 text-sm font-semibold text-white shadow-lg transition hover:bg-red-600"
          >
            Start a Project
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* mobile toggle */}
        <button
          className="inline-flex items-center justify-center rounded-md border border-slate-700/70 p-1.5 text-slate-200 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* mobile menu */}
      {open && (
        <div className="border-t border-slate-800/80 bg-slate-950/95 md:hidden">
          <div className="mx-auto flex max-w-5xl flex-col gap-1 px-4 py-3 text-sm">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => handleScroll(id)}
                className="flex items-center gap-2 rounded-md px-2 py-1.5 text-left text-slate-200 hover:bg-slate-900"
              >
                <Icon className="h-4 w-4 text-slate-400" />
                <span>{label}</span>
              </button>
            ))}

            <button
              onClick={() => handleScroll('contact')}
              className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full bg-red-500 px-4 py-2 text-sm font-semibold text-white hover:bg-red-600"
            >
              Start a Project
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
