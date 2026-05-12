import { motion } from 'framer-motion'
import { Search, Wrench, Rocket, TrendingUp } from 'lucide-react'

const steps = [
  {
    num: '01',
    icon: Search,
    title: 'Behovsanalys',
    desc: 'Vi lär oss om ditt företag, dina kunder och var du tappar tid. Tillsammans identifierar vi de processer som ger störst effekt att automatisera.',
    detail: 'Gratis strategisamtal • 45 minuter • Inga dolda agendor',
  },
  {
    num: '02',
    icon: Wrench,
    title: 'Skräddarsydd setup',
    desc: 'Vi konfigurerar AI-systemet exakt efter din verksamhet — din prisstrategi, ditt varumärke, dina kunder. Inget generiskt, allt anpassat.',
    detail: 'Setup: 5–10 arbetsdagar • Du äger allt',
  },
  {
    num: '03',
    icon: Rocket,
    title: 'Lansering & integration',
    desc: 'AI-systemet aktiveras och kopplas till de verktyg du redan använder. Vi testar allt, säkerställer kvaliteten och ser till att allt fungerar felfritt från dag ett.',
    detail: 'Live på 2–3 veckor • Full onboarding',
  },
  {
    num: '04',
    icon: TrendingUp,
    title: 'Optimering & tillväxt',
    desc: 'Vi följer prestandan löpande, förbättrar systemet baserat på resultat och skalar upp det som fungerar. Ju längre det kör, desto smartare blir det.',
    detail: 'Månatliga genomgångar • Kontinuerlig förbättring',
  },
]

export default function HowItWorks() {
  return (
    <section id="hur-det-fungerar" className="py-24 relative overflow-hidden">
      <div className="orb w-[600px] h-[600px] bg-accent-blue bottom-[-100px] left-[-200px]" style={{ opacity: 0.07 }} />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="section-label mb-4 block">Processen</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
            Från idé till fler kunder
            <br />
            <span className="gradient-text">på under tre veckor</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Fyra tydliga steg. Inga överraskningar. Inga tekniska krav från din sida.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical connector line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-blue via-accent-purple to-transparent opacity-20" />

          <div className="flex flex-col gap-12">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`flex gap-8 items-start ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                {/* Content */}
                <div className="flex-1 lg:max-w-[calc(50%-48px)]">
                  <div className="bg-bg-card border border-bg-border rounded-2xl p-8 hover:border-accent-blue/30 transition-colors">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center">
                        <s.icon size={22} className="text-accent-blueLight" />
                      </div>
                      <span className="text-6xl font-black text-bg-border select-none">{s.num}</span>
                    </div>
                    <h3 className="text-white font-bold text-2xl mb-3">{s.title}</h3>
                    <p className="text-gray-400 leading-relaxed mb-4">{s.desc}</p>
                    <p className="text-accent-blueLight text-sm font-medium">{s.detail}</p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden lg:flex flex-shrink-0 w-24 items-center justify-center">
                  <motion.div
                    whileInView={{ scale: [0.5, 1.2, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
                    className="w-4 h-4 rounded-full bg-accent-blue glow-blue"
                  />
                </div>

                {/* Spacer */}
                <div className="flex-1 lg:max-w-[calc(50%-48px)] hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="#kontakt"
            className="bg-accent-blue hover:bg-accent-blueLight text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 glow-blue text-lg inline-flex items-center gap-2 group"
          >
            Starta med ett kostnadsfritt samtal
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
