import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, HardHat } from 'lucide-react'

const links = [
  { label: 'Start', to: '/' },
  { label: 'Tjänster', to: '/tjanster' },
  { label: 'Kundcase', to: '/kundcase' },
  { label: 'Så använde vi AI', to: '/om-ai' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [location])

  return (
    <header className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? 'shadow-card-md' : 'border-b border-border'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 bg-accent-orange rounded-lg flex items-center justify-center shadow-card group-hover:bg-accent-orangeLight transition-colors">
            <HardHat size={18} className="text-white" />
          </div>
          <span className="font-black text-xl text-stone-900 tracking-tight">
            Konstrukt<span className="text-accent-orange">.</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-accent-orangePale text-accent-orange'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-bg-secondary'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link to="/om-ai" className="text-sm text-stone-500 hover:text-stone-800 font-medium transition-colors">
            Kontakt
          </Link>
          <Link
            to="/kundcase"
            className="bg-accent-orange hover:bg-accent-orangeLight text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors shadow-card"
          >
            Boka samtal
          </Link>
        </div>

        <button className="md:hidden text-stone-600 hover:text-stone-900" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-white overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }) =>
                    `px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive ? 'bg-accent-orangePale text-accent-orange' : 'text-stone-700 hover:bg-bg-secondary'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <Link
                to="/kundcase"
                className="mt-2 bg-accent-orange text-white text-sm font-semibold px-4 py-3 rounded-lg text-center"
              >
                Boka samtal
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
