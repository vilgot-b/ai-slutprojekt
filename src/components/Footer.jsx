import { Link } from 'react-router-dom'
import { HardHat, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-accent-orange rounded-lg flex items-center justify-center">
                <HardHat size={18} className="text-white" />
              </div>
              <span className="font-black text-xl text-stone-900">Konstrukt<span className="text-accent-orange">.</span></span>
            </div>
            <p className="text-stone-500 leading-relaxed mb-5 max-w-sm text-sm">
              AI-byrå specialiserad på svenska byggföretag. Vi hjälper dig vinna fler jobb
              genom automatisering av offertskrivning, kunduppföljning och bokning.
            </p>
            <div className="flex gap-3">
              {[Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-stone-400 hover:text-accent-orange hover:border-accent-orange transition-colors">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-stone-900 font-semibold mb-4 text-sm">Tjänster</h4>
            <ul className="space-y-2.5">
              {['AI-offertskrivning', 'Kunduppföljning', 'Smart bokning', 'AI-marknadsföring', 'Rapportering'].map((l) => (
                <li key={l}>
                  <Link to="/tjanster" className="text-stone-500 hover:text-accent-orange text-sm transition-colors">{l}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-stone-900 font-semibold mb-4 text-sm">Webbplats</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Kundcase', to: '/kundcase' },
                { label: 'AI-material', to: '/material' },
                { label: 'Om AI', to: '/om-ai' },
                { label: 'Boka samtal', to: '/kundcase' },
              ].map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className="text-stone-500 hover:text-accent-orange text-sm transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-stone-400 text-sm">2024 Konstrukt AB · Göteborg, Sverige</p>
          <div className="flex gap-5">
            {['Integritetspolicy', 'Villkor'].map((l) => (
              <a key={l} href="#" className="text-stone-400 hover:text-stone-600 text-sm transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
