import AIGeneratedContent from '../components/AIGeneratedContent'
import VideoSection from '../components/VideoSection'
import AudioSection from '../components/AudioSection'
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
          <span className="section-label mb-3 block">AI-material</span>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-5 text-stone-900">
            Allt vi skapade
            <br />
            <span className="gradient-text">åt Bergström Bygg</span>
          </h1>
          <p className="text-stone-500 text-xl max-w-2xl mx-auto">
            Texter, bilder, video och ljud. Allt AI-genererat, allt granskat
            och redigerat av oss för att matcha kundens varumärke och målgrupp.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default function Material() {
  return (
    <>
      <PageHero />
      <AIGeneratedContent />
      <VideoSection />
      <AudioSection />
      <CTASection />
    </>
  )
}
