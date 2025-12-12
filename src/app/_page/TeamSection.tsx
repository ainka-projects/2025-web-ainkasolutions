'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeUpContainer, fadeUpItem, softScale } from '@/app/_motion/variants'

const team = [
  {
    initials: 'LD',
    name: 'Linda Duc Minh',
    role: 'Co-Founder',
    country: 'Vietnam',
  },
  {
    initials: 'FG',
    name: 'Florian Grousset',
    role: 'Co-Founder',
    country: 'France',
  },
  {
    initials: 'GH',
    name: 'Guillaume Hennion',
    role: 'Co-Founder',
    country: 'France',
  },
  {
    initials: 'PL',
    name: 'Pascal Leytens',
    role: 'Co-Founder',
    country: 'Belgium',
  },
]

export default function TeamSection() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null)

  return (
    <motion.section
      id="team"
      className="bg-slate-950"
      variants={fadeUpContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="mx-auto max-w-2xl px-4 py-20">
        {/* label */}
        <motion.div
          variants={fadeUpItem}
          className="mb-4 flex items-center justify-center gap-3 text-xs font-semibold tracking-[0.2em] text-red-400"
        >
          <span className="h-[1px] w-10 bg-red-500" />
          OUR TEAM
          <span className="h-[1px] w-10 bg-red-500" />
        </motion.div>

        {/* title */}
        <motion.h2
          variants={fadeUpItem}
          className="text-center text-3xl font-bold text-slate-100 sm:text-4xl"
        >
          Founders & Visionaries
        </motion.h2>
        <motion.p
          variants={fadeUpItem}
          className="mt-2 text-center text-sm text-slate-400 sm:text-base"
        >
          Global leadership with a shared long-term vision
        </motion.p>

        {/* GRID – col-2 */}
        <motion.div variants={fadeUpContainer} className="mt-14 grid gap-12 sm:grid-cols-2">
          {team.map((member, i) => (
            <motion.div key={i} variants={fadeUpItem} className="flex flex-col items-center">
              {/* CARD */}
              <motion.div
                variants={softScale}
                className="relative h-72 w-full max-w-[240px] rounded-3xl
                           border border-slate-800 bg-[#0f172a]/60
                           flex items-center justify-center
                           text-2xl font-semibold text-slate-500
                           transition-all duration-300
                           hover:shadow-xl hover:shadow-blue-500/10"
                onMouseEnter={() => setHoverIndex(i)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                {member.initials}

                {/* COUNTRY TAG */}
                <div
                  className={`absolute bottom-4 left-1/2 -translate-x-1/2
                              flex items-center gap-1 rounded-full px-3 py-1
                              text-xs bg-slate-900/70 border border-slate-700/60
                              transition-all duration-300
                              ${
                                hoverIndex === i
                                  ? 'opacity-100 translate-y-0'
                                  : 'opacity-0 translate-y-3'
                              }`}
                >
                  <span className="h-2 w-2 rounded-full bg-red-500" />
                  <span className="text-slate-300">{member.country}</span>
                </div>
              </motion.div>

              {/* NAME + ROLE */}
              <div className="mt-4 text-center">
                <div className="text-base font-semibold text-sky-400">{member.name}</div>
                <div className="text-sm text-slate-400">{member.role}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
