import { motion } from 'framer-motion'
import { Zap, Linkedin, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-bg-border bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent-blue rounded-lg flex items-center justify-center">
                <Zap size={16} className="text-white" fill="white" />
              </div>
              <span className="text-white font-bold text-xl">Konstrukt<span className="text-accent-blue">.</span></span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-sm">
              AI-byrå specialiserad på svenska byggföretag. Vi hjälper dig vinna fler jobb
              genom automatisering av offertskrivning, kunduppföljning och bokning.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Linkedin, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Twitter, href: '#' },
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  className="w-9 h-9 rounded-lg bg-bg-card border border-bg-border flex items-center justify-center text-gray-500 hover:text-white hover:border-accent-blue/40 transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Tjänster</h4>
            <ul className="space-y-3">
              {['AI-offertskrivning', 'Kunduppföljning', 'Smart bokning', 'AI-marknadsföring', 'Rapportering'].map((l) => (
                <li key={l}>
                  <a href="#tjanster" className="text-gray-400 hover:text-white text-sm transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Företaget</h4>
            <ul className="space-y-3">
              {[
                { label: 'Kundcase', href: '#kundcase' },
                { label: 'Priser', href: '#priser' },
                { label: 'Så funkar det', href: '#hur-det-fungerar' },
                { label: 'AI-deklaration', href: '#ai-deklaration' },
                { label: 'Boka samtal', href: '#kontakt' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-gray-400 hover:text-white text-sm transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-bg-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © 2024 Konstrukt AB · Göteborg, Sverige
          </p>
          <div className="flex gap-6">
            {['Integritetspolicy', 'Cookiepolicy', 'Villkor'].map((l) => (
              <a key={l} href="#" className="text-gray-600 hover:text-gray-400 text-sm transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
