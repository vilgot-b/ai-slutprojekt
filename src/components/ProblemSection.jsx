import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Clock, TrendingDown, PhoneOff, FileX } from 'lucide-react'

const problems = [
  {
    icon: Clock,
    title: 'Offertskrivning tar timmar',
    desc: 'Du sitter sent på kvällen och skriver offerter manuellt. Tid som borde läggas på faktiskt bygge.',
  },
  {
    icon: PhoneOff,
    title: 'Leads faller mellan stolarna',
    desc: 'Potentiella kunder hör av sig men du hinner inte följa upp. De väljer en konkurrent istället.',
  },
  {
    icon: TrendingDown,
    title: 'Kalender halvtom trots efterfrågan',
    desc: 'Det finns jobb där ute, men ingen systematisk process för att boka in dem.',
  },
  {
    icon: FileX,
    title: 'Administrationen äter upp dagen',
    desc: 'Påminnelser, uppföljningar, bekräftelser. Allt manuellt, allt tar tid från det du är bäst på.',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
}

export default function ProblemSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-20 bg-white border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="section-label mb-3 block">Känner du igen dig?</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-5 text-stone-900">
            Du tappar kunder utan att vilja det
          </h2>
          <p className="text-stone-500 text-xl max-w-2xl mx-auto">
            Inte för att du är dålig på ditt jobb. Utan för att administrationen
            stjäl all din tid. Det här hör vi från nästan varje byggföretag vi pratar med.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {problems.map((p) => (
            <motion.div
              key={p.title}
              variants={item}
              className="flex gap-5 bg-bg-primary border border-border rounded-2xl p-7 hover:border-red-200 hover:bg-red-50/30 transition-colors group"
            >
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center group-hover:bg-red-100 transition-colors">
                <p.icon size={20} className="text-red-500" />
              </div>
              <div>
                <h3 className="text-stone-900 font-bold text-lg mb-1.5">{p.title}</h3>
                <p className="text-stone-500 leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-accent-orangePale border border-orange-200 rounded-2xl px-8 py-4">
            <span className="text-xl">💡</span>
            <p className="text-stone-700">
              <span className="font-bold text-stone-900">Konstrukt</span> automatiserar allt det här{' '}
              <span className="text-accent-orange font-semibold">så att du kan fokusera på bygget.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
