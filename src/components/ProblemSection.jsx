import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Clock, TrendingDown, PhoneOff, FileX } from 'lucide-react'

const problems = [
  {
    icon: Clock,
    title: 'Offertskrivning tar timmar',
    desc: 'Du sitter sent på kvällen och skriver offerter manuellt — tid som borde läggas på faktiskt bygge.',
  },
  {
    icon: PhoneOff,
    title: 'Leads faller mellan stolarna',
    desc: 'Potentiella kunder kontaktar dig men du har inte tid att följa upp. De väljer en konkurrent istället.',
  },
  {
    icon: TrendingDown,
    title: 'Kalender halvtom trots efterfrågan',
    desc: 'Det finns jobb där ute, men ingen systematisk process för att boka in dem. Omsättningen sviktar.',
  },
  {
    icon: FileX,
    title: 'Administrationen äter upp dagen',
    desc: 'Påminnelser, uppföljningar, bekräftelser — allt är manuellt och tar tid från det du är bäst på.',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function ProblemSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4 block">Känner du igen dig?</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
            Du tappar kunder —
            <br />
            <span className="text-gray-500">inte för att du är dålig på ditt jobb</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Utan för att administrationen stjäl all din tid. Det här är problem vi hör från
            nästan varje byggföretag vi pratar med.
          </p>
        </motion.div>

        {/* Problem cards */}
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {problems.map((p) => (
            <motion.div
              key={p.title}
              variants={item}
              className="bg-bg-card border border-bg-border rounded-2xl p-7 flex gap-5 hover:border-red-500/30 transition-colors group"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                <p.icon size={22} className="text-red-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-2">{p.title}</h3>
                <p className="text-gray-400 leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Transition bridge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-accent-blue/10 border border-accent-blue/30 rounded-2xl px-8 py-5">
            <span className="text-2xl">💡</span>
            <p className="text-gray-300 text-lg">
              <span className="text-white font-semibold">Konstrukt</span> automatiserar allt det här —{' '}
              <span className="text-accent-blueLight">så att du kan fokusera på bygget.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
