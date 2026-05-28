import { motion } from 'framer-motion'
import { ArrowRight, Phone, Mail, Calendar } from 'lucide-react'

export default function CTASection() {
  return (
    <section id="kontakt" className="py-20 bg-stone-900 relative overflow-hidden">
      {/* Subtle stripe accent */}
      <div className="absolute inset-0 stripe-pattern opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-accent-orange" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-accent-orange text-xs font-bold tracking-widest uppercase mb-6">Redo att börja?</span>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-7 leading-tight text-white">
            Fyll din kalender
            <br />
            <span className="gradient-text">med rätt kunder.</span>
          </h2>
          <p className="text-stone-400 text-xl mb-12 max-w-xl mx-auto leading-relaxed">
            Boka ett kostnadsfritt 45-minuterssamtal. Vi analyserar din situation
            och berättar exakt hur Konstrukt kan hjälpa ditt företag.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <button
            type="button"
            onClick={() => window.dispatchEvent(new CustomEvent('open-booking'))}
            className="bg-accent-orange hover:bg-accent-orangeLight text-white font-bold px-9 py-4 rounded-xl transition-colors shadow-card-md text-lg flex items-center gap-2 justify-center group"
          >
            <Calendar size={20} />
            Boka kostnadsfritt samtal
            <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
          <a
            href="tel:+46700000000"
            className="border border-stone-700 hover:border-stone-500 text-stone-300 hover:text-white font-bold px-9 py-4 rounded-xl transition-colors text-lg flex items-center gap-2 justify-center"
          >
            <Phone size={20} />
            Ring oss direkt
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          className="flex flex-wrap justify-center gap-6 text-stone-500 text-sm mb-14"
        >
          {['Inga bindningstider', 'Setup på 2-3 veckor', 'Avbryt när du vill', 'Dedikerad kontaktperson'].map((t) => (
            <span key={t} className="flex items-center gap-1.5">
              <span className="text-accent-orange font-bold">✓</span> {t}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-sm mx-auto sm:max-w-none"
        >
          {[
            { icon: Phone, title: 'Ring oss',  value: '070-XXX XX XX',   desc: 'Mån-Fre 8-17' },
            { icon: Mail,  title: 'E-post',    value: 'hej@konstrukt.ai', desc: 'Svar inom 24h' },
          ].map(({ icon: Icon, title, value, desc }) => (
            <div key={title} className="bg-stone-800 border border-stone-700 rounded-xl p-5 text-center hover:border-stone-600 transition-colors">
              <Icon size={18} className="text-accent-orange mx-auto mb-2" />
              <div className="text-stone-500 text-xs mb-1">{title}</div>
              <div className="text-white font-semibold text-sm">{value}</div>
              <div className="text-stone-600 text-xs mt-1">{desc}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
