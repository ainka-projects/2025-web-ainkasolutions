'use client'

import { motion, type Variants } from 'framer-motion'
import { CheckCircle2, Users } from 'lucide-react'

const container: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 0.61, 0.36, 1],
      when: 'beforeChildren',
    },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 0.61, 0.36, 1],
    },
  },
}

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative border-t border-slate-800/60 bg-gradient-hero pb-16 pt-14"
    >
      {/* soft gradient blur */}
      <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-48 max-w-xl bg-gradient-to-b from-sky-500/10 via-fuchsia-500/5 to-transparent blur-3xl" />

      <motion.div
        className="relative mx-auto max-w-5xl px-4 lg:px-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.08 }} // <-- đặt stagger ở đây
      >
        {/* heading */}
        <motion.div className="text-center" variants={item}>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300">
            Ready when you are
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-50 md:text-3xl">
            Start a project with an AI-first squad.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-300">
            Share your goals and constraints. We&apos;ll respond with a high-level architecture,
            timeline and squad proposal.
          </p>
        </motion.div>

        {/* card form */}
        <motion.div
          className="mx-auto mt-8 max-w-xl rounded-2xl border border-slate-700/60 bg-slate-900/70 px-4 py-5 shadow-[0_24px_70px_rgba(15,23,42,0.9)] backdrop-blur-md sm:px-6 sm:py-6"
          variants={item}
        >
          <form className="space-y-4 text-left">
            <div className="grid gap-4 md:grid-cols-2">
              <motion.div variants={item}>
                <label className="mb-1 block text-xs font-medium text-slate-200">Name</label>
                <input
                  className="w-full rounded-xl border border-slate-700/80 bg-slate-950/60 px-3 py-2 text-sm text-slate-50 outline-none ring-0 placeholder:text-slate-500 transition focus:border-sky-400 focus:bg-slate-900/80 focus:shadow-[0_0_0_1px_rgba(56,189,248,0.6)]"
                  placeholder="Jane Doe"
                />
              </motion.div>

              <motion.div variants={item}>
                <label className="mb-1 block text-xs font-medium text-slate-200">Work email</label>
                <input
                  type="email"
                  className="w-full rounded-xl border border-slate-700/80 bg-slate-950/60 px-3 py-2 text-sm text-slate-50 outline-none ring-0 placeholder:text-slate-500 transition focus:border-sky-400 focus:bg-slate-900/80 focus:shadow-[0_0_0_1px_rgba(56,189,248,0.6)]"
                  placeholder="you@company.com"
                />
              </motion.div>
            </div>

            <motion.div variants={item}>
              <label className="mb-1 block text-xs font-medium text-slate-200">
                What would you like to build?
              </label>
              <textarea
                rows={4}
                className="w-full rounded-xl border border-slate-700/80 bg-slate-950/60 px-3 py-2 text-sm text-slate-50 outline-none ring-0 placeholder:text-slate-500 transition focus:border-sky-400 focus:bg-slate-900/80 focus:shadow-[0_0_0_1px_rgba(56,189,248,0.6)]"
                placeholder="Briefly describe your product, timeline and current stack."
              />
            </motion.div>

            <motion.div
              className="flex flex-col gap-3 pt-1 md:flex-row md:items-center md:justify-between"
              variants={item}
            >
              <button className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-red-500 px-5 py-2.5 text-sm font-semibold text-white shadow-xl shadow-red-500/40 transition hover:-translate-y-[1px] hover:bg-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400/70 md:w-auto">
                <Users className="h-4 w-4" />
                Book a discovery call
              </button>

              <p className="flex items-center gap-2 text-xs text-slate-400">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                No spam. We only contact you about this project.
              </p>
            </motion.div>
          </form>
        </motion.div>
      </motion.div>
    </section>
  )
}
