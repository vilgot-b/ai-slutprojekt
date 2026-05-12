import { motion } from 'framer-motion'
import { Quote, TrendingUp, Clock, Users, CheckCircle, ArrowRight, Star } from 'lucide-react'

const results = [
  { value: '+340%', label: 'Fler skickade offerter', icon: TrendingUp },
  { value: '18h', label: 'Sparad admin-tid per vecka', icon: Clock },
  { value: '+2.1M', label: 'Mer omsättning efter 6 mån', icon: Users },
  { value: '92%', label: 'Offertacceptansgrad', icon: CheckCircle },
]

export default function CustomerCase() {
  return (
    <section id="kundcase" className="py-24 relative">
      <div className="absolute inset-0 bg-bg-secondary" />
      <div className="orb w-[500px] h-[500px] bg-accent-blue top-[20%] right-[-100px]" style={{ opacity: 0.08 }} />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4 block">Kundcase</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
            Bergström Bygg AB
            <br />
            <span className="text-gray-400 font-light text-3xl">Göteborg · Villarenoveringar & tillbyggnader</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Så hjälpte Konstrukt ett mellansort byggföretag gå från manuellt kaos
            till en maskin som fyller kalendern automatiskt.
          </p>
        </motion.div>

        {/* Case layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Problem */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-bg-card border border-bg-border rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                <span className="text-red-400 text-lg">⚠</span>
              </div>
              <h3 className="text-white font-bold text-xl">Problemet</h3>
            </div>

            {/* Company intro */}
            <div className="bg-bg-secondary rounded-xl p-5 mb-6 border border-bg-border">
              <div className="flex items-center gap-4 mb-4">
                {/* Logo placeholder */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500/20 to-amber-500/20 border border-orange-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🏗</span>
                </div>
                <div>
                  <div className="text-white font-bold">Bergström Bygg AB</div>
                  <div className="text-gray-500 text-sm">8 anställda · Grundat 2011</div>
                </div>
              </div>
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                ))}
                <span className="text-gray-500 text-xs ml-1">4.9 på Google</span>
              </div>
            </div>

            <ul className="space-y-4">
              {[
                'Offertskrivning tog 2–4 timmar per förfrågan. Karl (ägaren) jobbade ofta till midnatt.',
                'Av 30 inkommande förfrågningar per månad hann de bara besvara 12.',
                'Uppföljning skedde slumpmässigt — ingen struktur, inga system.',
                'Kunder bokade in sig via telefon, vilket ledde till missförstånd och dubbelbokningar.',
                'Omsättningen låg fast trots ökad efterfrågan. Problemet var inte brist på kunder.',
              ].map((t) => (
                <li key={t} className="flex gap-3 text-gray-400">
                  <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-bg-card border border-bg-border rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                <span className="text-green-400 text-lg">✓</span>
              </div>
              <h3 className="text-white font-bold text-xl">Konstrukts lösning</h3>
            </div>

            <ul className="space-y-5">
              {[
                {
                  title: 'AI-offertgenerator',
                  desc: 'Kunden fyller i ett formulär. AI genererar en komplett, professionell offert på under 5 minuter — med Bergströms logotyp, prissättning och villkor.',
                },
                {
                  title: 'Automatisk uppföljning',
                  desc: 'Systemet skickar automatiska påminnelser efter 3 och 7 dagar om kunden inte svarat. Personliga, välformulerade meddelanden — inte spam.',
                },
                {
                  title: 'Online-bokning',
                  desc: 'En kalenderintegration på hemsidan låter kunder boka besiktning direkt. AI matchar bokningstider med befintliga jobb och reseväg.',
                },
                {
                  title: 'Leadgenerering via socials',
                  desc: 'AI-skapad annons för Facebook och Instagram riktad mot husägare i Göteborg-regionen. A/B-testad och löpande optimerad.',
                },
              ].map((s) => (
                <li key={s.title} className="flex gap-3">
                  <CheckCircle size={18} className="text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-white font-semibold">{s.title}</span>
                    <p className="text-gray-400 text-sm mt-1">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Results */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {results.map((r, i) => (
            <motion.div
              key={r.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="gradient-border p-6 text-center"
            >
              <r.icon size={20} className="text-accent-blueLight mx-auto mb-2" />
              <div className="text-3xl font-black gradient-text mb-1">{r.value}</div>
              <div className="text-gray-500 text-sm">{r.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-accent-blue/10 to-accent-purple/10 border border-accent-blue/20 rounded-2xl p-8 md:p-12"
        >
          <Quote size={32} className="text-accent-blue mb-6" />
          <blockquote className="text-2xl md:text-3xl text-white font-light leading-relaxed mb-8">
            "Jag jobbade mig ihjäl med offerter och ändå tappade vi kunder. Nu sköter
            systemet det mesta själv och vi har faktiskt tid att prata med kunderna — istället för
            att sitta och skriva om natten."
          </blockquote>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center text-white font-bold text-xl">
              K
            </div>
            <div>
              <div className="text-white font-bold text-lg">Karl Bergström</div>
              <div className="text-gray-400">VD & grundare, Bergström Bygg AB</div>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-bg-card border border-bg-border rounded-2xl p-8"
        >
          <h3 className="text-white font-bold text-xl mb-8 text-center">Tidslinje: Bergström Bygg AB</h3>
          <div className="flex flex-col md:flex-row gap-0 md:gap-0 relative">
            <div className="hidden md:block absolute top-5 left-[10%] right-[10%] h-px bg-gradient-to-r from-accent-blue/50 via-accent-purple/50 to-accent-cyan/50" />
            {[
              { week: 'Vecka 1', event: 'Behovsanalys & strategisamtal' },
              { week: 'Vecka 2–3', event: 'AI-setup & konfiguration' },
              { week: 'Vecka 4', event: 'Lansering & onboarding' },
              { week: 'Månad 2', event: 'Första automatiska offerterna' },
              { week: 'Månad 3–6', event: 'Optimering & skalning' },
            ].map((t, i) => (
              <div key={t.week} className="flex-1 flex flex-col items-center text-center px-2 relative">
                <motion.div
                  whileInView={{ scale: [0, 1.3, 1] }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="w-10 h-10 rounded-full bg-accent-blue border-2 border-bg-primary z-10 flex items-center justify-center text-white font-bold text-sm mb-3"
                >
                  {i + 1}
                </motion.div>
                <div className="text-accent-blueLight text-xs font-bold mb-1">{t.week}</div>
                <div className="text-gray-400 text-sm">{t.event}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
