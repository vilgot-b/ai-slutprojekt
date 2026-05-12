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
    text: 'De AI-genererade marknadsföringstexterna — särskilt uppföljnings-e-posten och Instagram-inlägget. AI producerade ett bra första utkast, men det var min redigering (kortare meningar, mer direkt ton, borttagning av klichéer) som fick texterna att kännas äkta. Kombinationen av AI + mänsklig röst gav det bästa resultatet.',
  },
  {
    icon: Wrench,
    color: 'blue',
    label: 'Behövde förbättras',
    text: 'AI tenderade att skriva för formella och generiska offerttexter till en början — ord som "Vi är glada att kunna presentera" och "Vi hoppas på ett givande samarbete" togs bort. Allt behövde redigeras mot en mer personlig, direkt ton som passar ett litet byggföretag i Göteborg.',
  },
  {
    icon: Lightbulb,
    color: 'yellow',
    label: 'Krävde mest eget tänkande',
    text: 'Strukturen på kundcaset och vilka resultat som är trovärdiga. AI kan generera siffror men kan inte bedöma vad som är realistiskt för ett byggföretag. Jag behövde tänka igenom vad 340% fler offerter faktiskt innebär operationellt, och om 92% offert-acceptansgrad är rimligt (det är högt men möjligt med bättre matchning).',
  },
  {
    icon: AlertTriangle,
    color: 'red',
    label: 'Dåligt från start',
    text: 'Bildernas stil var från början för generisk — AI gav mig "standard construction photos" utan karaktär. Jag behövde iterera med mycket mer specifika prompts: plats, belysning, tid på dygnet, kameravinkel, känsla. Logotypen krävde fem omgångar innan den kändes professionell snarare än clip-art.',
  },
]

export default function AIDeclaration() {
  return (
    <section id="ai-deklaration" className="py-24 relative">
      <div className="absolute inset-0 bg-bg-secondary" />
      <div className="orb w-[400px] h-[400px] bg-accent-blue top-[20%] left-[-100px]" style={{ opacity: 0.06 }} />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4 block">Transparens</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            Så använde jag AI
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            En ärlig genomgång av vilka verktyg som användes, vad som fungerade —
            och vad jag behövde göra om från grunden.
          </p>
        </motion.div>

        {/* Tools table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-bg-card border border-bg-border rounded-2xl overflow-hidden mb-8"
        >
          <div className="flex items-center gap-3 px-7 py-5 border-b border-bg-border">
            <Sparkles size={18} className="text-accent-blue" />
            <h3 className="text-white font-bold text-lg">AI-verktyg som användes</h3>
          </div>
          <div className="divide-y divide-bg-border">
            {tools.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="px-7 py-4 flex flex-col sm:flex-row sm:items-center gap-2 hover:bg-bg-secondary/50 transition-colors"
              >
                <span className="text-white font-semibold sm:w-48 flex-shrink-0">{t.name}</span>
                <span className="text-gray-400 text-sm">{t.use}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Reflections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reflections.map((r, i) => {
            const colorMap = {
              green: { bg: 'bg-green-500/10', border: 'border-green-500/20', icon: 'text-green-400', label: 'bg-green-500/10 text-green-400 border-green-500/20' },
              blue: { bg: 'bg-accent-blue/10', border: 'border-accent-blue/20', icon: 'text-accent-blueLight', label: 'bg-accent-blue/10 text-accent-blueLight border-accent-blue/20' },
              yellow: { bg: 'bg-yellow-500/10', border: 'border-yellow-500/20', icon: 'text-yellow-400', label: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' },
              red: { bg: 'bg-red-500/10', border: 'border-red-500/20', icon: 'text-red-400', label: 'bg-red-500/10 text-red-400 border-red-500/20' },
            }
            const c = colorMap[r.color]
            return (
              <motion.div
                key={r.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-bg-card border border-bg-border rounded-2xl p-7"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center`}>
                    <r.icon size={18} className={c.icon} />
                  </div>
                  <span className={`text-xs font-bold border rounded-full px-3 py-1 ${c.label}`}>{r.label}</span>
                </div>
                <p className="text-gray-300 leading-relaxed">{r.text}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 bg-gradient-to-r from-accent-blue/10 to-accent-purple/10 border border-accent-blue/20 rounded-2xl p-8 text-center"
        >
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
            AI genererade <span className="text-white font-semibold">råmaterialet</span> — men varje text,
            bild och beslut på den här sidan har <span className="text-white font-semibold">granskats, redigerats och godkänts av mig</span>.
            AI är ett verktyg. Kvaliteten beror på den som håller i verktyget.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
