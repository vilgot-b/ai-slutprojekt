import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FileText, Calendar, Users, BarChart3, MessageSquare, Megaphone, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: FileText,
    color: 'orange',
    title: 'AI-offertskrivning',
    tagline: 'Professionella offerter på 5 minuter',
    desc: 'Vår AI analyserar kundens förfrågan och genererar skräddarsydda offerter med rätt ton, prissättning och detaljer. Aldrig mer ett tomt dokument.',
    features: ['Automatisk prisskattning', 'Anpassad ton', 'PDF-export'],
    badge: 'Mest populär',
  },
  {
    icon: Users,
    color: 'blue',
    title: 'Automatisk kunduppföljning',
    tagline: 'Inga leads faller bort igen',
    desc: 'AI-driven uppföljning som kontaktar leads vid rätt tillfälle med rätt budskap. Automatiska påminnelser och relationsbyggande på autopilot.',
    features: ['SMS och e-post', 'Smart timing', 'Personliga meddelanden'],
    badge: null,
  },
  {
    icon: Calendar,
    color: 'green',
    title: 'Smart bokning',
    tagline: 'Full kalender utan samtal',
    desc: 'Låt kunder boka besiktning och möten direkt via din hemsida. AI optimerar schemat baserat på plats och tillgänglighet.',
    features: ['Online-bokning', 'Reseoptimering', 'Auto-bekräftelser'],
    badge: null,
  },
  {
    icon: Megaphone,
    color: 'amber',
    title: 'AI-marknadsföring',
    tagline: 'Innehåll som attraherar kunder',
    desc: 'Från Instagram-inlägg till Google-annonser. AI skapar marknadsföringsmaterial anpassat för byggbranschen i ditt område.',
    features: ['Sociala medier', 'Google-annonser', 'Lokalt innehåll'],
    badge: null,
  },
  {
    icon: MessageSquare,
    color: 'sky',
    title: 'AI-chatt och kundtjänst',
    tagline: '24/7 kundservice utan extra personal',
    desc: 'En intelligent chatt på din hemsida som svarar på frågor, samlar kontaktuppgifter och kopplar leads till dig runt klockan.',
    features: ['Dygnet runt', 'Lead-kvalificering', 'CRM-integration'],
    badge: null,
  },
  {
    icon: BarChart3,
    color: 'violet',
    title: 'Rapportering',
    tagline: 'Vet alltid var jobbet kommer ifrån',
    desc: 'Realtids-dashboard som visar vilka kanaler som genererar jobb, hur lång säljcykeln är och var kunder försvinner.',
    features: ['Live-dashboard', 'Konverteringsanalys', 'Prognosverktyg'],
    badge: null,
  },
]

const colorMap = {
  orange: { bg: 'bg-orange-50', border: 'border-orange-100', icon: 'text-accent-orange', tag: 'bg-orange-50 text-accent-orange border-orange-100', hover: 'hover:border-orange-200' },
  blue:   { bg: 'bg-blue-50',   border: 'border-blue-100',   icon: 'text-accent-blue',   tag: 'bg-blue-50 text-accent-blue border-blue-100',   hover: 'hover:border-blue-200' },
  green:  { bg: 'bg-green-50',  border: 'border-green-100',  icon: 'text-green-600',     tag: 'bg-green-50 text-green-600 border-green-100',  hover: 'hover:border-green-200' },
  amber:  { bg: 'bg-amber-50',  border: 'border-amber-100',  icon: 'text-amber-600',     tag: 'bg-amber-50 text-amber-600 border-amber-100',  hover: 'hover:border-amber-200' },
  sky:    { bg: 'bg-sky-50',    border: 'border-sky-100',    icon: 'text-sky-600',       tag: 'bg-sky-50 text-sky-600 border-sky-100',       hover: 'hover:border-sky-200' },
  violet: { bg: 'bg-violet-50', border: 'border-violet-100', icon: 'text-violet-600',    tag: 'bg-violet-50 text-violet-600 border-violet-100', hover: 'hover:border-violet-200' },
}

export default function ServicesSection({ preview = false }) {
  const displayed = preview ? services.slice(0, 3) : services

  return (
    <section id="tjanster" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="section-label mb-3 block">Våra tjänster</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-5 text-stone-900">
            Allt du behöver för att vinna fler jobb
          </h2>
          <p className="text-stone-500 text-xl max-w-2xl mx-auto">
            {preview
              ? 'Sex kraftfulla AI-verktyg byggda specifikt för byggföretag.'
              : 'Sex kraftfulla AI-verktyg byggda specifikt för byggföretag. Välj ett eller kör alla.'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayed.map((s, i) => {
            const c = colorMap[s.color]
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className={`relative bg-white border border-border rounded-2xl p-7 flex flex-col gap-4 shadow-card ${c.hover} transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-md group`}
              >
                {s.badge && (
                  <span className="absolute top-4 right-4 text-xs font-bold text-accent-orange bg-accent-orangePale border border-orange-200 rounded-full px-3 py-1">
                    {s.badge}
                  </span>
                )}

                <div className={`w-11 h-11 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center`}>
                  <s.icon size={20} className={c.icon} />
                </div>

                <div>
                  <p className="text-stone-400 text-xs font-semibold mb-1">{s.tagline}</p>
                  <h3 className="text-stone-900 font-bold text-lg">{s.title}</h3>
                </div>

                <p className="text-stone-500 leading-relaxed text-sm flex-1">{s.desc}</p>

                <div className="flex flex-wrap gap-1.5">
                  {s.features.map((f) => (
                    <span key={f} className={`text-xs font-medium px-2.5 py-1 rounded-full border ${c.tag}`}>
                      {f}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {preview && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link
              to="/tjanster"
              className="inline-flex items-center gap-2 bg-white border border-border hover:border-accent-orange text-stone-700 hover:text-accent-orange font-semibold px-6 py-3 rounded-xl transition-colors shadow-card group"
            >
              Se alla 6 tjänster
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  )
}
