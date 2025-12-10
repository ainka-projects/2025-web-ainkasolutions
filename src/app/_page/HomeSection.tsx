'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, Music2, Code2, Globe2 } from 'lucide-react'
import { fadeUpContainer, fadeUpItem, softScale } from '@/app/_motion/variants'

export default function HomeSection() {
  return (
    <>
      {/* HERO – bg-gradient-hero */}
      <motion.section
        id="hero"
        className="bg-gradient-hero"
        variants={fadeUpContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-5xl flex-col items-center justify-center px-4 pt-28 pb-20 text-center lg:px-6"
          variants={fadeUpContainer}
        >
          {/* badge */}
          <motion.div
            variants={fadeUpItem}
            className="inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-900/60 px-3 py-1 text-xs font-medium text-slate-300"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500/60 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
            </span>
            AI-Powered Software Development
          </motion.div>

          {/* title */}
          <motion.h1
            variants={fadeUpItem}
            className="mt-6 space-y-2 text-3xl font-semibold leading-tight tracking-tight text-slate-50 sm:text-4xl md:text-5xl"
          >
            <span className="block">AI working beyond borders</span>
            <span className="block text-slate-300">Humans living beyond limits.</span>
          </motion.h1>

          {/* desc */}
          <motion.p
            variants={fadeUpItem}
            className="mt-4 max-w-2xl mx-auto text-sm leading-relaxed text-slate-300/90 sm:text-base"
          >
            A unified AI orchestra where every line of code plays in harmony — crafted, optimized,
            and conducted with precision.
          </motion.p>

          {/* buttons */}
          <motion.div
            variants={fadeUpItem}
            className="mt-6 flex flex-wrap items-center justify-center gap-3"
          >
            <button className="inline-flex items-center gap-2 rounded-full bg-red-500 px-5 py-2.5 text-sm font-semibold text-white shadow-xl transition hover:-translate-y-[1px] hover:bg-red-600">
              Start a Project
              <ArrowRight className="h-7 w-4" />
            </button>

            <button className="inline-flex items-center gap-2 rounded-full border border-slate-600/80 bg-slate-900/60 px-4 py-2.5 text-sm font-semibold text-slate-100 hover:border-slate-400 hover:-translate-y-[1px]">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-800">
                <Play className="h-3.5 w-3.5" />
              </span>
              Explore Services
            </button>
          </motion.div>

          {/* stats */}
          <motion.div
            variants={fadeUpContainer}
            className="mt-10 flex flex-wrap justify-center gap-8 text-xs text-slate-300 sm:text-sm"
          >
            <motion.div variants={fadeUpItem} className="text-center">
              <div className="text-lg font-semibold text-slate-50">24/7</div>
              <div className="text-slate-400">AI Performance</div>
            </motion.div>
            <motion.div variants={fadeUpItem} className="text-center">
              <div className="text-lg font-semibold text-slate-50">40%</div>
              <div className="text-slate-400">Faster Delivery</div>
            </motion.div>
            <motion.div variants={fadeUpItem} className="text-center">
              <div className="text-lg font-semibold text-slate-50">50+</div>
              <div className="text-slate-400">AI Instruments</div>
            </motion.div>
            <motion.div variants={fadeUpItem} className="text-center">
              <div className="text-lg font-semibold text-slate-50">4</div>
              <div className="text-slate-400">Countries</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ABOUT – nền default (xen kẽ với gradient) */}
      <motion.section
        id="about"
        className="bg-slate-950"
        variants={fadeUpContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div className="mx-auto max-w-5xl px-4 pb-20 pt-10 sm:pt-14 lg:px-6">
          <motion.div
            variants={fadeUpItem}
            className="mb-4 flex items-center gap-2 text-sm font-semibold tracking-wide text-red-400"
          >
            <span className="h-[1px] w-6 bg-red-500" />
            ABOUT AINKA
          </motion.div>

          <motion.h2
            variants={fadeUpItem}
            className="max-w-3xl text-3xl font-bold leading-tight text-slate-100 sm:text-4xl md:text-5xl"
          >
            Crafting software the way orchestras create masterpieces.
          </motion.h2>

          <motion.p
            variants={fadeUpItem}
            className="mt-4 max-w-3xl text-sm sm:text-base leading-relaxed text-slate-300"
          >
            AINKA Solutions is a global AI-powered software consulting company based in{' '}
            <span className="font-semibold text-slate-100">Vietnam</span>,{' '}
            <span className="font-semibold text-slate-100">Singapore</span>, and{' '}
            <span className="font-semibold text-slate-100">Canada</span>. We orchestrate AI models
            like instruments to build faster, cleaner, and more scalable platforms.
          </motion.p>

          <motion.div
            variants={fadeUpContainer}
            className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3"
          >
            <motion.div
              variants={softScale}
              className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800">
                <Music2 className="h-5 w-5 text-sky-300" />
              </div>
              <div className="mb-2 font-semibold text-slate-100">AI Symphony</div>
              <p className="text-sm leading-relaxed text-slate-400">
                Every AI model plays its part in perfect harmony, creating solutions greater than
                the sum of their parts.
              </p>
            </motion.div>

            <motion.div
              variants={softScale}
              className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800">
                <Code2 className="h-5 w-5 text-purple-300" />
              </div>
              <div className="mb-2 font-semibold text-slate-100">Clean Code</div>
              <p className="text-sm leading-relaxed text-slate-400">
                Code that reads like music — elegant, optimized, and built to scale with your
                vision.
              </p>
            </motion.div>

            <motion.div
              variants={softScale}
              className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800">
                <Globe2 className="h-5 w-5 text-blue-300" />
              </div>
              <div className="mb-2 font-semibold text-slate-100">Global Reach</div>
              <p className="text-sm leading-relaxed text-slate-400">
                Borderless development powered by AI, delivering 24/7 productivity across time
                zones.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  )
}
