import { motion } from 'framer-motion'
import { Sparkles, Lightbulb, Code, Cloud, Video, Image as ImageIcon, MessageSquare, Wrench, ThumbsUp, AlertTriangle, Brain } from 'lucide-react'

const tools = [
  {
    name: 'ChatGPT',
    use: 'Idégenerering',
    desc: 'Brainstorming kring företagsnamn, tjänsteupplägg, kundcase och hur sidan skulle struktureras.',
    icon: MessageSquare,
    color: '#10a37f',
  },
  {
    name: 'Claude Design',
    use: 'Design för företaget',
    desc: 'Visuell riktning, färgpalett (varm orange + blå), typografi och layoutprinciper för hela sidan.',
    icon: Sparkles,
    color: '#c2410c',
  },
  {
    name: 'Claude Code',
    use: 'Bygga hemsidan',
    desc: 'All kod på sidan: React-komponenter, Tailwind-styling, Framer Motion-animationer och router-setup.',
    icon: Code,
    color: '#7c3aed',
  },
  {
    name: 'GitHub + Pages',
    use: 'Hosta hemsidan',
    desc: 'Versionshantering av koden och gratis hosting via GitHub Pages med automatisk deploy vid varje push.',
    icon: Cloud,
    color: '#1f2937',
  },
  {
    name: 'Steve.AI',
    use: 'Video och röst',
    desc: 'Reklamfilmen och AI-genererad voiceover på svenska. Animation, manus och röst i ett verktyg.',
    icon: Video,
    color: '#ea580c',
  },
  {
    name: 'Midjourney + Gemini',
    use: 'Bilder',
    desc: 'AI-genererade bilder till kundcaset: byggplatser, annonser, banners och varumärkesmaterial.',
    icon: ImageIcon,
    color: '#1d4ed8',
  },
]

const reflections = [
  {
    icon: Brain,
    color: 'orange',
    label: 'Vad använde du AI till?',
    text: 'AI användes till i princip allt: idégenerering, kopia, design-riktlinjer, kod, illustrationer, video och voiceover. Jag använde AI som ett team av specialister där jag var redaktör och projektledare. ChatGPT för brainstorming, Claude Design för visuell riktning, Claude Code för att skriva all React-kod, Midjourney och Gemini för bilder, Steve.AI för video och voiceover, och GitHub Pages för att hosta resultatet.',
  },
  {
    icon: ThumbsUp,
    color: 'green',
    label: 'Vilken del blev mest lyckad?',
    text: 'Hemsidans struktur och kod blev otroligt bra med Claude Code. Det som hade tagit mig en vecka att bygga manuellt tog några timmar, och resultatet ser mer professionellt ut än vad jag hade kunnat göra själv. Animationerna och övergångarna mellan sektionerna känns polerade. Kundcasets storytelling, där text och bilder växlar, blev också riktigt bra.',
  },
  {
    icon: Wrench,
    color: 'blue',
    label: 'Vad behövde du förbättra själv?',
    text: 'Texterna. AI skrev för formellt och generiskt från början, med fraser som "Vi är glada att kunna presentera" och "Vi hoppas på ett givande samarbete". Jag fick gå igenom varje rubrik och stycke och korta ned, ta bort klichéer och göra tonen mer direkt. Också färgvalen, där AI ville köra på säkra blå-grå nyanser. Jag pushade för en varmare orange palett som passar byggbranschen bättre.',
  },
  {
    icon: Lightbulb,
    color: 'amber',
    label: 'Vilken del krävde mest eget tänkande?',
    text: 'Att hitta vinkeln. Vad ska företaget heta, vem är målgruppen, vilket konkret problem löser vi och hur formulerar vi det så att en byggare i Göteborg faktiskt känner igen sig? AI kan generera tio förslag på en sekund, men jag behövde avgöra vilket som var trovärdigt och vilket som lät som marknadsföringssvammel. Också fiktionen kring Bergström Bygg, deras siffror måste vara realistiska och deras berättelse måste hänga ihop.',
  },
  {
    icon: AlertTriangle,
    color: 'red',
    label: 'Vad blev dåligt först, och hur förbättrade du det?',
    text: 'Bilderna. Första iterationen från Midjourney var generiska "construction stock photos" utan karaktär eller plats. Lösningen var mycket mer specifika prompts: tid på dygnet, väderlek, kameravinkel, platsspecifika detaljer som svenska skyltar och Göteborgsväder. Logotypen krävde fem omgångar innan den slutade se ut som clip-art. Reklamfilmen från Steve.AI fick också göras om en gång eftersom första versionen kändes som en bankreklam istället för byggreklam.',
  },
]

const colorMap = {
  orange: { bg: 'bg-orange-50', border: 'border-orange-100', icon: 'text-accent-orange', badge: 'bg-orange-50 text-accent-orange border-orange-100' },
  green:  { bg: 'bg-green-50',  border: 'border-green-100',  icon: 'text-green-600',     badge: 'bg-green-50 text-green-700 border-green-100' },
  blue:   { bg: 'bg-blue-50',   border: 'border-blue-100',   icon: 'text-accent-blue',   badge: 'bg-blue-50 text-accent-blue border-blue-100' },
  amber:  { bg: 'bg-amber-50',  border: 'border-amber-100',  icon: 'text-amber-600',     badge: 'bg-amber-50 text-amber-700 border-amber-100' },
  red:    { bg: 'bg-red-50',    border: 'border-red-100',    icon: 'text-red-500',       badge: 'bg-red-50 text-red-600 border-red-100' },
}

export default function AIDeclaration() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="section-label mb-3 block">Verktyg</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-5 text-stone-900">
            Det här byggdes med
          </h2>
          <p className="text-stone-500 text-xl max-w-2xl mx-auto">
            Sex AI-verktyg och en utvecklare. Allt från idégenerering till hosting
            sköttes med hjälp av AI, men varje val granskades och justerades manuellt.
          </p>
        </motion.div>

        {/* Tools grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {tools.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bg-white border border-border rounded-2xl p-6 shadow-card hover:shadow-card-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: t.color + '15', border: `1px solid ${t.color}30` }}
                >
                  <t.icon size={20} style={{ color: t.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1 flex-wrap">
                    <h3 className="text-stone-900 font-bold">{t.name}</h3>
                    <span className="text-stone-400 text-xs font-medium">({t.use})</span>
                  </div>
                  <p className="text-stone-500 text-sm leading-relaxed">{t.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Reflections ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="section-label mb-3 block">Transparens</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-5 text-stone-900">
            En ärlig genomgång
          </h2>
          <p className="text-stone-500 text-xl max-w-2xl mx-auto">
            Vad som fungerade, vad jag behövde göra om och vad som krävde mest eget tänkande.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {reflections.map((r, i) => {
            const c = colorMap[r.color]
            return (
              <motion.div
                key={r.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className={`bg-white border border-border rounded-2xl p-7 shadow-card ${i === 0 ? 'md:col-span-2' : ''}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center`}>
                    <r.icon size={18} className={c.icon} />
                  </div>
                  <h3 className={`text-base font-bold ${c.icon}`}>{r.label}</h3>
                </div>
                <p className="text-stone-700 leading-relaxed">{r.text}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 bg-stone-900 rounded-2xl p-8 text-center"
        >
          <p className="text-stone-300 text-lg leading-relaxed max-w-3xl mx-auto">
            AI genererade <span className="text-white font-semibold">råmaterialet</span> men varje text,
            bild och designval på den här sidan har{' '}
            <span className="text-white font-semibold">granskats, redigerats och godkänts av mig.</span>{' '}
            AI är ett verktyg. Kvaliteten beror på den som håller i verktyget.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
