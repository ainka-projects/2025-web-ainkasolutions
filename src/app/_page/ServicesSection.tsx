'use client'

import { motion, type Variants } from 'framer-motion'
import { Globe2, Shield, Sparkles } from 'lucide-react'

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

function ServiceCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode
  title: string
  desc: string
}) {
  return (
    <motion.div
      className="flex flex-col gap-3 rounded-2xl border border-slate-700/70 bg-slate-950/70 p-4"
      variants={item}
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-sky-300">
        {icon}
      </div>
      <h3 className="text-sm font-semibold text-slate-50">{title}</h3>
      <p className="text-xs text-slate-300">{desc}</p>
    </motion.div>
  )
}

export default function ServicesSection() {
  return (
    <section id="services" className="bg-gradient-hero border-t border-slate-800/60 py-16">
      <motion.div
        className="mx-auto max-w-5xl px-4 lg:px-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        transition={{ staggerChildren: 0.08 }}
      >
        <motion.div className="mb-8 flex items-center justify-between gap-4" variants={item}>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-400">
              Services
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-50 md:text-3xl">
              AI-powered software squads on demand.
            </h2>
          </div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          <ServiceCard
            icon={<Sparkles className="h-5 w-5" />}
            title="AI Product Discovery"
            desc="From idea to roadmap with market-aware AI, UX and architecture co-designed."
          />
          <ServiceCard
            icon={<Globe2 className="h-5 w-5" />}
            title="Full-stack Delivery"
            desc="Next.js, Node.js and cloud-native pipelines shipped by hybrid AI teams."
          />
          <ServiceCard
            icon={<Shield className="h-5 w-5" />}
            title="Modernization & Re-platforming"
            desc="Refactor legacy systems into resilient, observable and secure platforms."
          />
        </div>
      </motion.div>
    </section>
  )
}
