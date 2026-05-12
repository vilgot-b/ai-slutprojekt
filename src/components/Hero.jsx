import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play, ChevronDown } from 'lucide-react'

const words = ['Offertskrivning.', 'Kunduppföljning.', 'Bokningar.', 'Kundkontakter.']

function AnimatedWord() {
  const [index, setIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const word = words[index]
    if (typing) {
      if (displayed.length < word.length) {
        const t = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setTyping(false), 1800)
        return () => clearTimeout(t)
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
        return () => clearTimeout(t)
      } else {
        setIndex((i) => (i + 1) % words.length)
        setTyping(true)
      }
    }
  }, [displayed, typing, index])

  return (
    <span className="gradient-text">
      {displayed}
      <span className="cursor text-accent-blue">|</span>
    </span>
  )
}

const stats = [
  { value: '10x', label: 'Snabbare offerter' },
  { value: '3x', label: 'Fler bokade kunder' },
  { value: '15h', label: 'Sparad tid per vecka' },
  { value: '0', label: 'Missade leads' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden hero-grid">
      {/* Background orbs */}
      <div className="orb w-[600px] h-[600px] bg-accent-blue top-[-100px] left-[-200px]" />
      <div className="orb w-[500px] h-[500px] bg-accent-purple top-[20%] right-[-150px]" />
      <div className="orb w-[400px] h-[400px] bg-accent-cyan bottom-[5%] left-[30%]" style={{ opacity: 0.06 }} />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-bg-card border border-bg-border rounded-full px-4 py-2 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-gray-300 text-sm font-medium">AI-byrå för Sveriges byggföretag</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-black tracking-tight leading-tight mb-4 max-w-4xl"
        >
          Mer tid att bygga.
          <br />
          <span className="text-gray-400 font-light">AI sköter din</span>
          <br />
          <AnimatedWord />
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-xl md:text-2xl max-w-2xl mb-10 leading-relaxed"
        >
          Konstrukt hjälper byggföretag vinna fler jobb — med AI som skriver offerter,
          följer upp kunder och fyller din kalender automatiskt.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 mb-20"
        >
          <a
            href="#kontakt"
            className="bg-accent-blue hover:bg-accent-blueLight text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 glow-blue text-lg flex items-center gap-2 group justify-center"
          >
            Boka kostnadsfritt samtal
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#kundcase"
            className="border border-bg-border hover:border-accent-blue text-gray-300 hover:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-lg flex items-center gap-2 justify-center"
          >
            <Play size={18} className="text-accent-blue" fill="currentColor" />
            Se ett kundcase
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              className="bg-bg-card border border-bg-border rounded-xl p-5 text-center hover:border-accent-blue/40 transition-colors"
            >
              <div className="text-3xl md:text-4xl font-black gradient-text mb-1">{s.value}</div>
              <div className="text-gray-500 text-sm font-medium">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-600"
      >
        <span className="text-xs tracking-widest uppercase">Scrolla</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  )
}
