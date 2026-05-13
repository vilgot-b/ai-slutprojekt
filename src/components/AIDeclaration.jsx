import { motion } from 'framer-motion'
import { Sparkles, ThumbsUp, AlertTriangle, Lightbulb, Wrench } from 'lucide-react'

const tools = [
  { name: 'Claude (Anthropic)', use: 'Texter, manus, e-post, analyser, strukturering av kundcase' },
  { name: 'ChatGPT / GPT-4o', use: 'Brainstorming av tjänster, FAQ, sociala medier-texter' },
  { name: 'Midjourney v6', use: 'Hero-bilder, konstruktionsvisualer, atmosfärsfotografier' },
  { name: 'DALL-E 3', use: 'Reklambilder, illustrationer för annonser' },
  { name: 'Adobe Firefly', use: 'Logotypkoncept, varumärkesgrafik' },
  { name: 'Suno AI', use: 'Reklamjingle, bakgrundsmusik' },
  { name: 'ElevenLabs', use: 'AI-genererad voiceover (svenska)' },
  { name: 'Canva AI', use: 'Layout för sociala medier-mallar' },
]

const reflections = [
  {
    icon: ThumbsUp,
    color: 'green',
    label: 'Mest lyckat',
    text: 'De AI-genererade marknadsföringstexterna, särskilt uppföljnings-e-posten och Instagram-inlägget. AI producerade ett bra första utkast men det var min redigering (kortare meningar, mer direkt ton, borttagning av klichéer) som fick texterna att kännas äkta.',
  },
  {
    icon: Wrench,
    color: 'blue',
    label: 'Behövde förbättras',
    text: 'AI tenderade att skriva för formella och generiska offerttexter. Fraser som "Vi är glada att kunna presentera" och "Vi hoppas på ett givande samarbete" togs bort. Allt behövde redigeras mot en mer personlig ton som passar ett litet byggföretag i Göteborg.',
  },
  {
    icon: Lightbulb,
    color: 'amber',
    label: 'Krävde mest eget tänkande',
    text: 'Strukturen på kundcaset och vilka resultat som är trovärdiga. AI kan generera siffror men kan inte bedöma vad som är realistiskt för ett byggföretag. Jag behövde tänka igenom vad 340% fler offerter faktiskt innebär operationellt.',
  },
  {
    icon: AlertTriangle,
    color: 'red',
    label: 'Dåligt från start',
    text: 'Bildernas stil var för generisk från början. AI gav mig "standard construction photos" utan karaktär. Jag behövde iterera med mycket mer specifika prompts: plats, belysning, tid på dygnet, kameravinkel, känsla. Logotypen krävde fem omgångar.',
  },
]

const colorMap = {
  green: { bg: 'bg-green-50', border: 'border-green-100', icon: 'text-green-600', badge: 'bg-green-50 text-green-700 border-green-100' },
  blue:  { bg: 'bg-blue-50',  border: 'border-blue-100',  icon: 'text-accent-blue',  badge: 'bg-blue-50 text-accent-blue border-blue-100'  },
  amber: { bg: 'bg-amber-50', border: 'border-amber-100', icon: 'text-amber-600', badge: 'bg-amber-50 text-amber-700 border-amber-100' },
  red:   { bg: 'bg-red-50',   border: 'border-red-100',   icon: 'text-red-500',   badge: 'bg-red-50 text-red-600 border-red-100'   },
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
          <span className="section-label mb-3 block">Transparens</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-5 text-stone-900">
            Så använde jag AI
          </h2>
          <p className="text-stone-500 text-xl max-w-2xl mx-auto">
            En ärlig genomgång av vilka verktyg som användes, vad som fungerade
            och vad jag behövde göra om från grunden.
          </p>
        </motion.div>

        {/* Tools table */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-border rounded-2xl overflow-hidden shadow-card mb-7"
        >
          <div className="flex items-center gap-3 px-7 py-5 border-b border-border bg-bg-primary">
            <Sparkles size={17} className="text-accent-orange" />
            <h3 className="text-stone-900 font-bold">AI-verktyg som användes</h3>
          </div>
          <div className="divide-y divide-border">
            {tools.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="px-7 py-4 flex flex-col sm:flex-row sm:items-center gap-2 hover:bg-bg-primary transition-colors"
              >
                <span className="text-stone-900 font-semibold sm:w-52 flex-shrink-0 text-sm">{t.name}</span>
                <span className="text-stone-500 text-sm">{t.use}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Reflections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {reflections.map((r, i) => {
            const c = colorMap[r.color]
            return (
              <motion.div
                key={r.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white border border-border rounded-2xl p-7 shadow-card"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center`}>
                    <r.icon size={18} className={c.icon} />
                  </div>
                  <span className={`text-xs font-bold border rounded-full px-3 py-1 ${c.badge}`}>{r.label}</span>
                </div>
                <p className="text-stone-600 leading-relaxed text-sm">{r.text}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-7 bg-stone-900 rounded-2xl p-8 text-center"
        >
          <p className="text-stone-300 text-lg leading-relaxed max-w-3xl mx-auto">
            AI genererade <span className="text-white font-semibold">råmaterialet</span> men varje text,
            bild och beslut på den här sidan har{' '}
            <span className="text-white font-semibold">granskats, redigerats och godkänts av mig.</span>{' '}
            AI är ett verktyg. Kvaliteten beror på den som håller i verktyget.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
