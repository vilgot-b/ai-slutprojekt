import { motion } from 'framer-motion'
import { FileText, Calendar, Users, BarChart3, MessageSquare, Megaphone, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: FileText,
    color: 'blue',
    title: 'AI-offertskrivning',
    tagline: 'Professionella offerter på 5 minuter',
    desc: 'Vår AI analyserar kundens förfrågan och genererar skräddarsydda, professionella offerter — med rätt ton, rätt prissättning och rätt detaljer. Aldrig mer ett tomt dokument.',
    features: ['Automatisk prisskattning', 'Anpassad till din profil', 'PDF-export direkt'],
    badge: 'Mest populär',
  },
  {
    icon: Users,
    color: 'purple',
    title: 'Automatisk kunduppföljning',
    tagline: 'Inga leads faller bort igen',
    desc: 'AI-driven uppföljning som kontaktar potentiella kunder vid rätt tillfälle, med rätt budskap. Automatiska påminnelser, statusuppdateringar och relationsbyggande på autopilot.',
    features: ['SMS & e-post', 'Smart timing', 'Personliga meddelanden'],
    badge: null,
  },
  {
    icon: Calendar,
    color: 'cyan',
    title: 'Smart bokning & schema',
    tagline: 'Full kalender utan ett enda samtal',
    desc: 'Låt kunderna boka besiktning och möten direkt via din hemsida. AI optimerar schemat baserat på plats, tillgänglighet och prioritet — utan att du lyfter ett finger.',
    features: ['Online-bokning', 'Reseoptimering', 'Automatiska bekräftelser'],
    badge: null,
  },
  {
    icon: Megaphone,
    color: 'orange',
    title: 'AI-marknadsföring',
    tagline: 'Innehåll som attraherar nya kunder',
    desc: 'Från Instagram-inlägg till Google-annonser — AI skapar marknadsföringsmaterial anpassat för byggbranschen. Nå rätt kunder i ditt område med rätt budskap.',
    features: ['Sociala medier', 'Google-annonser', 'Lokalt innehåll'],
    badge: null,
  },
  {
    icon: MessageSquare,
    color: 'green',
    title: 'AI-chatt & kundtjänst',
    tagline: '24/7 kundservice utan extra personal',
    desc: 'En intelligent chatt på din hemsida som svarar på vanliga frågor, samlar in kontaktuppgifter och kopplar vidare de rätta leads till dig — dygnet runt.',
    features: ['Dygnet runt', 'Lead-kvalificering', 'Integrerat med CRM'],
    badge: null,
  },
  {
    icon: BarChart3,
    color: 'pink',
    title: 'Rapportering & insikter',
    tagline: 'Vet alltid var ditt nästa jobb kommer ifrån',
    desc: 'Realtids-dashboard som visar vilka kanaler som genererar jobb, hur lång säljcykeln är och var du tappar kunder. Fatta beslut baserade på data, inte magkänsla.',
    features: ['Live-dashboard', 'Konverteringsanalys', 'Prognosverktyg'],
    badge: null,
  },
]

const colorMap = {
  blue: { bg: 'bg-accent-blue/10', border: 'border-accent-blue/20', icon: 'text-accent-blueLight', hover: 'hover:border-accent-blue/40' },
  purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/20', icon: 'text-purple-400', hover: 'hover:border-purple-500/40' },
  cyan: { bg: 'bg-cyan-500/10', border: 'border-cyan-500/20', icon: 'text-cyan-400', hover: 'hover:border-cyan-500/40' },
  orange: { bg: 'bg-orange-500/10', border: 'border-orange-500/20', icon: 'text-orange-400', hover: 'hover:border-orange-500/40' },
  green: { bg: 'bg-green-500/10', border: 'border-green-500/20', icon: 'text-green-400', hover: 'hover:border-green-500/40' },
  pink: { bg: 'bg-pink-500/10', border: 'border-pink-500/20', icon: 'text-pink-400', hover: 'hover:border-pink-500/40' },
}

export default function ServicesSection() {
  return (
    <section id="tjanster" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-bg-secondary" />
      <div className="orb w-[500px] h-[500px] bg-accent-purple top-[10%] right-[-100px]" style={{ opacity: 0.08 }} />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4 block">Våra tjänster</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
            Allt du behöver för att
            <br />
            <span className="gradient-text">vinna fler jobb</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Sex kraftfulla AI-verktyg byggda specifikt för byggföretag.
            Välj ett eller kör alla — vi anpassar efter ditt företag.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const c = colorMap[s.color]
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`relative bg-bg-card border border-bg-border rounded-2xl p-7 flex flex-col gap-4 ${c.hover} transition-all duration-300 group hover:-translate-y-1`}
              >
                {s.badge && (
                  <span className="absolute top-4 right-4 text-xs font-bold text-accent-blue bg-accent-blue/10 border border-accent-blue/30 rounded-full px-3 py-1">
                    {s.badge}
                  </span>
                )}

                <div className={`w-12 h-12 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center`}>
                  <s.icon size={22} className={c.icon} />
                </div>

                <div>
                  <p className="text-gray-500 text-sm font-medium mb-1">{s.tagline}</p>
                  <h3 className="text-white font-bold text-xl">{s.title}</h3>
                </div>

                <p className="text-gray-400 leading-relaxed flex-1">{s.desc}</p>

                <ul className="flex flex-wrap gap-2">
                  {s.features.map((f) => (
                    <li
                      key={f}
                      className={`text-xs font-medium px-3 py-1 rounded-full ${c.bg} ${c.icon} border ${c.border}`}
                    >
                      {f}
                    </li>
                  ))}
                </ul>

                <button className={`mt-2 flex items-center gap-1 text-sm font-medium ${c.icon} opacity-0 group-hover:opacity-100 transition-opacity`}>
                  Läs mer <ArrowRight size={14} />
                </button>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
