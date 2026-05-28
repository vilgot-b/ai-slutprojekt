import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CalendarX } from 'lucide-react'

export default function BookingModal() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setOpen(true)
    window.addEventListener('open-booking', handler)
    return () => window.removeEventListener('open-booking', handler)
  }, [])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <motion.div
            className="relative bg-white rounded-2xl shadow-card-lg max-w-sm w-full p-8 text-center"
            initial={{ scale: 0.92, opacity: 0, y: 16 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 16 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-stone-400 hover:text-stone-700 transition-colors"
            >
              <X size={18} />
            </button>
            <div className="w-14 h-14 bg-accent-orangePale rounded-2xl flex items-center justify-center mx-auto mb-5">
              <CalendarX size={26} className="text-accent-orange" />
            </div>
            <h3 className="text-xl font-black text-stone-900 mb-3">Inga lediga tider</h3>
            <p className="text-stone-500 text-sm leading-relaxed mb-6">
              Det finns inga lediga tider under kommande veckor.
              Hör av dig via e-post eller telefon så återkommer vi.
            </p>
            <button
              onClick={() => setOpen(false)}
              className="w-full bg-accent-orange hover:bg-accent-orangeLight text-white font-semibold py-3 rounded-xl transition-colors"
            >
              Stäng
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
