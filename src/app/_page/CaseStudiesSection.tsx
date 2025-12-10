'use client'

import { motion, type Variants } from 'framer-motion'
import { Sparkles } from 'lucide-react'

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

function CaseStudyCard({ title, copy, points }: { title: string; copy: string; points: string[] }) {
  return (
    <motion.div
      className="flex flex-col gap-3 rounded-2xl border border-slate-700/70 bg-slate-950/70 p-4 md:p-5"
      variants={item}
    >
      <h3 className="text-sm font-semibold text-slate-50">{title}</h3>
      <p className="text-xs text-slate-300">{copy}</p>
      <ul className="mt-1 space-y-1.5 text-xs text-slate-300">
        {points.map((p) => (
          <li key={p} className="flex items-start gap-2">
            <span className="mt-[3px]">
              <Sparkles className="h-3.5 w-3.5 text-sky-300" />
            </span>
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function CaseStudiesSection() {
  return (
    <section id="case-studies" className="border-t border-slate-800/60 bg-slate-950 py-16">
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
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-400">
              Case studies
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-50 md:text-3xl">
              From prototype to production in weeks.
            </h2>
          </div>
          <p className="max-w-md text-sm text-slate-300">
            Stories from teams who turned AI from slideware into shipped features — safely, and at
            scale.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          <CaseStudyCard
            title="Global logistics optimiser"
            copy="Re-platformed a legacy routing engine into an event-driven, AI-assisted planner — cutting planning time from hours to minutes."
            points={[
              '30% reduction in delivery costs',
              'Deployed across 4 regions',
              'SOC2-ready observability stack',
            ]}
          />
          <CaseStudyCard
            title="Healthcare knowledge copilot"
            copy="Built a retrieval-augmented copilot that surfaces guidelines, forms and workflows in the clinical workflow."
            points={[
              'Sub-second responses on millions of docs',
              'Hallucination-aware answer grading',
              'Human-in-the-loop feedback dashboard',
            ]}
          />
        </div>
      </motion.div>
    </section>
  )
}
