import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Play, Pause, Volume2, Music, Mic, Waves } from 'lucide-react'

function Waveform({ playing, color }) {
  const bars = 40
  return (
    <div className="flex items-center gap-[3px] h-10 px-3">
      {Array.from({ length: bars }, (_, i) => (
        <motion.div
          key={i}
          className="rounded-full flex-shrink-0"
          style={{ width: 3, backgroundColor: color, opacity: 0.6 + (i % 3) * 0.15 }}
          animate={playing ? { height: [3, 6 + Math.sin(i * 0.5) * 16 + 8, 3] } : { height: 3 + Math.abs(Math.sin(i * 0.4)) * 8 }}
          transition={playing ? { duration: 0.7 + (i % 4) * 0.1, repeat: Infinity, ease: 'easeInOut', delay: i * 0.025 } : {}}
        />
      ))}
    </div>
  )
}

const items = [
  {
    id: 'jingle',
    icon: Music,
    title: 'Reklamjingle',
    sub: 'Bergström Bygg · 15 sek',
    desc: 'En 15-sekunders jingle för TV och radiospot. Glad, professionell och minnesvärd ton med akustisk gitarr.',
    tool: 'Suno AI',
    color: '#c2410c',
    style: 'Akustisk pop, ljus känsla, dur-tonart',
    lyrics: '"Bergström Bygg — vi bygger ditt drömhem / Med hjärta och händer i Göteborg."',
  },
  {
    id: 'vo',
    icon: Mic,
    title: 'AI Voiceover',
    sub: 'Reklamfilm · 52 sek',
    desc: 'AI-genererad svensk röstöver för reklamfilmen. Neutral rikssvenska, klar och trovärdig ton.',
    tool: 'ElevenLabs',
    color: '#1d4ed8',
    style: 'Manlig röst, lugn takt, professionell',
    lyrics: '"Varje vecka skriver Karl Bergström offerter i timmar..."',
  },
  {
    id: 'ambient',
    icon: Waves,
    title: 'Bakgrundsmusik',
    sub: 'Hemsida ambient · 2:30',
    desc: 'Subtil ambient musik för hemsidans demo-sektion. Inte påträngande men skapar rätt känsla.',
    tool: 'Udio AI',
    color: '#0891b2',
    style: 'Elektronisk ambient, 90 BPM',
    lyrics: 'Instrumentalt',
  },
]

function Player({ item }) {
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const ref = useRef(null)

  const toggle = () => {
    if (playing) {
      clearInterval(ref.current)
      setPlaying(false)
    } else {
      setPlaying(true)
      ref.current = setInterval(() => {
        setProgress((p) => {
          if (p >= 100) { clearInterval(ref.current); setPlaying(false); return 0 }
          return p + 0.4
        })
      }, 50)
    }
  }
  useEffect(() => () => clearInterval(ref.current), [])

  return (
    <div className="bg-white border border-border rounded-2xl overflow-hidden shadow-card hover:shadow-card-md transition-shadow">
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: item.color + '18', border: `1px solid ${item.color}28` }}>
            <item.icon size={20} style={{ color: item.color }} />
          </div>
          <div>
            <h3 className="text-stone-900 font-bold">{item.title}</h3>
            <p className="text-stone-400 text-xs mb-1">{item.sub}</p>
            <p className="text-stone-500 text-sm">{item.desc}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-border bg-bg-primary/60 px-4 py-3">
        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 hover:opacity-90 active:scale-95 transition-all"
            style={{ backgroundColor: item.color }}
          >
            {playing
              ? <Pause size={14} className="text-white" fill="white" />
              : <Play size={14} className="text-white ml-0.5" fill="white" />}
          </button>
          <div className="flex-1 overflow-hidden">
            <Waveform playing={playing} color={item.color} />
          </div>
          <Volume2 size={14} className="text-stone-400 flex-shrink-0" />
        </div>
        <div className="mx-1 mt-2 mb-1 h-1 bg-border rounded-full overflow-hidden">
          <div className="h-full rounded-full transition-all duration-100" style={{ width: `${progress}%`, backgroundColor: item.color }} />
        </div>
        <p className="text-center text-stone-400 text-xs pt-1">Simulerat · {item.tool} i produktion</p>
      </div>

      <div className="px-6 pb-6 pt-4">
        <div className="grid grid-cols-2 gap-2 mb-3">
          <div className="bg-bg-primary rounded-lg p-3 border border-border">
            <div className="text-stone-400 text-xs mb-1">Verktyg</div>
            <div className="text-stone-800 text-xs font-semibold">{item.tool}</div>
          </div>
          <div className="bg-bg-primary rounded-lg p-3 border border-border">
            <div className="text-stone-400 text-xs mb-1">Stil</div>
            <div className="text-stone-800 text-xs font-semibold truncate">{item.style.split(',')[0]}</div>
          </div>
        </div>
        <div className="bg-bg-primary rounded-lg p-3 border border-border">
          <div className="text-stone-400 text-xs mb-1">Text</div>
          <p className="text-stone-600 text-xs italic">{item.lyrics}</p>
        </div>
      </div>
    </div>
  )
}

export default function AudioSection() {
  return (
    <section className="py-20 bg-white border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="section-label mb-3 block">Ljud och röst</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-5 text-stone-900">
            Ljud som bygger varumärket
          </h2>
          <p className="text-stone-500 text-xl max-w-2xl mx-auto">
            Från reklamjingle till professionell voiceover. Allt skapat med AI och
            anpassat för Bergström Byggsatt ton och målgrupp.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
            >
              <Player item={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
