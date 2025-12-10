// app/_page/HomeSection.tsx
import { ArrowRight, Play, CircleDot, Clock, Zap, Brain } from 'lucide-react'

export default function HomeSection() {
  return (
    <section
      id="hero"
      className="mx-auto flex max-w-5xl flex-col gap-10 px-4 pt-28 pb-16 md:flex-row md:items-center md:pt-32 md:pb-20 lg:px-6"
    >
      {/* LEFT CONTENT */}
      <div className="flex-1 space-y-6">
        {/* badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-900/60 px-3 py-1 text-xs font-medium text-slate-300">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500/60 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
          </span>
          AI-Powered Software Development
        </div>

        {/* title & desc */}
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold leading-tight tracking-tight text-slate-50 sm:text-4xl md:text-5xl">
            <span className="block">AI working beyond borders.</span>
            <span className="block text-slate-300">Humans living beyond limits.</span>
          </h1>

          <p className="max-w-xl text-sm leading-relaxed text-slate-300/90 sm:text-base">
            A unified AI orchestra where every line of code plays in harmony — crafted, optimized
            and conducted with precision.
          </p>
        </div>

        {/* buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-full bg-red-500 px-5 py-2.5 text-sm font-semibold text-white shadow-xl shadow-red-500/40 transition hover:bg-red-600">
            Start a Project
            <ArrowRight className="h-4 w-4" />
          </button>

          <button className="inline-flex items-center gap-2 rounded-full border border-slate-600/80 bg-slate-900/60 px-4 py-2.5 text-sm font-semibold text-slate-100 hover:border-slate-400">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-800">
              <Play className="h-3.5 w-3.5" />
            </span>
            Explore Services
          </button>
        </div>

        {/* stats */}
        <div className="mt-4 flex flex-wrap gap-6 text-xs text-slate-300 sm:text-sm">
          <div>
            <div className="text-lg font-semibold text-slate-50">24/7</div>
            <div className="text-slate-400">AI Performance</div>
          </div>
          <div>
            <div className="text-lg font-semibold text-slate-50">40%</div>
            <div className="text-slate-400">Faster Delivery</div>
          </div>
          <div>
            <div className="text-lg font-semibold text-slate-50">50+</div>
            <div className="text-slate-400">AI Instruments</div>
          </div>
          <div>
            <div className="text-lg font-semibold text-slate-50">4</div>
            <div className="text-slate-400">Countries</div>
          </div>
        </div>
      </div>

      {/* RIGHT CARD */}
      <div className="mt-6 flex-1 md:mt-0">
        <div className="card-glow relative rounded-2xl bg-slate-900/70 p-5">
          {/* header */}
          <div className="mb-4 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <CircleDot className="h-4 w-4 text-emerald-400" />
              Live AI delivery board
            </div>

            <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-[10px] font-medium text-emerald-400">
              99.9% uptime
            </span>
          </div>

          {/* card items */}
          <div className="space-y-3 text-xs text-slate-300">
            {/* item 1 */}
            <div className="flex items-center justify-between rounded-xl bg-slate-900/90 px-3 py-2">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-sky-400" />
                <div>
                  <p className="font-medium text-slate-100">Continuous Delivery</p>
                  <p className="text-[11px] text-slate-400">Sprint to production in days</p>
                </div>
              </div>
              <span className="text-xs font-semibold text-emerald-400">3x</span>
            </div>

            {/* item 2 */}
            <div className="flex items-center justify-between rounded-xl bg-slate-900/90 px-3 py-2">
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-amber-300" />
                <div>
                  <p className="font-medium text-slate-100">Model-assisted coding</p>
                  <p className="text-[11px] text-slate-400">AI & humans in the loop</p>
                </div>
              </div>
              <span className="text-xs font-semibold text-emerald-400">40%+</span>
            </div>

            {/* item 3 */}
            <div className="flex items-center justify-between rounded-xl bg-slate-900/90 px-3 py-2">
              <div className="flex items-center gap-2">
                <Brain className="h-4 w-4 text-fuchsia-300" />
                <div>
                  <p className="font-medium text-slate-100">Quality Guardrails</p>
                  <p className="text-[11px] text-slate-400">Tests, security & observability</p>
                </div>
              </div>
              <span className="text-xs font-semibold text-emerald-400">ISO-ready</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
