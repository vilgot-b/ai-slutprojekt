import { useState } from 'react'
import { motion } from 'framer-motion'
import { Copy, Check, Sparkles, Instagram, Mail } from 'lucide-react'

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false)
  const copy = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <button
      onClick={copy}
      className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-accent-blueLight transition-colors"
    >
      {copied ? <Check size={13} className="text-green-400" /> : <Copy size={13} />}
      {copied ? 'Kopierat!' : 'Kopiera'}
    </button>
  )
}

const emailText = `Hej Maria!

Tack för att du kontaktade Bergström Bygg angående din tillbyggnad i Partille.

Jag har tittat på din förfrågan och bifogat en offert baserad på de uppgifter du lämnade.
Sammanfattning av uppdraget:
• Tillbyggnad: 20 m², källarplan, altan
• Beräknad arbetstid: 6–8 veckor
• Prisintervall: 285 000 – 310 000 kr inkl. moms (beroende på materialval)

Vi har god tillgänglighet från och med vecka 14. Boka gärna ett kostnadsfritt
besiktningsbesök via länken nedan — det tar 30 minuter och ger oss exakta mått
inför slutofferten.

👉 Boka besiktning: bergströmbygg.se/boka

Har du frågor? Ring direkt på 073-XXX XX XX.

Bästa hälsningar,
Karl Bergström
Bergström Bygg AB`

const socialText = `🏠 Drömmer du om mer plats hemma i sommar?

Vi på Bergström Bygg bygger tillbyggnader, uterum och altaner i hela Göteborgsregionen.

✅ Offert inom 24 timmar
✅ Certifierade snickare med 13 år erfarenhet
✅ Fast pris — inga överraskningar

Just nu har vi 3 platser kvar i juni-schemat.

Tryck "Kontakta oss" för en gratis konsultation, eller kommentera "INFO" så hör vi av oss!

📍 Göteborg | Mölndal | Kungsbacka | Partille

#tillbyggnad #snickeri #Göteborg #renovering #husrenovering #altan #uterum`

const emailAlt = `Hej Thomas,

Jag hörde inte av dig efter att jag skickade offerten förra veckan.
Inga bekymmer — ibland försvinner e-post eller hamnar det i skräppost.

Om du fortfarande är intresserad av att renovera köket: offerten gäller till den 15:e.
Vill du ändra något — storlek, material eller tidplan — fixar vi det snabbt.

Boka ett snabbt samtal här: bergströmbygg.se/boka
Eller svara på det här mailet — jag är tillgänglig.

/Karl`

export default function AIGeneratedContent() {
  const [activeTab, setActiveTab] = useState('email')

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4 block">AI-genererat material</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
            Texter som konverterar —
            <br />
            <span className="gradient-text">skapade av AI, förbättrade av oss</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Exempel på AI-genererat innehåll vi skapade åt Bergström Bygg.
            Varje text är granskad och redigerad av oss för att matcha ton och målgrupp.
          </p>
        </motion.div>

        {/* Tab selector */}
        <div className="flex gap-3 mb-8 flex-wrap justify-center">
          {[
            { id: 'email', label: 'Offert-e-post', icon: Mail },
            { id: 'social', label: 'Instagram-inlägg', icon: Instagram },
            { id: 'followup', label: 'Uppföljnings-mail', icon: Mail },
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm transition-all ${
                activeTab === id
                  ? 'bg-accent-blue text-white glow-blue'
                  : 'bg-bg-card border border-bg-border text-gray-400 hover:text-white hover:border-accent-blue/40'
              }`}
            >
              <Icon size={15} />
              {label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Text preview */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-bg-card border border-bg-border rounded-2xl overflow-hidden"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-bg-border">
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-accent-blueLight" />
                <span className="text-white font-medium text-sm">
                  {activeTab === 'email' && 'Offertkonfirmation — automatiskt genererad'}
                  {activeTab === 'social' && 'Instagram-kampanj — sommarjobb 2024'}
                  {activeTab === 'followup' && 'Uppföljning dag 7 — ej svarat'}
                </span>
              </div>
              <CopyButton text={activeTab === 'email' ? emailText : activeTab === 'social' ? socialText : emailAlt} />
            </div>

            <div className="p-6">
              <pre className="text-gray-300 text-sm leading-relaxed whitespace-pre-wrap font-sans">
                {activeTab === 'email' && emailText}
                {activeTab === 'social' && socialText}
                {activeTab === 'followup' && emailAlt}
              </pre>
            </div>

            <div className="px-6 pb-5">
              <div className="flex items-center gap-2 bg-accent-blue/10 border border-accent-blue/20 rounded-lg px-4 py-2.5">
                <Sparkles size={14} className="text-accent-blue" />
                <span className="text-accent-blueLight text-xs font-medium">
                  Genererad med Claude AI · Redigerad av Konstrukt-teamet · Godkänd av kund
                </span>
              </div>
            </div>
          </motion.div>

          {/* Analysis panel */}
          <motion.div
            key={activeTab + '-meta'}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="flex flex-col gap-5"
          >
            <div className="bg-bg-card border border-bg-border rounded-2xl p-7">
              <h3 className="text-white font-bold text-lg mb-5">Varför det funkar</h3>
              <ul className="space-y-4">
                {activeTab === 'email' && [
                  { tag: 'Personalisering', text: 'Kundens namn, plats och specifika projekt omnämns direkt.' },
                  { tag: 'Tydlig CTA', text: 'Bokningslänk exponeras tidigt och upprepas. Sänker friktion.' },
                  { tag: 'Konkret', text: 'Prisintervall och tidplan ges direkt — ingen onödig väntan.' },
                  { tag: 'Ton', text: 'Vänlig men professionell. Ingen säljjargong, ingen press.' },
                ].map(({ tag, text }) => (
                  <li key={tag} className="flex gap-3 text-sm">
                    <span className="bg-accent-blue/10 text-accent-blueLight border border-accent-blue/20 text-xs font-bold px-2.5 py-0.5 rounded-full h-fit flex-shrink-0">{tag}</span>
                    <span className="text-gray-400">{text}</span>
                  </li>
                ))}
                {activeTab === 'social' && [
                  { tag: 'Hook', text: 'Emotionell öppningsfråga som direkt engagerar husägare.' },
                  { tag: 'Trovärdighet', text: '13 år erfarenhet och certifiering bygger förtroende snabbt.' },
                  { tag: 'Urgency', text: '"3 platser kvar" skapar begränsat utbud och driver handling.' },
                  { tag: 'Hashtags', text: 'Lokala och branschrelevanta — ökar räckvidd i Göteborg.' },
                ].map(({ tag, text }) => (
                  <li key={tag} className="flex gap-3 text-sm">
                    <span className="bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-bold px-2.5 py-0.5 rounded-full h-fit flex-shrink-0">{tag}</span>
                    <span className="text-gray-400">{text}</span>
                  </li>
                ))}
                {activeTab === 'followup' && [
                  { tag: 'Empati', text: 'Förstår att mail kan försvinna — ingen skuldbeläggning.' },
                  { tag: 'Kort', text: 'Uppföljningsmail ska vara korta. Respekterar mottagarens tid.' },
                  { tag: 'CTA', text: 'Två enkla handlingsalternativ: boka länk eller svara direkt.' },
                  { tag: 'Timing', text: 'Dag 7 är optimal — inte för tidigt, inte för sent.' },
                ].map(({ tag, text }) => (
                  <li key={tag} className="flex gap-3 text-sm">
                    <span className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-bold px-2.5 py-0.5 rounded-full h-fit flex-shrink-0">{tag}</span>
                    <span className="text-gray-400">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-bg-card border border-bg-border rounded-2xl p-7">
              <h3 className="text-white font-bold text-lg mb-4">Resultat från Bergström Bygg</h3>
              {activeTab === 'email' && (
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-black gradient-text">92%</div>
                    <div className="text-gray-500 text-sm">Öppningsgrad</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black gradient-text">38%</div>
                    <div className="text-gray-500 text-sm">Klick på bokningslänk</div>
                  </div>
                </div>
              )}
              {activeTab === 'social' && (
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-black gradient-text">4,200</div>
                    <div className="text-gray-500 text-sm">Räckvidd</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black gradient-text">14</div>
                    <div className="text-gray-500 text-sm">Leads från ett inlägg</div>
                  </div>
                </div>
              )}
              {activeTab === 'followup' && (
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-black gradient-text">41%</div>
                    <div className="text-gray-500 text-sm">Svarsfrekvens dag 7</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black gradient-text">23%</div>
                    <div className="text-gray-500 text-sm">Konverterade till bokning</div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
