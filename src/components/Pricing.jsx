import { motion } from 'framer-motion'
import { Check, Zap } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: '4 990',
    period: '/mån',
    desc: 'Perfekt för enpersonsföretag och mindre byggfirmor som vill testa AI.',
    features: [
      'AI-offertskrivning (upp till 20 offerter/mån)',
      'Automatiska uppföljningsmejl',
      'Online-bokningskalender',
      'Enkel e-post-integration',
      'Onboarding & setup',
      'E-postsupport',
    ],
    cta: 'Kom igång',
    highlight: false,
  },
  {
    name: 'Tillväxt',
    price: '9 490',
    period: '/mån',
    desc: 'För etablerade byggföretag som vill ha ett komplett AI-drivet säljsystem.',
    features: [
      'Allt i Starter, plus:',
      'Obegränsade offerter',
      'AI-kunduppföljning (SMS + e-post)',
      'AI-marknadsföring (sociala medier)',
      'CRM-integration',
      'Månatliga strategisamtal',
      'Prioriterat stöd',
    ],
    cta: 'Mest valt — starta nu',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    desc: 'För större byggkoncerner med flera kontor och specifika integrationsbehov.',
    features: [
      'Allt i Tillväxt, plus:',
      'Flerkontors-setup',
      'Skräddarsydda AI-modeller',
      'ERP/affärssystem-integration',
      'Dedikerad kundansvarig',
      'SLA med garanterad drifttid',
    ],
    cta: 'Kontakta oss',
    highlight: false,
  },
]

export default function Pricing() {
  return (
    <section id="priser" className="py-24 relative overflow-hidden">
      <div className="orb w-[500px] h-[500px] bg-accent-blue top-[-50px] right-[-100px]" style={{ opacity: 0.07 }} />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4 block">Priser</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
            Investering som lönar sig
            <br />
            <span className="gradient-text">från dag ett</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Inga långa bindningstider. Inga dolda kostnader. Avbryt när du vill —
            men de flesta stannar kvar för att det funkar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl p-8 flex flex-col ${
                p.highlight
                  ? 'bg-gradient-to-b from-accent-blue/20 to-bg-card border border-accent-blue/40 glow-blue'
                  : 'bg-bg-card border border-bg-border'
              }`}
            >
              {p.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-accent-blue text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1.5">
                    <Zap size={11} fill="white" /> MEST POPULÄR
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-white font-bold text-xl mb-2">{p.name}</h3>
                <p className="text-gray-400 text-sm">{p.desc}</p>
              </div>

              <div className="mb-8">
                <span className="text-5xl font-black text-white">{p.price}</span>
                <span className="text-gray-400 text-lg ml-1">{p.period}</span>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check size={16} className={`mt-0.5 flex-shrink-0 ${p.highlight ? 'text-accent-blueLight' : 'text-green-400'}`} />
                    <span className={f.startsWith('Allt') ? 'text-gray-500 italic' : 'text-gray-300'}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#kontakt"
                className={`py-3.5 px-6 rounded-xl font-semibold text-center transition-all duration-200 ${
                  p.highlight
                    ? 'bg-accent-blue hover:bg-accent-blueLight text-white'
                    : 'border border-bg-border hover:border-accent-blue/50 text-gray-300 hover:text-white'
                }`}
              >
                {p.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 text-sm mt-8"
        >
          Alla priser exkl. moms · Setup-kostnad tillkommer (engångsavgift 4 990 kr) · Månadsvis betalning
        </motion.p>
      </div>
    </section>
  )
}
