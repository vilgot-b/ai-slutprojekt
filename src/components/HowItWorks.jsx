import { motion } from 'framer-motion'
import { Search, Wrench, Rocket, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'

const steps = [
  {
    num: '01',
    icon: Search,
    title: 'Behovsanalys',
    desc: 'Vi lär oss om ditt företag, dina kunder och var du tappar tid. Tillsammans identifierar vi de processer som ger störst effekt att automatisera.',
    detail: 'Gratis strategisamtal · 45 minuter',
    color: 'orange',
  },
  {
    num: '02',
    icon: Wrench,
    title: 'Skräddarsydd setup',
    desc: 'Vi konfigurerar AI-systemet exakt efter din verksamhet med din prisstrategi, ditt varumärke och dina kunder. Inget generiskt, allt anpassat.',
    detail: 'Setup: 5-10 arbetsdagar · Du äger allt',
    color: 'blue',
  },
  {
    num: '03',
    icon: Rocket,
    title: 'Lansering',
    desc: 'AI-systemet aktiveras och kopplas till de verktyg du redan använder. Vi testar allt och ser till att det fungerar felfritt från dag ett.',
    detail: 'Live på 2-3 veckor · Full onboarding',
    color: 'green',
  },
  {
    num: '04',
    icon: TrendingUp,
    title: 'Optimering och tillväxt',
    desc: 'Vi följer prestandan löpande, förbättrar systemet baserat på resultat och skalar upp det som fungerar. Ju längre det kör, desto smartare blir det.',
    detail: 'Månatliga genomgångar · Kontinuerlig förbättring',
    color: 'amber',
  },
]

const iconColors = {
  orange: 'bg-orange-50 border-orange-100 text-accent-orange',
  blue:   'bg-blue-50 border-blue-100 text-accent-blue',
  green:  'bg-green-50 border-green-100 text-green-600',
  amber:  'bg-amber-50 border-amber-100 text-amber-600',
}

export default function HowItWorks() {
  return (
    <section id="hur-det-fungerar" className="py-20 bg-white border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-label mb-3 block">Processen</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-5 text-stone-900">
            Från idé till fler kunder
            <br />
            <span className="gradient-text">på under tre veckor</span>
          </h2>
          <p className="text-stone-500 text-xl max-w-xl mx-auto">
            Fyra tydliga steg. Inga överraskningar. Inga tekniska krav från din sida.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="relative bg-bg-primary border border-border rounded-2xl p-7 hover:shadow-card-md transition-shadow"
            >
              {/* Connector line between cards */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-5 h-px bg-border z-10" />
              )}

              <div className="flex items-center gap-3 mb-5">
                <div className={`w-11 h-11 rounded-xl border flex items-center justify-center ${iconColors[s.color]}`}>
                  <s.icon size={20} />
                </div>
                <span className="text-4xl font-black text-border select-none">{s.num}</span>
              </div>

              <h3 className="text-stone-900 font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed mb-4">{s.desc}</p>
              <p className="text-accent-orange text-xs font-semibold">{s.detail}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/kundcase"
            className="inline-flex items-center gap-2 bg-accent-orange hover:bg-accent-orangeLight text-white font-semibold px-8 py-4 rounded-xl transition-colors shadow-card-md"
          >
            Starta med ett kostnadsfritt samtal
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
