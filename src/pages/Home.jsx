import Hero from '../components/Hero'
import ProblemSection from '../components/ProblemSection'
import ServicesSection from '../components/ServicesSection'
import HowItWorks from '../components/HowItWorks'
import CTASection from '../components/CTASection'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Star } from 'lucide-react'

function CaseTeaser() {
  return (
    <section className="py-20 bg-white border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-label mb-3 block">Kundcase</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-5 text-stone-900">
              Bergström Bygg gick från 12 till 40 offerter i månaden
            </h2>
            <p className="text-stone-500 text-lg leading-relaxed mb-7">
              Ett Göteborgsbaserat byggföretag med 8 anställda tappade jobb varje vecka
              på grund av långsam offerthantering. Sex månader med Konstrukt förändrade allt.
            </p>
            <div className="flex gap-3 mb-8">
              {['+340%', '18h', '+2.1M'].map((v, i) => (
                <div key={i} className="bg-bg-primary border border-border rounded-xl px-4 py-3 text-center">
                  <div className="text-xl font-black gradient-text">{v}</div>
                  <div className="text-stone-400 text-xs mt-0.5">{['Fler offerter','Sparad/vecka','Mer omsättning'][i]}</div>
                </div>
              ))}
            </div>
            <Link
              to="/kundcase"
              className="inline-flex items-center gap-2 bg-accent-orange hover:bg-accent-orangeLight text-white font-semibold px-6 py-3.5 rounded-xl transition-colors shadow-card-md group"
            >
              Läs hela caset
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-stone-900 rounded-2xl p-8"
          >
            <div className="text-accent-orange text-3xl mb-4 font-serif">"</div>
            <p className="text-stone-200 text-lg leading-relaxed mb-6">
              Jag jobbade mig ihjäl med offerter och ändå tappade vi kunder.
              Nu sköter systemet det mesta själv och vi har faktiskt tid att
              prata med kunderna.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-accent-orange flex items-center justify-center text-white font-bold">K</div>
              <div>
                <div className="text-white font-bold text-sm">Karl Bergström</div>
                <div className="text-stone-400 text-xs">VD, Bergström Bygg AB</div>
              </div>
              <div className="ml-auto flex gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} size={13} className="text-amber-400 fill-amber-400" />)}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <ServicesSection preview />
      <CaseTeaser />
      <HowItWorks />
      <CTASection />
    </>
  )
}
