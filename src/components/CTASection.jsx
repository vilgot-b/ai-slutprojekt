import { motion } from 'framer-motion'
import { ArrowRight, Phone, Calendar, MessageSquare } from 'lucide-react'

export default function CTASection() {
  return (
    <section id="kontakt" className="py-24 relative overflow-hidden">
      {/* Dramatic background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 via-bg-primary to-accent-purple/10" />
        <div className="orb w-[700px] h-[700px] bg-accent-blue top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ opacity: 0.08 }} />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label mb-6 block">Redo att börja?</span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-tight">
            Fyll din kalender
            <br />
            <span className="gradient-text">med rätt kunder.</span>
          </h2>
          <p className="text-gray-400 text-2xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Boka ett kostnadsfritt 45-minuterssamtal. Vi analyserar din situation
            och berättar exakt hur Konstrukt kan hjälpa ditt företag.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <a
            href="mailto:hej@konstrukt.ai"
            className="bg-accent-blue hover:bg-accent-blueLight text-white font-bold px-10 py-5 rounded-xl transition-all duration-200 glow-blue-strong text-xl flex items-center gap-3 justify-center group"
          >
            <Calendar size={22} />
            Boka kostnadsfritt samtal
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="tel:+46700000000"
            className="border border-bg-border hover:border-accent-blue/50 text-gray-300 hover:text-white font-bold px-10 py-5 rounded-xl transition-all duration-200 text-xl flex items-center gap-3 justify-center"
          >
            <Phone size={22} />
            Ring oss direkt
          </a>
        </motion.div>

        {/* Trust signals */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-8 text-gray-500 text-sm"
        >
          {[
            '✓ Inga bindningstider',
            '✓ Setup på 2–3 veckor',
            '✓ Avbryt när du vill',
            '✓ Dedikerad kontaktperson',
          ].map((t) => (
            <span key={t} className="text-gray-400">{t}</span>
          ))}
        </motion.div>

        {/* Contact options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {[
            {
              icon: Calendar,
              title: 'Boka online',
              value: 'konstrukt.ai/boka',
              desc: 'Välj tid i kalendern',
            },
            {
              icon: Phone,
              title: 'Ring oss',
              value: '070-XXX XX XX',
              desc: 'Mån–Fre 8–17',
            },
            {
              icon: MessageSquare,
              title: 'Skicka e-post',
              value: 'hej@konstrukt.ai',
              desc: 'Svar inom 24h',
            },
          ].map(({ icon: Icon, title, value, desc }) => (
            <div
              key={title}
              className="bg-bg-card border border-bg-border rounded-xl p-5 text-center hover:border-accent-blue/30 transition-colors"
            >
              <Icon size={20} className="text-accent-blueLight mx-auto mb-2" />
              <div className="text-gray-500 text-xs mb-1">{title}</div>
              <div className="text-white font-semibold text-sm">{value}</div>
              <div className="text-gray-600 text-xs mt-1">{desc}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
