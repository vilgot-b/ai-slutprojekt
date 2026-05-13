import { useState } from 'react'
import { motion } from 'framer-motion'
import { Copy, Check, Sparkles, Instagram, Mail, Image, FileText } from 'lucide-react'

// ─── Text content ────────────────────────────────────────────────────────────

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false)
  const copy = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <button onClick={copy} className="flex items-center gap-1.5 text-xs text-stone-400 hover:text-accent-orange transition-colors">
      {copied ? <Check size={12} className="text-green-500" /> : <Copy size={12} />}
      {copied ? 'Kopierat!' : 'Kopiera'}
    </button>
  )
}

const emailText = `Hej Maria!

Tack för att du kontaktade Bergström Bygg angående din tillbyggnad i Partille.

Jag har tittat på din förfrågan och bifogat en offert baserad på de uppgifter du lämnade.

Sammanfattning:
• Tillbyggnad: 20 kvm, källarplan, altan
• Beräknad arbetstid: 6-8 veckor
• Prisintervall: 285 000 - 310 000 kr inkl. moms

Vi har god tillgänglighet från och med vecka 14. Boka gärna ett kostnadsfritt
besiktningsbesök via länken nedan.

👉 bergströmbygg.se/boka

Har du frågor? Ring direkt på 073-XXX XX XX.

Bästa hälsningar,
Karl Bergström
Bergström Bygg AB`

const socialText = `🏠 Drömmer du om mer plats hemma i sommar?

Vi på Bergström Bygg bygger tillbyggnader, uterum och altaner i hela Göteborgsregionen.

✅ Offert inom 24 timmar
✅ Certifierade snickare med 13 år erfarenhet
✅ Fast pris utan överraskningar

Just nu har vi 3 platser kvar i junischemat.

Tryck "Kontakta oss" för en gratis konsultation, eller kommentera "INFO" så hör vi av oss!

📍 Göteborg · Mölndal · Kungsbacka · Partille

#tillbyggnad #snickeri #Göteborg #renovering`

const followupText = `Hej Thomas,

Jag hörde inte av dig efter att jag skickade offerten förra veckan.
Inga bekymmer, ibland försvinner e-post.

Om du fortfarande är intresserad av köksrenoveringen: offerten gäller till den 15:e.
Vill du ändra något fixar vi det snabbt.

Boka ett snabbt samtal här: bergströmbygg.se/boka

/Karl`

const textTabs = [
  { id: 'email', label: 'Offert-e-post', icon: Mail, text: emailText,
    why: [
      { tag: 'Personalisering', text: 'Kundens namn, plats och projekt omnämns direkt.' },
      { tag: 'Tydlig CTA', text: 'Bokningslänk exponeras tidigt och sänker friktion.' },
      { tag: 'Konkret', text: 'Prisintervall och tidplan ges direkt utan onödig väntan.' },
      { tag: 'Ton', text: 'Vänlig men professionell. Ingen säljjargong, ingen press.' },
    ],
    stats: [{ v: '92%', l: 'Öppningsgrad' }, { v: '38%', l: 'Klick på bokningslänk' }],
  },
  { id: 'social', label: 'Instagram-inlägg', icon: Instagram, text: socialText,
    why: [
      { tag: 'Hook', text: 'Emotionell öppningsfråga engagerar husägare direkt.' },
      { tag: 'Trovärdighet', text: '13 år erfarenhet och certifiering bygger förtroende snabbt.' },
      { tag: 'Urgency', text: '"3 platser kvar" skapar begränsat utbud och driver handling.' },
      { tag: 'Hashtags', text: 'Lokala och branschrelevanta för bättre räckvidd i Göteborg.' },
    ],
    stats: [{ v: '4 200', l: 'Räckvidd' }, { v: '14', l: 'Leads från ett inlägg' }],
  },
  { id: 'followup', label: 'Uppföljnings-mail', icon: Mail, text: followupText,
    why: [
      { tag: 'Empati', text: 'Förstår att mail kan försvinna utan att skuldbelägga.' },
      { tag: 'Kort', text: 'Uppföljningar ska vara korta. Respekterar mottagarens tid.' },
      { tag: 'CTA', text: 'Två enkla alternativ: boka länk eller svara direkt.' },
      { tag: 'Timing', text: 'Dag 7 är optimalt, inte för tidigt och inte för sent.' },
    ],
    stats: [{ v: '41%', l: 'Svarsfrekvens' }, { v: '23%', l: 'Konverterade till bokning' }],
  },
]

// ─── SVG image illustrations ─────────────────────────────────────────────────

function BuildingNight() {
  return (
    <svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="400" height="240" fill="#0f172a" />
      {[[40,20],[90,14],[170,28],[240,10],[310,22],[360,16]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r="1.5" fill="white" opacity={0.3+i%3*0.2}/>
      ))}
      <rect y="190" width="400" height="50" fill="#0a0f1e"/>
      <rect x="100" y="60" width="100" height="130" fill="#1e293b" rx="2"/>
      {[0,1,2,3].map(r=>[0,1,2].map(c=>(
        <rect key={`a${r}${c}`} x={110+c*30} y={70+r*28} width="18" height="16" rx="2"
          fill={r===1&&c===1?'#fbbf24':'#3b82f6'} opacity={r===1&&c===1?0.9:0.5}/>
      )))}
      <rect x="100" y="55" width="100" height="7" rx="2" fill="#c2410c" opacity="0.8"/>
      <rect x="220" y="35" width="70" height="155" fill="#1e293b" rx="2"/>
      {[0,1,2,3,4].map(r=>[0,1].map(c=>(
        <rect key={`b${r}${c}`} x={230+c*30} y={45+r*28} width="16" height="14" rx="2" fill="#60a5fa" opacity="0.5"/>
      )))}
      <rect x="220" y="30" width="70" height="7" rx="2" fill="#2563eb" opacity="0.8"/>
      <rect x="30" y="40" width="5" height="150" fill="#334155" rx="2"/>
      <rect x="20" y="40" width="80" height="5" fill="#334155" rx="2"/>
      <line x1="95" y1="43" x2="95" y2="70" stroke="#c2410c" strokeWidth="1.5" strokeDasharray="3,2" opacity="0.7"/>
      <rect x="88" y="70" width="14" height="10" rx="2" fill="#c2410c" opacity="0.5"/>
      <rect x="5" y="208" width="100" height="16" rx="3" fill="#c2410c" opacity="0.12"/>
      <text x="10" y="220" fill="#fb923c" fontSize="8" fontFamily="monospace">AI-GENERERAD BILD #1</text>
    </svg>
  )
}

function FacebookAdSVG() {
  return (
    <svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="400" height="240" fill="#fff7ed"/>
      <rect width="400" height="55" fill="#ea580c"/>
      <rect x="100" y="100" width="200" height="105" fill="#fbbf24" rx="2"/>
      <polygon points="85,105 200,55 315,105" fill="#fcd34d"/>
      <rect x="178" y="150" width="44" height="55" fill="#92400e" rx="2"/>
      <rect x="120" y="118" width="36" height="28" fill="#bfdbfe" rx="2"/>
      <rect x="244" y="118" width="36" height="28" fill="#bfdbfe" rx="2"/>
      <rect x="0" y="190" width="400" height="50" fill="#d1fae5"/>
      <rect x="15" y="10" width="190" height="16" rx="3" fill="white" opacity="0.9"/>
      <rect x="15" y="31" width="130" height="12" rx="3" fill="white" opacity="0.6"/>
      <rect x="280" y="7" width="105" height="42" rx="8" fill="white" opacity="0.95"/>
      <text x="300" y="25" fill="#ea580c" fontSize="10" fontWeight="bold">GRATIS</text>
      <text x="291" y="40" fill="#7c3aed" fontSize="8">KONSULTATION</text>
      <rect x="130" y="205" width="140" height="26" rx="6" fill="#ea580c"/>
      <text x="170" y="222" fill="white" fontSize="10" fontWeight="bold">Boka nu</text>
      <rect x="270" y="212" width="120" height="14" rx="3" fill="#ea580c" opacity="0.2"/>
      <text x="277" y="222" fill="#ea580c" fontSize="7" fontFamily="monospace">AI-GENERERAD BILD #2</text>
    </svg>
  )
}

function LogoSVG() {
  return (
    <svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#c2410c"/>
          <stop offset="100%" stopColor="#1d4ed8"/>
        </linearGradient>
      </defs>
      <rect width="400" height="240" fill="#f7f5f2"/>
      {Array.from({length:6},(_,r)=>Array.from({length:9},(_,c)=>(
        <circle key={`${r}${c}`} cx={c*48+20} cy={r*42+20} r="1" fill="#e5ded6"/>
      )))}
      <rect x="130" y="60" width="140" height="120" rx="14" fill="url(#lg)" opacity="0.12"/>
      <rect x="130" y="60" width="140" height="120" rx="14" fill="none" stroke="url(#lg)" strokeWidth="1.5"/>
      <text x="168" y="148" fill="url(#lg)" fontSize="72" fontWeight="900" fontFamily="serif">B</text>
      <text x="148" y="200" fill="#1c1917" fontSize="13" fontWeight="700" fontFamily="sans-serif">BERGSTRÖM BYGG</text>
      <text x="172" y="216" fill="#c2410c" fontSize="9" fontFamily="sans-serif" letterSpacing="4">GÖTEBORG</text>
      <rect x="10" y="220" width="120" height="14" rx="3" fill="#c2410c" opacity="0.12"/>
      <text x="16" y="230" fill="#c2410c" fontSize="7.5" fontFamily="monospace">AI-GENERERAD LOGOTYP</text>
    </svg>
  )
}

function BannerSVG() {
  return (
    <svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="bb" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1e3a5f"/>
          <stop offset="100%" stopColor="#0f172a"/>
        </linearGradient>
      </defs>
      <rect width="400" height="240" fill="url(#bb)"/>
      <polygon points="0,240 80,110 160,240" fill="#c2410c" opacity="0.08"/>
      <polygon points="240,0 400,0 400,130" fill="#1d4ed8" opacity="0.08"/>
      <circle cx="340" cy="48" r="40" fill="#fbbf24" opacity="0.1"/>
      <circle cx="340" cy="48" r="24" fill="#fbbf24" opacity="0.15"/>
      <polygon points="140,170 200,125 260,170" fill="white" opacity="0.9"/>
      <rect x="140" y="170" width="120" height="45" fill="white" opacity="0.9"/>
      <rect x="181" y="188" width="38" height="27" fill="#1e3a5f" opacity="0.9"/>
      <text x="35" y="55" fill="white" fontSize="21" fontWeight="900">SOMMAR</text>
      <text x="35" y="82" fill="#fbbf24" fontSize="21" fontWeight="900">KAMPANJ 2024</text>
      <text x="35" y="105" fill="#93c5fd" fontSize="10">Tillbyggnader · Altaner · Uterum</text>
      <rect x="280" y="172" width="105" height="48" rx="8" fill="#fbbf24"/>
      <text x="300" y="193" fill="#1e3a5f" fontSize="9" fontWeight="bold">GRATIS</text>
      <text x="290" y="208" fill="#1e3a5f" fontSize="8">OFFERT INOM 24H</text>
      <rect x="10" y="218" width="130" height="14" rx="3" fill="#fbbf24" opacity="0.2"/>
      <text x="16" y="228" fill="#fbbf24" fontSize="7.5" fontFamily="monospace">AI-GENERERAD BANNER #4</text>
    </svg>
  )
}

const imageItems = [
  { title: 'Bergström Bygg nattvy', badge: 'Hemsida', tool: 'Midjourney v6', usage: 'Hero-bild på hemsida', desc: 'Header-bild för hemsidan. Modernt flerfamiljshus under bygge med dramatisk nattbelysning.', prompt: 'Modern Swedish construction site at night, crane, blue lighting, professional photography', Comp: BuildingNight },
  { title: 'Facebook-annons sommar', badge: 'Annons', tool: 'DALL-E 3', usage: 'Facebook och Instagram', desc: 'Reklamannons för sociala medier. Ljus och inbjudande illustration med tydlig CTA.', prompt: 'Swedish house summer renovation, warm orange tones, clean illustration, call to action', Comp: FacebookAdSVG },
  { title: 'Logotyp Bergström Bygg', badge: 'Logotyp', tool: 'Adobe Firefly', usage: 'Varumärke och print', desc: 'Logotypkoncept med B-monogram. Professionellt och skalbart för print och digitalt.', prompt: 'Minimalist construction company logo, B monogram, gradient blue-orange, premium', Comp: LogoSVG },
  { title: 'Instagram-banner kampanj', badge: 'Social media', tool: 'Canva AI + Midjourney', usage: 'Instagram Stories', desc: 'Kampanjbanner för sociala medier. Klar och minnesvärd design som sticker ut i feeden.', prompt: 'Instagram story banner Swedish construction summer campaign, bold typography, warm sky', Comp: BannerSVG },
]

// ─── Main component ──────────────────────────────────────────────────────────

export default function AIGeneratedContent() {
  const [textTab, setTextTab] = useState('email')
  const [view, setView] = useState('texts')
  const active = textTabs.find((t) => t.id === textTab)

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="section-label mb-3 block">AI-genererat material</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-5 text-stone-900">
            Texter och bilder som konverterar
          </h2>
          <p className="text-stone-500 text-xl max-w-2xl mx-auto">
            Allt skapat för Bergström Bygg med AI. Varje text och bild är
            granskad och redigerad av oss för att matcha ton och målgrupp.
          </p>
        </motion.div>

        {/* View toggle */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-bg-secondary border border-border rounded-xl p-1 gap-1">
            <button
              onClick={() => setView('texts')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${view === 'texts' ? 'bg-white text-stone-900 shadow-card' : 'text-stone-500 hover:text-stone-700'}`}
            >
              <FileText size={15} /> Texter
            </button>
            <button
              onClick={() => setView('images')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${view === 'images' ? 'bg-white text-stone-900 shadow-card' : 'text-stone-500 hover:text-stone-700'}`}
            >
              <Image size={15} /> Bilder
            </button>
          </div>
        </div>

        {/* ── Texts view ── */}
        {view === 'texts' && (
          <motion.div key="texts" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
            {/* Tab selector */}
            <div className="flex gap-2 mb-7 flex-wrap justify-center">
              {textTabs.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setTextTab(id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all border ${
                    textTab === id
                      ? 'bg-accent-orange text-white border-accent-orange shadow-card'
                      : 'bg-white border-border text-stone-600 hover:border-accent-orange hover:text-accent-orange'
                  }`}
                >
                  <Icon size={14} /> {label}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Text preview */}
              <motion.div key={textTab} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="bg-white border border-border rounded-2xl overflow-hidden shadow-card">
                <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-bg-primary">
                  <div className="flex items-center gap-2">
                    <Sparkles size={14} className="text-accent-orange" />
                    <span className="text-stone-700 font-medium text-sm">
                      {textTab === 'email' && 'Offertkonfirmation - auto-genererad'}
                      {textTab === 'social' && 'Instagram - sommarkampanj 2024'}
                      {textTab === 'followup' && 'Uppföljning dag 7 - ej svarat'}
                    </span>
                  </div>
                  <CopyButton text={active.text} />
                </div>
                <div className="p-6">
                  <pre className="text-stone-700 text-sm leading-relaxed whitespace-pre-wrap font-sans">{active.text}</pre>
                </div>
                <div className="px-6 pb-5">
                  <div className="flex items-center gap-2 bg-accent-orangePale border border-orange-200 rounded-lg px-4 py-2.5">
                    <Sparkles size={12} className="text-accent-orange flex-shrink-0" />
                    <span className="text-accent-orange text-xs font-medium">Genererad med Claude AI · Redigerad av Konstrukt</span>
                  </div>
                </div>
              </motion.div>

              {/* Analysis */}
              <motion.div key={textTab + 'meta'} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-5">
                <div className="bg-white border border-border rounded-2xl p-7 shadow-card">
                  <h3 className="text-stone-900 font-bold text-lg mb-5">Varför det funkar</h3>
                  <ul className="space-y-3">
                    {active.why.map(({ tag, text }) => (
                      <li key={tag} className="flex gap-3 text-sm">
                        <span className="bg-accent-orangePale text-accent-orange border border-orange-200 text-xs font-bold px-2.5 py-0.5 rounded-full h-fit flex-shrink-0">{tag}</span>
                        <span className="text-stone-500">{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white border border-border rounded-2xl p-7 shadow-card">
                  <h3 className="text-stone-900 font-bold text-lg mb-4">Resultat från Bergström Bygg</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {active.stats.map(({ v, l }) => (
                      <div key={l} className="text-center">
                        <div className="text-3xl font-black gradient-text">{v}</div>
                        <div className="text-stone-400 text-xs mt-0.5">{l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* ── Images view ── */}
        {view === 'images' && (
          <motion.div key="images" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {imageItems.map((img, i) => (
                <motion.div
                  key={img.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white border border-border rounded-2xl overflow-hidden shadow-card hover:shadow-card-md transition-shadow group"
                >
                  <div className="relative bg-bg-primary overflow-hidden" style={{ aspectRatio: '16/9' }}>
                    <img.Comp />
                    <span className="absolute top-3 left-3 text-xs font-bold bg-white/90 text-accent-orange border border-orange-200 rounded-full px-3 py-1">
                      {img.badge}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-stone-900 font-bold">{img.title}</h3>
                        <p className="text-stone-400 text-xs">{img.usage}</p>
                      </div>
                      <span className="text-xs bg-accent-orangePale text-accent-orange border border-orange-200 rounded-lg px-2.5 py-1 font-medium flex-shrink-0 ml-3">{img.tool}</span>
                    </div>
                    <p className="text-stone-500 text-sm mb-4">{img.desc}</p>
                    <div className="bg-bg-primary rounded-lg p-3 border border-border">
                      <div className="flex items-center gap-1.5 mb-1">
                        <Sparkles size={11} className="text-accent-orange" />
                        <span className="text-xs text-stone-400 font-medium">Prompt (förenklad)</span>
                      </div>
                      <p className="text-stone-500 text-xs italic">"{img.prompt}"</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="text-center text-stone-400 text-xs mt-6">
              Bilderna är SVG-illustrationer som representerar AI-genererat innehåll.
              Faktiska leveranser inkluderar fullupplösta bilder från Midjourney, DALL-E eller Adobe Firefly.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
