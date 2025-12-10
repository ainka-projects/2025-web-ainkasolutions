'use client'

import { motion, type Variants } from 'framer-motion'

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
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 0.61, 0.36, 1],
    },
  },
}

function TeamCard({
  badge,
  title,
  subtitle,
  body,
}: {
  badge: string
  title: string
  subtitle: string
  body: string
}) {
  return (
    <motion.div
      className="rounded-2xl border border-slate-700/70 bg-slate-950/70 p-4"
      variants={item}
    >
      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-sky-300">
          {badge}
        </div>
        <div>
          <p className="text-sm font-medium text-slate-100">{title}</p>
          <p className="text-xs text-slate-400">{subtitle}</p>
        </div>
      </div>
      <p className="text-xs text-slate-300">{body}</p>
    </motion.div>
  )
}

export default function TeamSection() {
  return (
    <section id="team" className="bg-gradient-hero border-t border-slate-800/60 py-16">
      <motion.div
        className="mx-auto max-w-5xl px-4 lg:px-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        transition={{ staggerChildren: 0.08 }}
      >
        <motion.div
          className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
          variants={item}
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-fuchsia-400">
              Team
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-50 md:text-3xl">
              Human-first, AI-augmented engineering culture.
            </h2>
          </div>
          <p className="max-w-md text-sm text-slate-300">
            We pair senior engineers, designers and product minds with specialized AI copilots —
            from code generation to research and QA.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          <TeamCard
            badge="A"
            title="AI Architects"
            subtitle="System design & model strategy"
            body="Craft the blueprint: domains, events, APIs, and AI integration points tailored to your stack."
          />
          <TeamCard
            badge="E"
            title="Engineering Pods"
            subtitle="3–6 people per squad"
            body="Cross-functional pods with frontend, backend, QA and DevOps ship in weekly production cycles."
          />
          <TeamCard
            badge="P"
            title="Product Partners"
            subtitle="Strategy & experience"
            body="Support from product & UX to frame problems, shape experiments and keep the roadmap moving."
          />
        </div>
      </motion.div>
    </section>
  )
}
