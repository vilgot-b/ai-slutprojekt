import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown, HardHat, ClipboardList, CalendarCheck } from 'lucide-react'

const words = ['Offertskrivning.', 'Kunduppföljning.', 'Bokningar.', 'Kundkontakter.']

function TypedWord() {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const word = words[index]
    if (typing) {
      if (text.length < word.length) {
        const t = setTimeout(() => setText(word.slice(0, text.length + 1)), 75)
        return () => clearTimeout(t)
      }
      const t = setTimeout(() => setTyping(false), 1800)
      return () => clearTimeout(t)
    } else {
      if (text.length > 0) {
        const t = setTimeout(() => setText(text.slice(0, -1)), 35)
        return () => clearTimeout(t)
      }
      setIndex((i) => (i + 1) % words.length)
      setTyping(true)
    }
  }, [text, typing, index])

  return (
    <span className="gradient-text">
      {text}
      <span className="cursor text-accent-orange">|</span>
    </span>
  )
}

const stats = [
  { value: '10x', label: 'Snabbare offerter', icon: ClipboardList },
  { value: '3x', label: 'Fler bokade kunder', icon: CalendarCheck },
  { value: '15h', label: 'Sparad tid per vecka', icon: HardHat },
  { value: '0', label: 'Missade leads', icon: ArrowRight },
]

// Simple construction SVG illustration
function BuildingIllustration() {
  return (
    <svg viewBox="0 0 480 340" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-lg mx-auto">
      {/* Sky / background */}
      <rect width="480" height="340" fill="#f7f5f2" />

      {/* Subtle ground */}
      <rect y="270" width="480" height="70" fill="#efecea" />
      <rect y="268" width="480" height="3" fill="#e5ded6" />

      {/* Building 1 – main office */}
      <rect x="80" y="100" width="140" height="170" fill="#ffffff" stroke="#e5ded6" strokeWidth="1.5" rx="3" />
      {/* Windows grid */}
      {[0,1,2,3].map(row => [0,1,2].map(col => (
        <rect key={`w1-${row}-${col}`} x={92 + col*42} y={112 + row*36} width="28" height="24"
          rx="2" fill={row === 0 && col === 1 ? '#fff7ed' : '#eff6ff'} stroke="#e5ded6" strokeWidth="1" />
      )))}
      {/* Door */}
      <rect x="140" y="225" width="40" height="45" rx="2" fill="#1c1917" opacity="0.08" />
      <rect x="140" y="225" width="40" height="45" rx="2" fill="none" stroke="#e5ded6" strokeWidth="1" />
      {/* Roof accent */}
      <rect x="80" y="95" width="140" height="8" rx="2" fill="#c2410c" opacity="0.15" />
      <rect x="80" y="95" width="140" height="4" rx="2" fill="#c2410c" opacity="0.6" />

      {/* Building 2 – taller */}
      <rect x="250" y="60" width="100" height="210" fill="#ffffff" stroke="#e5ded6" strokeWidth="1.5" rx="3" />
      {[0,1,2,3,4].map(row => [0,1].map(col => (
        <rect key={`w2-${row}-${col}`} x={264 + col*42} y={75 + row*36} width="26" height="22"
          rx="2" fill="#eff6ff" stroke="#e5ded6" strokeWidth="1" />
      )))}
      <rect x="295" y="225" width="30" height="45" rx="2" fill="none" stroke="#e5ded6" strokeWidth="1" />
      <rect x="250" y="55" width="100" height="8" rx="2" fill="#1d4ed8" opacity="0.6" />

      {/* Building 3 – small */}
      <rect x="370" y="160" width="80" height="110" fill="#ffffff" stroke="#e5ded6" strokeWidth="1.5" rx="3" />
      {[0,1].map(row => [0,1].map(col => (
        <rect key={`w3-${row}-${col}`} x={380 + col*32} y={172 + row*34} width="20" height="18"
          rx="2" fill="#fff7ed" stroke="#e5ded6" strokeWidth="1" />
      )))}
      <rect x="370" y="155" width="80" height="8" rx="2" fill="#c2410c" opacity="0.4" />

      {/* Crane */}
      <rect x="32" y="60" width="6" height="210" fill="#1c1917" opacity="0.12" rx="2" />
      <rect x="16" y="60" width="120" height="6" fill="#1c1917" opacity="0.12" rx="2" />
      <line x1="130" y1="63" x2="130" y2="105" stroke="#c2410c" strokeWidth="2" strokeDasharray="4 3" opacity="0.6" />
      <rect x="122" y="105" width="16" height="14" rx="2" fill="#c2410c" opacity="0.4" />

      {/* Hard hat on ground */}
      <ellipse cx="60" cy="272" rx="22" ry="8" fill="#ea580c" opacity="0.15" />
      <path d="M42 268 Q60 255 78 268 L78 272 L42 272 Z" fill="#ea580c" opacity="0.7" />
      <rect x="38" y="270" width="44" height="4" rx="2" fill="#c2410c" opacity="0.5" />

      {/* Floating badge – AI offert */}
      <rect x="300" y="10" width="150" height="44" rx="10" fill="white" stroke="#e5ded6" strokeWidth="1" />
      <circle cx="320" cy="32" r="10" fill="#fff7ed" stroke="#fbd5b5" strokeWidth="1" />
      <text x="316" y="36" fontSize="10">⚡</text>
      <text x="336" y="28" fill="#1c1917" fontSize="9" fontWeight="700">Offert genererad</text>
      <text x="336" y="42" fill="#78716c" fontSize="8">5 min sedan • Godkänd</text>

      {/* Floating badge – AI bokning */}
      <rect x="10" y="155" width="130" height="44" rx="10" fill="white" stroke="#e5ded6" strokeWidth="1" />
      <circle cx="30" cy="177" r="10" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1" />
      <text x="25.5" y="181" fontSize="10">📅</text>
      <text x="46" y="173" fill="#1c1917" fontSize="9" fontWeight="700">Bokning bekräftad</text>
      <text x="46" y="187" fill="#78716c" fontSize="8">Tisdag 14:00 • Karl B.</text>

      {/* Measurement lines */}
      <line x1="78" y1="100" x2="78" y2="270" stroke="#c2410c" strokeWidth="0.75" strokeDasharray="3 3" opacity="0.3" />
      <line x1="222" y1="100" x2="222" y2="270" stroke="#c2410c" strokeWidth="0.75" strokeDasharray="3 3" opacity="0.3" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden blueprint-grid">
      {/* Warm top gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-orangePale/60 via-transparent to-accent-bluePale/30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: text */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white border border-border rounded-full px-4 py-2 shadow-card mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-stone-600 text-sm font-medium">AI-byrå specialiserad på byggföretag</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="text-5xl md:text-6xl font-black tracking-tight leading-[1.08] mb-6 text-stone-900"
          >
            Mer tid att bygga.
            <br />
            <span className="text-stone-400 font-light text-4xl md:text-5xl">AI sköter din</span>
            <br />
            <TypedWord />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="text-stone-600 text-xl leading-relaxed mb-10 max-w-lg"
          >
            Konstrukt hjälper svenska byggföretag vinna fler jobb med AI som skriver
            offerter, följer upp leads och fyller kalendern automatiskt.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="flex flex-col sm:flex-row gap-3 mb-14"
          >
            <Link
              to="/kundcase"
              className="bg-accent-orange hover:bg-accent-orangeLight text-white font-bold px-7 py-4 rounded-xl shadow-card-md transition-colors text-lg flex items-center gap-2 group justify-center"
            >
              Se ett kundcase
              <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              to="/tjanster"
              className="bg-white hover:bg-bg-secondary border border-border text-stone-700 hover:text-stone-900 font-semibold px-7 py-4 rounded-xl transition-colors text-lg flex items-center gap-2 justify-center shadow-card"
            >
              Utforska tjänsterna
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.32 }}
            className="grid grid-cols-2 gap-3"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.08 }}
                className="bg-white border border-border rounded-xl px-4 py-3 shadow-card"
              >
                <div className="text-2xl font-black gradient-text">{s.value}</div>
                <div className="text-stone-500 text-xs font-medium mt-0.5">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right: illustration */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="hidden lg:block"
        >
          <BuildingIllustration />
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="flex flex-col items-center gap-1 pb-8 text-stone-400"
      >
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  )
}
