import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Volume2, VolumeX } from 'lucide-react'

export default function PromoVideo() {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(true)
  const [hasStarted, setHasStarted] = useState(false)

  const togglePlay = () => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) {
      v.play()
      setPlaying(true)
      setHasStarted(true)
    } else {
      v.pause()
      setPlaying(false)
    }
  }

  const toggleMute = (e) => {
    e.stopPropagation()
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    setMuted(v.muted)
  }

  return (
    <section className="py-20 bg-stone-900 relative overflow-hidden">
      <div className="absolute inset-0 stripe-pattern opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-accent-orange" />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-block text-accent-orange text-xs font-bold tracking-widest uppercase mb-3">Reklamfilm</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-white">
            Se Konstrukt på 60 sekunder
          </h2>
          <p className="text-stone-400 text-xl max-w-xl mx-auto">
            En kort introduktion till vad vi gör och varför svenska byggföretag väljer oss.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="relative rounded-2xl overflow-hidden shadow-card-lg bg-black ring-1 ring-stone-800"
          style={{ aspectRatio: '16/9' }}
        >
          <video
            ref={videoRef}
            src={`${import.meta.env.BASE_URL}videos/konstrukt-promo.mp4`}
            poster={`${import.meta.env.BASE_URL}videos/poster.svg`}
            className="w-full h-full object-cover cursor-pointer"
            playsInline
            muted={muted}
            onClick={togglePlay}
            onEnded={() => setPlaying(false)}
          />

          {/* Play overlay */}
          {!hasStarted && (
            <button
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors group"
              aria-label="Spela video"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-accent-orange flex items-center justify-center shadow-card-lg group-hover:scale-110 transition-transform">
                <Play size={36} className="text-white ml-1.5" fill="white" />
              </div>
            </button>
          )}

          {/* Mute toggle */}
          {hasStarted && (
            <button
              onClick={toggleMute}
              className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur flex items-center justify-center text-white transition-colors"
              aria-label={muted ? 'Slå på ljud' : 'Stäng av ljud'}
            >
              {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
          )}

          {/* Small overlay caption when paused after start */}
          {hasStarted && !playing && (
            <button
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors"
              aria-label="Spela"
            >
              <div className="w-16 h-16 rounded-full bg-accent-orange flex items-center justify-center shadow-card">
                <Play size={28} className="text-white ml-1" fill="white" />
              </div>
            </button>
          )}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-stone-500 text-xs mt-4"
        >
          Producerad med Steve.AI · Voiceover och musik AI-genererad
        </motion.p>
      </div>
    </section>
  )
}
