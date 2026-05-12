import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Play, Pause, Volume2, Music, Mic, Waves } from 'lucide-react'

// Animated waveform component (purely visual)
function Waveform({ playing, color = '#4f70f5' }) {
  const bars = 48
  return (
    <div className="flex items-center gap-[3px] h-12 px-4">
      {Array.from({ length: bars }, (_, i) => (
        <motion.div
          key={i}
          className="rounded-full flex-shrink-0"
          style={{ width: 4, backgroundColor: color, opacity: 0.7 + (i % 3) * 0.1 }}
          animate={playing ? {
            height: [4, 8 + Math.sin(i * 0.5) * 20 + 10, 4],
          } : {
            height: 4 + Math.sin(i * 0.5) * 8 + 4,
          }}
          transition={playing ? {
            duration: 0.8 + (i % 5) * 0.1,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.02,
          } : {}}
        />
      ))}
    </div>
  )
}

const audioItems = [
  {
    id: 'jingle',
    icon: Music,
    title: 'Reklamjingle – Bergström Bygg',
    desc: 'En 15-sekunds jingle för TV- och radiospot. Glad, professionell och minnesvärd ton med akustisk gitarr och kör.',
    tool: 'Suno AI',
    duration: '0:15',
    color: '#4f70f5',
    lightColor: '#7b97ff',
    style: 'Akustisk pop, dur-tonart, ljus känsla',
    lyrics: '"Bergström Bygg — vi bygger ditt drömhem / Med hjärta och händer / i Göteborg sen länge. / Ring oss idag!"',
    usage: 'Radio-spot, YouTube-annons, TikTok',
  },
  {
    id: 'voiceover',
    icon: Mic,
    title: 'AI Voiceover – Reklamfilm',
    desc: 'AI-genererad svensk röstöver för reklamfilmen. Neutral, välvårdad rikssvenska — klar och trovärdig.',
    tool: 'ElevenLabs',
    duration: '0:52',
    color: '#7c3aed',
    lightColor: '#a855f7',
    style: 'Manlig röst, lugn takt, professionell ton',
    lyrics: '"Varje vecka skriver Karl Bergström offerter i timmar..."',
    usage: 'Reklamfilm voiceover',
  },
  {
    id: 'ambient',
    icon: Waves,
    title: 'Bakgrundsmusik – Hemsida',
    desc: 'Subtil ambient musik för en eventuell interaktiv demo på hemsidan. Inte påträngande, men skapar rätt känsla.',
    tool: 'Udio AI',
    duration: '2:30',
    color: '#00d4ff',
    lightColor: '#67e8f9',
    style: 'Elektronisk ambient, 90 BPM, B-dur',
    lyrics: 'Instrumentalt — inga text',
    usage: 'Hemsida ambient, demo-video bgm',
  },
]

function AudioPlayer({ item }) {
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const intervalRef = useRef(null)

  const toggle = () => {
    if (playing) {
      clearInterval(intervalRef.current)
      setPlaying(false)
    } else {
      setPlaying(true)
      intervalRef.current = setInterval(() => {
        setProgress(p => {
          if (p >= 100) {
            clearInterval(intervalRef.current)
            setPlaying(false)
            return 0
          }
          return p + 0.5
        })
      }, 50)
    }
  }

  useEffect(() => () => clearInterval(intervalRef.current), [])

  return (
    <div className="bg-bg-card border border-bg-border rounded-2xl overflow-hidden hover:border-accent-blue/30 transition-colors">
      {/* Header */}
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: item.color + '20', border: `1px solid ${item.color}30` }}
          >
            <item.icon size={22} style={{ color: item.lightColor }} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-white font-bold">{item.title}</h3>
              <span className="text-gray-500 text-sm">{item.duration}</span>
            </div>
            <p className="text-gray-400 text-sm">{item.desc}</p>
          </div>
        </div>
      </div>

      {/* Waveform player */}
      <div className="border-t border-bg-border bg-bg-secondary/50">
        <div className="flex items-center gap-3 px-4 py-3">
          <button
            onClick={toggle}
            className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all hover:scale-110 active:scale-95"
            style={{ backgroundColor: item.color }}
          >
            {playing
              ? <Pause size={16} className="text-white" fill="white" />
              : <Play size={16} className="text-white ml-0.5" fill="white" />}
          </button>

          <div className="flex-1 overflow-hidden">
            <Waveform playing={playing} color={item.color} />
          </div>

          <Volume2 size={16} className="text-gray-500 flex-shrink-0" />
        </div>

        {/* Progress bar */}
        <div className="h-1 bg-bg-border mx-4 mb-3 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ width: `${progress}%`, backgroundColor: item.color }}
            transition={{ duration: 0.1 }}
          />
        </div>

        <div className="text-center text-xs text-gray-600 pb-2 pb-3">
          🔇 Audio-placeholder — i produktion skapas verklig ljudfil med {item.tool}
        </div>
      </div>

      {/* Meta */}
      <div className="px-6 pb-6">
        <div className="grid grid-cols-3 gap-3 mt-4">
          <div className="bg-bg-secondary rounded-lg p-3 border border-bg-border text-center">
            <div className="text-gray-500 text-xs mb-1">Verktyg</div>
            <div className="text-white text-xs font-medium">{item.tool}</div>
          </div>
          <div className="bg-bg-secondary rounded-lg p-3 border border-bg-border text-center">
            <div className="text-gray-500 text-xs mb-1">Stil</div>
            <div className="text-white text-xs font-medium truncate">{item.style.split(',')[0]}</div>
          </div>
          <div className="bg-bg-secondary rounded-lg p-3 border border-bg-border text-center">
            <div className="text-gray-500 text-xs mb-1">Användning</div>
            <div className="text-white text-xs font-medium truncate">{item.usage.split(',')[0]}</div>
          </div>
        </div>

        <div className="mt-4 bg-bg-secondary rounded-lg p-4 border border-bg-border">
          <div className="text-gray-500 text-xs mb-2 font-medium">Text / beskrivning</div>
          <p className="text-gray-300 text-sm italic">{item.lyrics}</p>
        </div>
      </div>
    </div>
  )
}

export default function AudioSection() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-bg-secondary" />
      <div className="orb w-[500px] h-[500px] bg-accent-cyan bottom-[0%] left-[-150px]" style={{ opacity: 0.05 }} />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4 block">Ljud & röst</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
            Ljud som bygger
            <br />
            <span className="gradient-text">varumärket</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Från reklamjingle till professionell voiceover — allt skapas med AI
            och anpassas för att passa Bergström Byggsatt ton och målgrupp.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {audioItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <AudioPlayer item={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
