import AIDeclaration from '../components/AIDeclaration'
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
          <span className="section-label mb-3 block">Transparens</span>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-5 text-stone-900">
            Så använde vi AI
            <br />
            <span className="gradient-text">för att bygga det här</span>
          </h1>
          <p className="text-stone-500 text-xl max-w-2xl mx-auto">
            Vilka verktyg, vad som fungerade och vad som behövde göras om.
            Inga hemligheter om hur AI-materialet faktiskt skapades.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default function OmAI() {
  return (
    <>
      <PageHero />
      <AIDeclaration />
      <CTASection />
    </>
  )
}
