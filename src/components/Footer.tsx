import Image from 'next/image'
import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/60 bg-slate-950">
      <div className="mx-auto max-w-5xl px-4 py-10 lg:px-6">
        {/* top */}
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* brand */}
          <div className="max-w-sm space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-slate-900 ring-1 ring-slate-700/70 overflow-hidden">
                <Image
                  src="/images/logo/ainka-logo-100.png"
                  alt="Ainka Solutions"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-sm text-slate-400">
              AI-powered software development that transforms ideas into symphonies of code.
            </p>
          </div>

          {/* columns */}
          <div className="grid flex-1 gap-8 text-sm sm:grid-cols-3">
            {/* Services */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">
                Services
              </h3>
              <ul className="mt-3 space-y-2 text-slate-400">
                <li>
                  <Link href="#services" className="hover:text-slate-200">
                    AI Development
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-slate-200">
                    Web &amp; Mobile Apps
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-slate-200">
                    AI Integration
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-slate-200">
                    Consulting
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">
                Company
              </h3>
              <ul className="mt-3 space-y-2 text-slate-400">
                <li>
                  <Link href="#about" className="hover:text-slate-200">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#team" className="hover:text-slate-200">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="#case-studies" className="hover:text-slate-200">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-slate-200">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">
                Contact
              </h3>
              <ul className="mt-3 space-y-2 text-slate-400 text-sm">
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-slate-500" />
                  <a href="mailto:hello@ainka.global" className="hover:text-slate-200">
                    hello@ainka.global
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-slate-500" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-slate-500" />
                  <span>Vietnam · Singapore · Canada · US</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* bottom line */}
        <div className="mt-8 border-t border-slate-800/60 pt-4 text-xs text-slate-500 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p>© 2024 AINKA Global. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-slate-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
