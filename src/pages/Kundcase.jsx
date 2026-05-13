import CustomerCase from '../components/CustomerCase'
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
          <span className="section-label mb-3 block">Kundcase</span>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-5 text-stone-900">
            Från manuellt kaos
            <br />
            <span className="gradient-text">till en maskin som fyller kalendern</span>
          </h1>
          <p className="text-stone-500 text-xl max-w-2xl mx-auto">
            Bergström Bygg AB i Göteborg. 8 anställda, mer efterfrågan än de hann
            med och en ägare som jobbade till midnatt. Så förändrades allt på sex månader.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default function Kundcase() {
  return (
    <>
      <PageHero />
      <CustomerCase />
      <CTASection />
    </>
  )
}
