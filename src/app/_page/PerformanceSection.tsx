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

function MetricCard({ label, value, badge }: { label: string; value: string; badge: string }) {
  return (
    <motion.div
      className="flex flex-col justify-between rounded-2xl border border-slate-700/70 bg-slate-950/70 p-4"
      variants={item}
    >
      <div>
        <p className="text-xs text-slate-400">{label}</p>
        <p className="mt-2 text-2xl font-semibold text-slate-50">{value}</p>
      </div>
      <p className="mt-3 text-[11px] text-slate-400">{badge}</p>
    </motion.div>
  )
}

export default function PerformanceSection() {
  return (
    <section id="performance" className="border-t border-slate-800/60 bg-slate-950 py-16">
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
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-400">
              Performance
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-50 md:text-3xl">
              Predictable velocity. Transparent metrics.
            </h2>
          </div>
          <p className="max-w-md text-sm text-slate-300">
            Every engagement ships with a live engineering scoreboard — throughput, quality and
            reliability tracked in real time.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          <MetricCard label="Lead time to production" value="72h" badge="from first commit" />
          <MetricCard label="Automated test coverage" value="80–95%" badge="critical flows" />
          <MetricCard label="SLO adherence" value="99.9%" badge="applied across all tiers" />
        </div>
      </motion.div>
    </section>
  )
}
