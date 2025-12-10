'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import { fadeUpContainer, fadeUpItem, softScale } from '@/app/_motion/variants'

type AnimatedStatNumberProps = {
  value: number
  suffix?: React.ReactNode
  duration?: number
}

function AnimatedStatNumber({ value, suffix, duration = 1.8 }: AnimatedStatNumberProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, { once: true, amount: 0.6 })

  const motionValue = useMotionValue(0)
  const rounded = useTransform(motionValue, (latest) => Math.round(latest))
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const controls = animate(motionValue, value, {
      duration,
      ease: 'easeOut',
    })

    return () => {
      controls.stop()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView, value])

  useEffect(() => {
    const unsub = rounded.on('change', (v) => setDisplay(v))
    return () => unsub()
  }, [rounded])

  return (
    <div
      ref={ref}
      className="inline-flex items-baseline justify-center text-5xl font-semibold text-slate-50 sm:text-6xl"
    >
      <span>{display}</span>
      {suffix && <span className="ml-1">{suffix}</span>}
    </div>
  )
}

export default function PerformanceSection() {
  return (
    <>
      {/* PERFORMANCE STATS – nền tối thường (xen kẽ với Services gradient) */}
      <motion.section
        id="performance"
        className="bg-slate-950"
        variants={fadeUpContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20 lg:px-6">
          {/* label */}
          <motion.div
            variants={fadeUpItem}
            className="mb-4 flex items-center justify-center gap-3 text-xs font-semibold tracking-[0.2em] text-red-400"
          >
            <span className="h-[1px] w-10 bg-red-500" />
            PERFORMANCE
            <span className="h-[1px] w-10 bg-red-500" />
          </motion.div>

          {/* title */}
          <motion.h2
            variants={fadeUpItem}
            className="text-center text-3xl font-bold leading-tight text-slate-100 sm:text-4xl"
          >
            Numbers that speak volumes
          </motion.h2>

          {/* stats */}
          <motion.div
            variants={fadeUpContainer}
            className="mt-10 grid gap-10 text-center text-slate-300 sm:grid-cols-2 lg:grid-cols-4"
          >
            {/* 1 */}
            <motion.div variants={fadeUpItem}>
              <AnimatedStatNumber
                value={24}
                suffix={<span className="text-sky-500 text-4xl sm:text-5xl leading-none">/7</span>}
              />
              <div className="mt-4 text-sm font-semibold text-slate-100">
                Continuous AI Performance
              </div>
              <div className="mt-1 text-xs text-slate-400">Round-the-clock productivity</div>
            </motion.div>

            {/* 2 */}
            <motion.div variants={fadeUpItem}>
              <AnimatedStatNumber
                value={40}
                suffix={<span className="text-sky-500 text-4xl sm:text-5xl leading-none">%</span>}
              />
              <div className="mt-4 text-sm font-semibold text-slate-100">Faster Delivery Speed</div>
              <div className="mt-1 text-xs text-slate-400">Compared to traditional methods</div>
            </motion.div>

            {/* 3 */}
            <motion.div variants={fadeUpItem}>
              <AnimatedStatNumber
                value={50}
                suffix={<span className="text-sky-500 text-4xl sm:text-5xl leading-none">+</span>}
              />
              <div className="mt-4 text-sm font-semibold text-slate-100">AI Instruments Ready</div>
              <div className="mt-1 text-xs text-slate-400">Models trained for your needs</div>
            </motion.div>

            {/* 4 */}
            <motion.div variants={fadeUpItem}>
              <AnimatedStatNumber value={4} />
              <div className="mt-4 text-sm font-semibold text-slate-100">Countries</div>
              <div className="mt-1 text-xs text-slate-400">Vietnam · Singapore · Canada · US</div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* QUOTE BLOCK – nền gradient (tiếp tục xen kẽ) */}
      <motion.section
        className="bg-gradient-hero"
        variants={softScale}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="mx-auto max-w-4xl px-4 py-16 sm:py-20 lg:px-6 text-center">
          {/* quote icon */}
          <div className="mb-6 text-3xl text-slate-400/70">”</div>

          {/* main text */}
          <h3 className="text-2xl font-semibold leading-snug text-slate-100 sm:text-3xl md:text-4xl">
            <span className="block">AI working beyond borders —</span>
            <span className="block text-sky-400">Humans living beyond limits.</span>
          </h3>

          {/* description */}
          <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
            AI plays tirelessly in the background. Humans lead the vision, the creativity, and the
            life they deserve.
          </p>

          {/* slider dots style */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <span className="h-[1px] w-16 bg-slate-600" />
            <span className="h-2 w-2 rounded-full bg-red-500" />
            <span className="h-[1px] w-16 bg-slate-600" />
          </div>
        </div>
      </motion.section>
    </>
  )
}
