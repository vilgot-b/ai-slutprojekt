import { motion } from 'framer-motion'
import { TrendingUp, Clock, Users, CheckCircle, Star } from 'lucide-react'

const results = [
  { value: '+340%', label: 'Fler skickade offerter', icon: TrendingUp },
  { value: '18h', label: 'Sparad tid per vecka', icon: Clock },
  { value: '+2.1M', label: 'Mer omsättning efter 6 mån', icon: Users },
  { value: '92%', label: 'Offertacceptansgrad', icon: CheckCircle },
]

export default function CustomerCase() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="section-label mb-3 block">Kundcase</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-stone-900">
            Bergström Bygg AB
          </h2>
          <p className="text-stone-400 text-xl">Göteborg · Villarenoveringar och tillbyggnader</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 mb-10">
          {/* Problem */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white border border-border rounded-2xl p-8 shadow-card"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center">
                <span className="text-red-500 font-bold">!</span>
              </div>
              <h3 className="text-stone-900 font-bold text-xl">Problemet</h3>
            </div>

            <div className="bg-bg-primary rounded-xl p-5 mb-6 border border-border">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-13 h-13 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center flex-shrink-0 w-12 h-12">
                  <span className="text-2xl">🏗</span>
                </div>
                <div>
                  <div className="text-stone-900 font-bold">Bergström Bygg AB</div>
                  <div className="text-stone-400 text-sm">8 anställda · Grundat 2011</div>
                </div>
              </div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} className="text-amber-400 fill-amber-400" />
                ))}
                <span className="text-stone-400 text-xs ml-1.5">4.9 på Google</span>
              </div>
            </div>

            <ul className="space-y-3">
              {[
                'Offertskrivning tog 2-4 timmar per förfrågan. Karl jobbade ofta till midnatt.',
                'Av 30 inkommande förfrågningar per månad hann de bara besvara 12.',
                'Uppföljning skedde slumpmässigt utan struktur eller system.',
                'Kunder bokade via telefon vilket ledde till dubbelbokningar och missförstånd.',
              ].map((t) => (
                <li key={t} className="flex gap-3 text-stone-500 text-sm">
                  <span className="text-red-400 mt-0.5 flex-shrink-0 font-bold">✗</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white border border-border rounded-2xl p-8 shadow-card"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center">
                <CheckCircle size={18} className="text-green-500" />
              </div>
              <h3 className="text-stone-900 font-bold text-xl">Konstrukts lösning</h3>
            </div>

            <ul className="space-y-5">
              {[
                {
                  title: 'AI-offertgenerator',
                  desc: 'Kunden fyller i ett formulär. AI genererar en komplett, professionell offert på under 5 minuter med Bergströms logotyp, prissättning och villkor.',
                },
                {
                  title: 'Automatisk uppföljning',
                  desc: 'Systemet skickar automatiska påminnelser efter 3 och 7 dagar om kunden inte svarat. Personliga, välformulerade meddelanden.',
                },
                {
                  title: 'Online-bokning',
                  desc: 'En kalenderintegration på hemsidan låter kunder boka besiktning direkt. AI matchar bokningstider med befintliga jobb och reseväg.',
                },
                {
                  title: 'Leadgenerering via sociala medier',
                  desc: 'AI-skapad annons för Facebook och Instagram riktad mot husägare i Göteborgsregionen. A/B-testad och löpande optimerad.',
                },
              ].map((s) => (
                <li key={s.title} className="flex gap-3">
                  <CheckCircle size={17} className="text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-stone-900 font-semibold text-sm">{s.title}</span>
                    <p className="text-stone-500 text-sm mt-0.5">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {results.map((r, i) => (
            <motion.div
              key={r.label}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white border border-border rounded-2xl p-6 text-center shadow-card hover:shadow-card-md transition-shadow"
            >
              <r.icon size={18} className="text-accent-orange mx-auto mb-2" />
              <div className="text-3xl font-black gradient-text mb-1">{r.value}</div>
              <div className="text-stone-400 text-xs">{r.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-stone-900 rounded-2xl p-8 md:p-12"
        >
          <div className="text-accent-orange text-4xl mb-5 font-serif">"</div>
          <blockquote className="text-xl md:text-2xl text-stone-100 font-light leading-relaxed mb-8 max-w-3xl">
            Jag jobbade mig ihjäl med offerter och ändå tappade vi kunder. Nu sköter
            systemet det mesta själv och vi har faktiskt tid att prata med kunderna
            istället för att sitta och skriva om natten.
          </blockquote>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-accent-orange flex items-center justify-center text-white font-bold text-lg">
              K
            </div>
            <div>
              <div className="text-white font-bold">Karl Bergström</div>
              <div className="text-stone-400 text-sm">VD och grundare, Bergström Bygg AB</div>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 bg-white border border-border rounded-2xl p-8 shadow-card"
        >
          <h3 className="text-stone-900 font-bold text-lg mb-8 text-center">Tidslinje: Bergström Bygg AB</h3>
          <div className="relative">
            <div className="hidden md:block absolute top-5 left-[10%] right-[10%] h-px bg-border" />
            <div className="flex flex-col md:flex-row gap-6 md:gap-0">
              {[
                { week: 'Vecka 1', event: 'Behovsanalys och samtal' },
                { week: 'Vecka 2-3', event: 'AI-setup och konfiguration' },
                { week: 'Vecka 4', event: 'Lansering och onboarding' },
                { week: 'Månad 2', event: 'Första automatiska offerterna' },
                { week: 'Månad 3-6', event: 'Optimering och skalning' },
              ].map((t, i) => (
                <div key={t.week} className="flex-1 flex flex-col items-center text-center px-2 relative">
                  <motion.div
                    whileInView={{ scale: [0, 1.2, 1] }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="w-10 h-10 rounded-full bg-accent-orange border-4 border-white shadow-card z-10 flex items-center justify-center text-white font-bold text-sm mb-3"
                  >
                    {i + 1}
                  </motion.div>
                  <div className="text-accent-orange text-xs font-bold mb-1">{t.week}</div>
                  <div className="text-stone-500 text-xs">{t.event}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
