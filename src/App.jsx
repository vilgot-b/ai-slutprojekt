import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProblemSection from './components/ProblemSection'
import ServicesSection from './components/ServicesSection'
import HowItWorks from './components/HowItWorks'
import CustomerCase from './components/CustomerCase'
import AIGeneratedContent from './components/AIGeneratedContent'
import AIImages from './components/AIImages'
import VideoSection from './components/VideoSection'
import AudioSection from './components/AudioSection'
import Pricing from './components/Pricing'
import AIDeclaration from './components/AIDeclaration'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-bg-primary text-white">
      <Navbar />
      <Hero />
      <ProblemSection />
      <ServicesSection />
      <HowItWorks />
      <CustomerCase />
      <AIGeneratedContent />
      <AIImages />
      <VideoSection />
      <AudioSection />
      <Pricing />
      <AIDeclaration />
      <CTASection />
      <Footer />
    </div>
  )
}
