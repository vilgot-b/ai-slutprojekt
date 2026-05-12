import { motion } from 'framer-motion'
import { Play, Clock, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const storyboardFrames = [
  {
    frame: '00:00 – 00:05',
    title: 'Öppning',
    desc: 'Svart skärm. Text tonar in: "Varje dag tappar svenska byggföretag jobb — inte för att de är dåliga, utan för att de inte hinner."',
    bg: 'from-gray-900 to-gray-800',
    icon: '🎬',
  },
  {
    frame: '00:05 – 00:15',
    title: 'Problemet',
    desc: 'Split-screen: till vänster sitter Karl sent på kvällen och skriver en offert manuellt. Till höger visas missade samtal och oöppnade e-post.',
    bg: 'from-red-900/40 to-gray-900',
    icon: '😓',
  },
  {
    frame: '00:15 – 00:30',
    title: 'Lösningen',
    desc: 'Animerat flöde visar hur AI tar emot en förfrågan, genererar en offert och skickar den — allt på 5 minuter. Snabb, clean motion graphic.',
    bg: 'from-accent-blue/20 to-gray-900',
    icon: '⚡',
  },
  {
    frame: '00:30 – 00:45',
    title: 'Kundintervju',
    desc: 'Karl Bergström syns på skärmen: "Vi skickade 3 gånger fler offerter förra månaden. Utan att jobba mer." B-roll: byggarbetsplatsen, glada kunder.',
    bg: 'from-green-900/30 to-gray-900',
    icon: '🎤',
  },
  {
    frame: '00:45 – 01:00',
    title: 'CTA',
    desc: 'Konstrukt-logotypen på skärmen. Slogan: "Mer tid att bygga. Vi sköter kunderna." URL och "Boka gratis samtal" animeras in.',
    bg: 'from-accent-purple/20 to-gray-900',
    icon: '🚀',
  },
]

export default function VideoSection() {
  const [activeFrame, setActiveFrame] = useState(0)

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="orb w-[400px] h-[400px] bg-accent-purple top-[10%] right-[-100px]" style={{ opacity: 0.07 }} />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4 block">Videokoncept</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
            Reklamfilm
            <br />
            <span className="gradient-text">60 sekunder som konverterar</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Storyboard och koncept för Bergström Byggsatt reklamfilm. Designad för
            Facebook, Instagram och YouTube pre-roll. AI-skrivet manus.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Video placeholder / storyboard viewer */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-bg-card border border-bg-border rounded-2xl overflow-hidden"
          >
            {/* Video frame */}
            <div className={`relative bg-gradient-to-br ${storyboardFrames[activeFrame].bg} flex flex-col items-center justify-center`} style={{ aspectRatio: '16/9' }}>
              {/* Placeholder video area */}
              <div className="text-center px-8">
                <div className="text-6xl mb-4">{storyboardFrames[activeFrame].icon}</div>
                <div className="text-accent-blueLight text-sm font-mono mb-2">{storyboardFrames[activeFrame].frame}</div>
                <h3 className="text-white font-bold text-xl mb-3">{storyboardFrames[activeFrame].title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed max-w-sm mx-auto">
                  {storyboardFrames[activeFrame].desc}
                </p>
              </div>

              {/* Overlay badge */}
              <div className="absolute top-4 left-4 bg-bg-card/90 backdrop-blur border border-bg-border rounded-lg px-3 py-2 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-white text-xs font-bold">VIDEO PLACEHOLDER</span>
              </div>

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <div className="w-20 h-20 rounded-full border-2 border-white flex items-center justify-center">
                  <Play size={28} className="text-white ml-2" fill="white" />
                </div>
              </div>

              {/* Progress bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-bg-border">
                <motion.div
                  className="h-full bg-accent-blue"
                  style={{ width: `${(activeFrame / (storyboardFrames.length - 1)) * 100}%` }}
                  animate={{ width: `${(activeFrame / (storyboardFrames.length - 1)) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            {/* Frame navigation */}
            <div className="p-4 flex gap-2">
              {storyboardFrames.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveFrame(i)}
                  className={`flex-1 h-1.5 rounded-full transition-all ${
                    i === activeFrame ? 'bg-accent-blue' : 'bg-bg-border hover:bg-bg-cardHover'
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Script & details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <div className="bg-bg-card border border-bg-border rounded-2xl p-7">
              <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                <Clock size={18} className="text-accent-blue" />
                Tekniska specifikationer
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Längd', value: '45–60 sek' },
                  { label: 'Format', value: '16:9 + 9:16' },
                  { label: 'Målgrupp', value: '35–60 år, husägare' },
                  { label: 'Plattform', value: 'Meta + YouTube' },
                  { label: 'Musik', value: 'AI-jingle (se nedan)' },
                  { label: 'Voiceover', value: 'AI-genererad, SE' },
                ].map(({ label, value }) => (
                  <div key={label} className="bg-bg-secondary rounded-lg p-3 border border-bg-border">
                    <div className="text-gray-500 text-xs mb-1">{label}</div>
                    <div className="text-white text-sm font-medium">{value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Script excerpt */}
            <div className="bg-bg-card border border-bg-border rounded-2xl p-7 flex-1">
              <h3 className="text-white font-bold text-lg mb-4">Manus (AI-genererat, redigerat)</h3>
              <div className="space-y-4 text-sm">
                <div className="flex gap-3">
                  <span className="text-accent-blue font-mono font-bold w-12 flex-shrink-0">V.O.</span>
                  <p className="text-gray-300 italic">
                    "Varje vecka skriver Karl Bergström offerter i timmar. Ibland till midnatt.
                    Och ändå hinner han inte med alla som hör av sig."
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-green-400 font-mono font-bold w-12 flex-shrink-0">KARL</span>
                  <p className="text-gray-300 italic">
                    "Vi hade mer efterfrågan än vi hann hantera. Det var ett lyxproblem —
                    men det kostade oss jobb vi borde ha vunnit."
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-accent-blue font-mono font-bold w-12 flex-shrink-0">V.O.</span>
                  <p className="text-gray-300 italic">
                    "Konstrukt automatiserade Karls offertprocess. Nu hanteras varje
                    förfrågan inom 5 minuter — oavsett tid på dygnet."
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-green-400 font-mono font-bold w-12 flex-shrink-0">KARL</span>
                  <p className="text-gray-300 italic">
                    "Vi skickade tre gånger fler offerter förra månaden. Utan att jobba mer."
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="text-purple-400 font-mono font-bold w-12 flex-shrink-0">TEXT</span>
                  <p className="text-white font-semibold">
                    "Konstrukt. Mer tid att bygga."
                  </p>
                </div>
              </div>
            </div>

            <a
              href="#kontakt"
              className="bg-accent-blue hover:bg-accent-blueLight text-white font-semibold px-6 py-4 rounded-xl transition-all duration-200 glow-blue flex items-center justify-center gap-2 group"
            >
              Beställ videoproduktion
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
