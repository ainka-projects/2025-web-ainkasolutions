'use client'

import { motion } from 'framer-motion'
import { Code2, Smartphone, Workflow, ArrowUpRight } from 'lucide-react'
import { fadeUpContainer, fadeUpItem, softScale } from '@/app/_motion/variants'

export default function ServicesSection() {
  return (
    <motion.section
      id="services"
      className="bg-gradient-hero"
      variants={fadeUpContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="mx-auto max-w-5xl px-4 py-16 sm:py-20 lg:px-6">
        {/* label */}
        <motion.div
          variants={fadeUpItem}
          className="mb-4 flex items-center gap-2 text-sm font-semibold tracking-wide text-red-400"
        >
          <span className="h-[1px] w-6 bg-red-500" />
          SERVICES
        </motion.div>

        {/* title + desc */}
        <motion.h2
          variants={fadeUpItem}
          className="max-w-3xl text-3xl font-bold leading-tight text-slate-100 sm:text-4xl"
        >
          Every service, an instrument in your symphony
        </motion.h2>
        <motion.p
          variants={fadeUpItem}
          className="mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-slate-300"
        >
          We combine cutting-edge AI with human expertise to deliver exceptional results.
        </motion.p>

        {/* cards */}
        <motion.div variants={fadeUpContainer} className="mt-10 grid gap-6 md:grid-cols-3">
          {/* card 1 */}
          <motion.div
            variants={softScale}
            className="flex h-full flex-col rounded-3xl border border-slate-800 bg-slate-900/40 p-6 sm:p-7"
          >
            <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-b from-sky-500 to-blue-600 shadow-lg shadow-sky-500/30">
              <Code2 className="h-5 w-5 text-white" />
            </div>
            <h3 className="mb-2 text-base font-semibold text-slate-100 sm:text-lg">
              AI-driven Software Development
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-slate-400">
              Faster, cleaner, AI-assisted engineering that transforms your ideas into
              production-ready solutions.
            </p>
            <ul className="mb-4 space-y-1.5 text-sm text-slate-300">
              <li className="flex gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-sky-400" />
                <span>Smart code generation</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-sky-400" />
                <span>Automated testing</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-sky-400" />
                <span>Continuous optimization</span>
              </li>
            </ul>
            <button className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-sky-300 hover:text-sky-200">
              Learn more
              <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          </motion.div>

          {/* card 2 */}
          <motion.div
            variants={softScale}
            className="flex h-full flex-col rounded-3xl border border-slate-800 bg-slate-900/40 p-6 sm:p-7"
          >
            <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-b from-indigo-500 to-blue-700 shadow-lg shadow-indigo-500/30">
              <Smartphone className="h-5 w-5 text-white" />
            </div>
            <h3 className="mb-2 text-base font-semibold text-slate-100 sm:text-lg">
              Website &amp; Mobile App
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-slate-400">
              High-end digital experiences built with global standards and pixel-perfect precision.
            </p>
            <ul className="mb-4 space-y-1.5 text-sm text-slate-300">
              <li className="flex gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-sky-400" />
                <span>Responsive design</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-sky-400" />
                <span>Native performance</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-sky-400" />
                <span>Scalable architecture</span>
              </li>
            </ul>
            <button className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-sky-300 hover:text-sky-200">
              Learn more
              <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          </motion.div>

          {/* card 3 */}
          <motion.div
            variants={softScale}
            className="flex h-full flex-col rounded-3xl border border-slate-800 bg-slate-900/40 p-6 sm:p-7"
          >
            <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-b from-red-500 to-rose-600 shadow-lg shadow-red-500/30">
              <Workflow className="h-5 w-5 text-white" />
            </div>
            <h3 className="mb-2 text-base font-semibold text-slate-100 sm:text-lg">
              AI Integration &amp; Automation
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-slate-400">
              Where QA, BA, and testing are played flawlessly by AI, freeing your team for creative
              work.
            </p>
            <ul className="mb-4 space-y-1.5 text-sm text-slate-300">
              <li className="flex gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-sky-400" />
                <span>Workflow automation</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-sky-400" />
                <span>Intelligent testing</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-sky-400" />
                <span>Process optimization</span>
              </li>
            </ul>
            <button className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-sky-300 hover:text-sky-200">
              Learn more
              <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
