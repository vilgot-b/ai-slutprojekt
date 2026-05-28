import { motion } from 'framer-motion'
import { Sparkles, Lightbulb, Code, Cloud, Video, Volume2, Image as ImageIcon, MessageSquare, Wrench, ThumbsUp, AlertTriangle, Brain } from 'lucide-react'

const tools = [
  {
    name: 'ChatGPT',
    use: 'Idéer',
    desc: 'Jag använde det för att hitta på företagsnamn, vilka tjänster jag skulle ha med och hur sidan skulle se ut.',
    icon: MessageSquare,
    color: '#10a37f',
  },
  {
    name: 'Claude Design',
    use: 'Hur sidan ser ut',
    desc: 'Jag fick hjälp att välja färger (varm orange och blå), text-stil och hur sidan skulle vara uppbyggd.',
    icon: Sparkles,
    color: '#c2410c',
  },
  {
    name: 'Claude Code',
    use: 'Bygga sidan',
    desc: 'All kod på sidan skrevs här: knappar, sektioner, rörelser och länkar mellan sidorna.',
    icon: Code,
    color: '#7c3aed',
  },
  {
    name: 'GitHub + Pages',
    use: 'Lägga ut sidan på nätet',
    desc: 'Jag sparar koden på GitHub. Pages gör att sidan finns gratis på nätet och uppdateras varje gång jag ändrar något.',
    icon: Cloud,
    color: '#1f2937',
  },
  {
    name: 'Steve.AI',
    use: 'Film',
    desc: 'Här gjorde jag reklamfilmen med animationer och manus. Grundverkyget för att sätta ihop videon.',
    icon: Video,
    color: '#ea580c',
  },
  {
    name: 'ElevenLabs',
    use: 'Röst i videon',
    desc: 'AI-genererad röst på svenska till reklamfilmen. Mycket bättre ljud än Steves inbyggda röst.',
    icon: Volume2,
    color: '#8b5cf6',
  },
  {
    name: 'Suno.ai',
    use: 'Bakgrundsmusik',
    desc: 'Jag genererade bakgrundsmusiken till reklamfilmen här. Man beskriver vilken känsla man vill ha och får musik direkt.',
    icon: Sparkles,
    color: '#0891b2',
  },
  {
    name: 'Gemini',
    use: 'Bilder',
    desc: 'Jag gjorde alla bilder till kundcaset här: byggen, annonser och banners för Bergström Bygg.',
    icon: ImageIcon,
    color: '#1d4ed8',
  },
]

const reflections = [
  {
    icon: Brain,
    color: 'orange',
    label: 'Vad använde jag AI till?',
    text: 'Nästan allt. Jag använde AI för att hitta på idéer, skriva texterna, välja färger, skriva all kod, göra bilder, och göra reklamfilmen med röst. Jag tänkte på AI som ett team av experter där jag var chefen. Jag bestämde vad som skulle göras och kollade allt som kom tillbaka. ChatGPT hjälpte mig hitta på idéer, Claude Design valde färger och stil, Claude Code skrev koden, Gemini gjorde bilderna, Steve.AI gjorde filmen, och GitHub Pages lägger ut sidan på nätet.',
  },
  {
    icon: ThumbsUp,
    color: 'green',
    label: 'Vad blev bäst?',
    text: 'Koden till hemsidan blev riktigt bra med Claude Code. Det som hade tagit mig en vecka att skriva själv tog några timmar, och sidan ser bättre ut än vad jag hade fixat på egen hand. Rörelserna när man scrollar känns fina. Kundcaset, där text och bilder byter av varandra, blev också snyggt.',
  },
  {
    icon: Wrench,
    color: 'blue',
    label: 'Vad var jag tvungen att fixa själv?',
    text: 'Texterna. AI skrev för fint och tråkigt i början, med saker som "Vi är glada att kunna presentera" och "Vi hoppas på ett givande samarbete". Jag fick gå igenom varje rubrik och stycke, korta ner och göra språket mer rakt på sak. Jag fick också ändra färgerna. AI ville köra säkra blå och gråa toner, men jag tyckte varm orange passade byggbranschen bättre.',
  },
  {
    icon: Lightbulb,
    color: 'amber',
    label: 'Vad fick jag tänka mest på själv?',
    text: 'Att hitta vinkeln. Vad ska företaget heta? Vem är det till för? Vilket problem löser jag? Hur säger jag det så att en byggare i Göteborg känner igen sig? AI kan ge mig tio förslag på en sekund, men jag fick välja vilka som lät trovärdiga och vilka som bara lät som reklam. Jag fick också hitta på Bergström Bygg själv så att siffrorna och berättelsen hängde ihop.',
  },
  {
    icon: AlertTriangle,
    color: 'red',
    label: 'Vad blev dåligt först, och hur fixade jag det?',
    text: 'Bilderna. Första gången jag gjorde bilder med Gemini blev de bara vanliga "stockfoton" utan något speciellt. Jag fick skriva mycket mer detaljerade beskrivningar: tid på dagen, väder, vinkel, svenska skyltar och göteborgsväder. Logotypen fick jag göra om fem gånger innan den slutade se ut som en clip-art. Reklamfilmen fick jag också göra om en gång, för första versionen kändes som en bankreklam istället för en byggreklam. Det värsta var ljudet. Steve.AI:s inbyggda röst lät robotig och konstig på svenska, så jag lade in en röst från ElevenLabs istället. Det lät mycket bättre. Bakgrundsmusiken gjorde jag i Suno.ai.',
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
            Det här byggde jag med
          </h2>
          <p className="text-stone-500 text-xl max-w-2xl mx-auto">
            Sex AI-verktyg och jag. AI gjorde det mesta, från idéer till bilder och kod,
            men jag kollade och ändrade allt själv innan det fick stå kvar.
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
          <span className="section-label mb-3 block">Ärligt</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-5 text-stone-900">
            Hur det faktiskt gick
          </h2>
          <p className="text-stone-500 text-xl max-w-2xl mx-auto">
            Vad som blev bra, vad jag fick göra om och vad jag fick tänka mest på själv.
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
            AI gjorde <span className="text-white font-semibold">grovjobbet</span>, men varje text,
            bild och färg på sidan har{' '}
            <span className="text-white font-semibold">jag läst igenom, ändrat och godkänt själv.</span>{' '}
            AI är bara ett verktyg. Hur bra det blir beror på den som håller i det.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
