import { useState } from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Clock, Users, CheckCircle, Star, Copy, Check, Sparkles, Music, Mic, Play, Pause } from 'lucide-react'
import { BuildingNight, FacebookAd, Logo, CampaignBanner, ImageCard } from './CaseImages'

const results = [
  { value: '+340%', label: 'Fler skickade offerter', icon: TrendingUp },
  { value: '18h', label: 'Sparad tid per vecka', icon: Clock },
  { value: '+2.1M', label: 'Mer omsättning efter 6 mån', icon: Users },
  { value: '92%', label: 'Offertacceptansgrad', icon: CheckCircle },
]

const emailText = `Hej Maria!

Tack för att du kontaktade Bergström Bygg angående din tillbyggnad i Partille.

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

📍 Göteborg · Mölndal · Kungsbacka · Partille

#tillbyggnad #snickeri #Göteborg #renovering`

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

function FakeAudio({ icon: Icon, title, sub, color }) {
  const [playing, setPlaying] = useState(false)
  return (
    <div className="bg-white border border-border rounded-xl p-4 flex items-center gap-3 shadow-card">
      <button
        onClick={() => setPlaying(!playing)}
        className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 active:scale-95 transition-transform"
        style={{ backgroundColor: color }}
      >
        {playing
          ? <Pause size={14} className="text-white" fill="white"/>
          : <Play size={14} className="text-white ml-0.5" fill="white"/>}
      </button>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <Icon size={12} style={{ color }}/>
          <span className="text-stone-900 font-semibold text-sm truncate">{title}</span>
        </div>
        <div className="flex items-center gap-[2px] h-4">
          {Array.from({ length: 28 }, (_, i) => (
            <motion.div
              key={i}
              className="flex-shrink-0 rounded-full"
              style={{ width: 2, backgroundColor: color, opacity: 0.6 }}
              animate={playing ? { height: [2, 4 + Math.sin(i * 0.5) * 12 + 4, 2] } : { height: 2 + Math.abs(Math.sin(i * 0.4)) * 6 }}
              transition={playing ? { duration: 0.6 + (i % 4) * 0.08, repeat: Infinity, ease: 'easeInOut', delay: i * 0.02 } : {}}
            />
          ))}
        </div>
      </div>
      <span className="text-stone-400 text-xs">{sub}</span>
    </div>
  )
}

export default function CustomerCase() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Header ── */}
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

        {/* ── Featured image: brand identity ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <ImageCard
            badge="Varumärke"
            tool="Adobe Firefly + Midjourney"
            title="Nytt visuellt varumärke"
            caption="Det första vi gjorde åt Bergström Bygg var att uppdatera deras visuella identitet. AI-genererad logotyp och färgpalett anpassad för byggbranschen i Göteborgsområdet."
          >
            <Logo />
          </ImageCard>
        </motion.div>

        {/* ── Problem + Solution ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 mb-12">
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
                <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center flex-shrink-0">
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
                  desc: 'Kunden fyller i ett formulär. AI genererar en komplett offert på under 5 minuter med Bergströms logotyp, prissättning och villkor.',
                },
                {
                  title: 'Automatisk uppföljning',
                  desc: 'Systemet skickar påminnelser efter 3 och 7 dagar om kunden inte svarat. Personliga, välformulerade meddelanden.',
                },
                {
                  title: 'Online-bokning',
                  desc: 'En kalenderintegration på hemsidan låter kunder boka besiktning direkt. AI matchar bokningstider med befintliga jobb och reseväg.',
                },
                {
                  title: 'Leadgenerering via sociala medier',
                  desc: 'AI-skapade annonser för Facebook och Instagram riktade mot husägare i Göteborgsregionen. A/B-testade och löpande optimerade.',
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

        {/* ── Visual content we made: webpage hero ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 mb-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-label mb-3 block">Material vi skapade · 1/3</span>
            <h3 className="text-3xl font-black tracking-tight mb-4 text-stone-900">
              Ny hemsida med AI-genererad header
            </h3>
            <p className="text-stone-500 text-lg leading-relaxed mb-4">
              Bergströms gamla hemsida hade en stockfoto-bild av ett färdigt hus.
              Vi genererade en dramatisk nattvy av ett pågående bygge i Göteborg som
              direkt kommunicerar professionalism och aktivitet.
            </p>
            <div className="bg-bg-primary border border-border rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles size={12} className="text-accent-orange"/>
                <span className="text-stone-400 text-xs font-semibold">Prompt</span>
              </div>
              <p className="text-stone-600 text-xs italic">"Modern Swedish construction site at night, illuminated crane and building under construction, dramatic blue lighting, professional editorial photography style"</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <ImageCard badge="Hemsida" tool="Midjourney v6">
              <BuildingNight />
            </ImageCard>
          </motion.div>
        </div>

        {/* ── Text content we made: offert email ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="mb-6">
            <span className="section-label mb-3 block">Material vi skapade · 2/3</span>
            <h3 className="text-3xl font-black tracking-tight mb-3 text-stone-900">
              AI-genererade offertmejl och annonstexter
            </h3>
            <p className="text-stone-500 text-lg max-w-3xl">
              Varje gång en kund fyller i Bergströms kontaktformulär genererar AI ett
              komplett offertmejl. Här är ett verkligt exempel som skickades till en kund i Partille.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white border border-border rounded-2xl overflow-hidden shadow-card">
              <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-bg-primary">
                <div className="flex items-center gap-2">
                  <Sparkles size={14} className="text-accent-orange" />
                  <span className="text-stone-700 font-medium text-sm">Offertmejl · auto-genererat</span>
                </div>
                <CopyButton text={emailText} />
              </div>
              <div className="p-6">
                <pre className="text-stone-700 text-sm leading-relaxed whitespace-pre-wrap font-sans">{emailText}</pre>
              </div>
              <div className="px-6 pb-5">
                <div className="bg-accent-orangePale border border-orange-200 rounded-lg px-4 py-2.5 text-accent-orange text-xs font-medium flex items-center gap-2">
                  <Sparkles size={12} /> Genererad med Claude AI · Redigerad av Konstrukt
                </div>
              </div>
            </div>

            <div className="bg-white border border-border rounded-2xl overflow-hidden shadow-card">
              <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-bg-primary">
                <div className="flex items-center gap-2">
                  <Sparkles size={14} className="text-accent-orange" />
                  <span className="text-stone-700 font-medium text-sm">Instagram-inlägg · sommarkampanj</span>
                </div>
                <CopyButton text={socialText} />
              </div>
              <div className="p-6">
                <pre className="text-stone-700 text-sm leading-relaxed whitespace-pre-wrap font-sans">{socialText}</pre>
              </div>
              <div className="px-6 pb-5">
                <div className="bg-accent-orangePale border border-orange-200 rounded-lg px-4 py-2.5 text-accent-orange text-xs font-medium flex items-center gap-2">
                  <Sparkles size={12} /> Genererad med ChatGPT · Redigerad av Konstrukt
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Ads + Banner imagery ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="mb-6">
            <span className="section-label mb-3 block">Material vi skapade · 3/3</span>
            <h3 className="text-3xl font-black tracking-tight mb-3 text-stone-900">
              Annonser och kampanjmaterial
            </h3>
            <p className="text-stone-500 text-lg max-w-3xl">
              Två AI-skapade visuella tillgångar som driver leadgenereringen.
              Den vänstra annonsen körs på Facebook och Instagram, den högra
              används som banner på Instagram Stories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <ImageCard
              badge="Facebook-annons"
              tool="DALL-E 3"
              title="Sommarkampanj 2024"
              caption="A/B-testad mot tre varianter. Den här gav 3x högre CTR och 14 leads från ett enda inlägg."
            >
              <FacebookAd />
            </ImageCard>
            <ImageCard
              badge="Instagram Stories"
              tool="Canva AI + Midjourney"
              title="Kampanjbanner"
              caption="Snygg visuell hook med stark kontrast. Genererad på 10 minuter, justerad i Canva för rätt format."
            >
              <CampaignBanner />
            </ImageCard>
          </div>
        </motion.div>

        {/* ── Audio assets ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="mb-6">
            <span className="section-label mb-3 block">Ljud och röst</span>
            <h3 className="text-3xl font-black tracking-tight mb-3 text-stone-900">
              Jingle och voiceover för reklamfilm
            </h3>
            <p className="text-stone-500 text-lg max-w-3xl">
              Två AI-genererade ljudtillgångar som används i reklamfilmen och i radiospot.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FakeAudio icon={Music} title="Bergström Bygg jingle (15s)" sub="Suno AI" color="#c2410c"/>
            <FakeAudio icon={Mic} title="AI Voiceover reklamfilm (52s)" sub="ElevenLabs" color="#1d4ed8"/>
          </div>
        </motion.div>

        {/* ── Results ── */}
        <div className="mb-10">
          <span className="section-label mb-3 block text-center">Resultat efter 6 månader</span>
          <h3 className="text-3xl md:text-4xl font-black tracking-tight mb-8 text-stone-900 text-center">
            Det här hände
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
        </div>

        {/* ── Testimonial ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-stone-900 rounded-2xl p-8 md:p-12 mb-8"
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

        {/* ── Timeline ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-border rounded-2xl p-8 shadow-card"
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
