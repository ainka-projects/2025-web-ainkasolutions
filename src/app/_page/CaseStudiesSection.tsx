'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { fadeUpContainer, fadeUpItem, softScale } from '@/app/_motion/variants'

const caseStudies = [
  {
    initials: 'TF',
    company: 'TechFlow Inc.',
    industry: 'FinTech',
    quote:
      '"AINKA transformed our development pipeline with AI, reducing our time-to-market by 50%."',
    personInitials: 'JS',
    personName: 'John Smith',
    personRole: 'CTO',
  },
  {
    initials: 'GL',
    company: 'GreenLeaf',
    industry: 'Sustainability',
    quote:
      '"The AI integration was seamless. Our team now focuses on innovation rather than repetitive tasks."',
    personInitials: 'MG',
    personName: 'Maria Garcia',
    personRole: 'CEO',
  },
  {
    initials: 'MC',
    company: 'MedConnect',
    industry: 'Healthcare',
    quote:
      '"Working with AINKA felt like having a world-class orchestra play for our healthcare platform."',
    personInitials: 'DCW',
    personName: 'Dr. Chen Wei',
    personRole: 'Founder',
  },
  {
    initials: 'ES',
    company: 'EduSpark',
    industry: 'EdTech',
    quote:
      '"The 24/7 AI support meant our educational platform launched 3 months ahead of schedule."',
    personInitials: 'SJ',
    personName: 'Sarah Johnson',
    personRole: 'Product Lead',
  },
  {
    initials: 'RM',
    company: 'RetailMax',
    industry: 'E-Commerce',
    quote: '"AINKA\'s mobile app solution increased our customer engagement by 200%."',
    personInitials: 'MB',
    personName: 'Mike Brown',
    personRole: 'Director',
  },
  {
    initials: 'CN',
    company: 'CloudNine',
    industry: 'SaaS',
    quote: '"The code quality and architecture exceeded our expectations. Truly masterful work."',
    personInitials: 'ED',
    personName: 'Emily Davis',
    personRole: 'VP Engineering',
  },
]

export default function CaseStudiesSection() {
  return (
    <motion.section
      id="case-studies"
      className="bg-gradient-hero"
      variants={fadeUpContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="mx-auto max-w-6xl px-4 py-20 lg:px-6">
        {/* label */}
        <motion.div
          variants={fadeUpItem}
          className="mb-4 flex items-center justify-center gap-3 text-xs font-semibold tracking-[0.2em] text-red-400"
        >
          <span className="h-[1px] w-10 bg-red-500" />
          CASE STUDIES
          <span className="h-[1px] w-10 bg-red-500" />
        </motion.div>

        {/* title + subtitle */}
        <motion.h2
          variants={fadeUpItem}
          className="text-center text-3xl font-bold text-slate-100 sm:text-4xl"
        >
          Symphonies we&apos;ve conducted
        </motion.h2>
        <motion.p
          variants={fadeUpItem}
          className="mt-2 text-center text-sm text-slate-400 sm:text-base"
        >
          Real results from real partnerships
        </motion.p>

        {/* GRID OF CARDS */}
        <motion.div
          variants={fadeUpContainer}
          className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {caseStudies.map((cs) => (
            <motion.article
              key={cs.company}
              variants={softScale}
              className="flex h-full flex-col rounded-3xl border border-slate-800 bg-slate-900/40 p-6 sm:p-7"
            >
              {/* top: company */}
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-800 text-xs font-semibold text-slate-200">
                  {cs.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-100">{cs.company}</div>
                  <div className="text-xs text-slate-400">{cs.industry}</div>
                </div>
              </div>

              {/* quote */}
              <div className="mt-6 text-sm leading-relaxed text-slate-300">
                <div className="mb-2">
                  <Quote className="h-6 w-6 text-slate-500" />
                </div>
                <p>{cs.quote}</p>
              </div>

              {/* footer: person */}
              <div className="mt-6 border-t border-slate-800 pt-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-xs font-semibold text-slate-200">
                    {cs.personInitials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-100">{cs.personName}</div>
                    <div className="text-xs text-slate-400">{cs.personRole}</div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
