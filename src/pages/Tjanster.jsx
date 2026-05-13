import ServicesSection from '../components/ServicesSection'
import HowItWorks from '../components/HowItWorks'
import CTASection from '../components/CTASection'
import { motion } from 'framer-motion'

function PageHero() {
  return (
    <div className="bg-white border-b border-border py-16 blueprint-grid">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label mb-3 block">Vad vi erbjuder</span>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-5 text-stone-900">
            Sex AI-tjänster för
            <br />
            <span className="gradient-text">svenska byggföretag</span>
          </h1>
          <p className="text-stone-500 text-xl max-w-2xl mx-auto">
            Välj de tjänster som passar ditt företag bäst, eller kör hela paketet.
            Allt konfigureras specifikt för din verksamhet.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default function Tjanster() {
  return (
    <>
      <PageHero />
      <ServicesSection />
      <HowItWorks />
      <CTASection />
    </>
  )
}
