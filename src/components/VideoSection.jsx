import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Clock } from 'lucide-react'

const frames = [
  {
    frame: '00:00 - 00:05',
    title: 'Öppning',
    desc: 'Mörk skärm. Text tonar in: "Varje dag tappar svenska byggföretag jobb. Inte för att de är dåliga. Utan för att de inte hinner."',
    emoji: '🎬',
    bg: 'from-stone-800 to-stone-900',
  },
  {
    frame: '00:05 - 00:15',
    title: 'Problemet visas',
    desc: 'Split-screen: till vänster sitter Karl sent på kvällen och skriver en offert. Till höger visas missade samtal och oöppnade mejl.',
    emoji: '😓',
    bg: 'from-red-900/60 to-stone-900',
  },
  {
    frame: '00:15 - 00:30',
    title: 'AI-lösningen',
    desc: 'Animerat flöde visar hur AI tar emot en förfrågan, genererar en offert och skickar den. Allt på 5 minuter. Ren motion graphic.',
    emoji: '⚡',
    bg: 'from-orange-900/50 to-stone-900',
  },
  {
    frame: '00:30 - 00:45',
    title: 'Kundintervju',
    desc: 'Karl Bergström syns på skärmen: "Vi skickade tre gånger fler offerter förra månaden. Utan att jobba mer." B-roll från byggarbetsplatsen.',
    emoji: '🎤',
    bg: 'from-blue-900/50 to-stone-900',
  },
  {
    frame: '00:45 - 01:00',
    title: 'CTA',
    desc: 'Konstrukt-logotypen. Slogan: "Mer tid att bygga. Vi sköter kunderna." URL och "Boka gratis samtal" animeras in.',
    emoji: '🚀',
    bg: 'from-green-900/50 to-stone-900',
  },
]

export default function VideoSection() {
  const [active, setActive] = useState(0)

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="section-label mb-3 block">Videokoncept</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-5 text-stone-900">
            Reklamfilm: 60 sekunder
          </h2>
          <p className="text-stone-500 text-xl max-w-2xl mx-auto">
            Storyboard och manus för Bergström Byggsatt reklamfilm.
            Designad för Facebook, Instagram och YouTube pre-roll.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
          {/* Storyboard viewer */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-border rounded-2xl overflow-hidden shadow-card"
          >
            <div className={`relative bg-gradient-to-br ${frames[active].bg} flex flex-col items-center justify-center text-center px-10 py-14`} style={{ aspectRatio: '16/9' }}>
              <div className="text-5xl mb-4">{frames[active].emoji}</div>
              <div className="text-orange-300 text-xs font-mono mb-2">{frames[active].frame}</div>
              <h3 className="text-white font-bold text-xl mb-3">{frames[active].title}</h3>
              <p className="text-stone-300 text-sm leading-relaxed max-w-sm">{frames[active].desc}</p>

              <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-black/40 rounded-lg px-3 py-1.5 backdrop-blur">
                <div className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                <span className="text-white text-xs font-bold">STORYBOARD</span>
              </div>

              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center">
                  <Play size={24} className="text-white ml-1" fill="white" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
                <div
                  className="h-full bg-accent-orange transition-all duration-300"
                  style={{ width: `${(active / (frames.length - 1)) * 100}%` }}
                />
              </div>
            </div>

            <div className="p-4 flex gap-2">
              {frames.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`flex-1 h-1.5 rounded-full transition-colors ${i === active ? 'bg-accent-orange' : 'bg-border hover:bg-stone-300'}`}
                />
              ))}
            </div>
          </motion.div>

          {/* Script + specs */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-5"
          >
            <div className="bg-white border border-border rounded-2xl p-7 shadow-card">
              <h3 className="text-stone-900 font-bold text-lg mb-5 flex items-center gap-2">
                <Clock size={17} className="text-accent-orange" /> Tekniska specifikationer
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Längd', value: '45-60 sek' },
                  { label: 'Format', value: '16:9 + 9:16' },
                  { label: 'Målgrupp', value: '35-60 år, husägare' },
                  { label: 'Plattform', value: 'Meta och YouTube' },
                  { label: 'Musik', value: 'AI-jingle' },
                  { label: 'Voiceover', value: 'AI-genererad SE' },
                ].map(({ label, value }) => (
                  <div key={label} className="bg-bg-primary rounded-lg p-3 border border-border">
                    <div className="text-stone-400 text-xs mb-1">{label}</div>
                    <div className="text-stone-900 text-sm font-semibold">{value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-border rounded-2xl p-7 flex-1 shadow-card">
              <h3 className="text-stone-900 font-bold text-lg mb-5">Manus (AI-genererat, redigerat)</h3>
              <div className="space-y-4 text-sm">
                {[
                  { role: 'V.O.', color: 'text-accent-orange', text: '"Varje vecka skriver Karl Bergström offerter i timmar. Ibland till midnatt. Och ändå hinner han inte med alla som hör av sig."' },
                  { role: 'KARL', color: 'text-blue-600', text: '"Vi hade mer efterfrågan än vi hann hantera. Det var ett lyxproblem men det kostade oss jobb vi borde ha vunnit."' },
                  { role: 'V.O.', color: 'text-accent-orange', text: '"Konstrukt automatiserade Karls offertprocess. Nu hanteras varje förfrågan inom 5 minuter."' },
                  { role: 'KARL', color: 'text-blue-600', text: '"Vi skickade tre gånger fler offerter förra månaden. Utan att jobba mer."' },
                  { role: 'TEXT', color: 'text-green-600', text: '"Konstrukt. Mer tid att bygga."' },
                ].map((l, i) => (
                  <div key={i} className="flex gap-3">
                    <span className={`font-mono font-bold w-12 flex-shrink-0 text-xs pt-0.5 ${l.color}`}>{l.role}</span>
                    <p className="text-stone-600 italic text-sm leading-relaxed">{l.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
