import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Zap } from 'lucide-react'

const links = [
  { label: 'Tjänster', href: '#tjanster' },
  { label: 'Så funkar det', href: '#hur-det-fungerar' },
  { label: 'Kundcase', href: '#kundcase' },
  { label: 'Om AI', href: '#ai-deklaration' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg-primary/90 backdrop-blur-xl border-b border-bg-border' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-accent-blue rounded-lg flex items-center justify-center glow-blue group-hover:glow-blue-strong transition-all">
            <Zap size={16} className="text-white" fill="white" />
          </div>
          <span className="text-white font-bold text-xl tracking-tight">
            Konstrukt<span className="text-accent-blue">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-gray-400 hover:text-white text-sm font-medium transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#kontakt"
            className="text-sm text-gray-400 hover:text-white font-medium transition-colors"
          >
            Logga in
          </a>
          <a
            href="#kontakt"
            className="bg-accent-blue hover:bg-accent-blueLight text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200 glow-blue"
          >
            Boka samtal
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-gray-400 hover:text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-bg-secondary border-t border-bg-border overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-gray-300 hover:text-white py-1 font-medium transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#kontakt"
                className="bg-accent-blue text-white text-sm font-semibold px-4 py-3 rounded-lg text-center mt-2"
              >
                Boka samtal
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
