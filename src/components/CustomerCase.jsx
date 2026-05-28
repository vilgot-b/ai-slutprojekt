import { useState } from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Clock, Users, CheckCircle, Star, Copy, Check, Sparkles, FileText, Calendar, Megaphone, MessageSquare, BarChart3 } from 'lucide-react'
import { QuoteMockup, FollowupMockup, BookingMockup, FacebookAd, GoogleAd, InstagramPost, ChatMockup, DashboardMockup, ImageCard } from './CaseImages'

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

function ServiceShowcase({ index, total, label, icon: Icon, title, lead, children, reverse }) {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-7 items-center ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}>
      <motion.div
        initial={{ opacity: 0, x: reverse ? 20 : -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <span className="section-label mb-3 block">Tjänst i bruk · {index}/{total}</span>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-11 h-11 rounded-xl bg-accent-orangePale border border-orange-200 flex items-center justify-center">
            <Icon size={20} className="text-accent-orange" />
          </div>
          <h3 className="text-3xl font-black tracking-tight text-stone-900">{title}</h3>
        </div>
        <p className="text-stone-500 text-lg leading-relaxed">{lead}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: reverse ? -20 : 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
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

        {/* ── Problem + Solution ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 mb-20">
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

            <p className="text-stone-500 mb-5">
              Vi satte upp hela vårt tjänsteutbud åt Bergström Bygg. På de följande sektionerna
              ser du exempel på hur varje del faktiskt fungerar i deras vardag.
            </p>

            <ul className="space-y-3">
              {[
                { i: FileText, t: 'AI-offertskrivning på 5 min per förfrågan' },
                { i: MessageSquare, t: 'Automatisk uppföljning via SMS och e-post' },
                { i: Calendar, t: 'Online-bokning med reseoptimering' },
                { i: Megaphone, t: 'AI-genererade annonser på Meta och Google' },
                { i: MessageSquare, t: 'AI-chatt på hemsidan dygnet runt' },
                { i: BarChart3, t: 'Realtidsrapportering av leads och konvertering' },
              ].map((s) => (
                <li key={s.t} className="flex gap-3 items-center">
                  <s.i size={16} className="text-accent-orange flex-shrink-0" />
                  <span className="text-stone-700 text-sm">{s.t}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* ─── Service showcases ─────────────────────────────────────────── */}
        <div className="space-y-20 mb-20">

          {/* 1. AI-offertskrivning */}
          <ServiceShowcase
            index={1} total={6}
            icon={FileText}
            title="AI-offertskrivning"
            lead="Tidigare tog en offert 2-4 timmar att skriva. Nu fyller kunden i ett formulär på hemsidan, AI genererar offerten på under 5 minuter, Karl granskar och skickar."
          >
            <ImageCard
              badge="Offertgenerator"
              title="Offert för Maria · Tillbyggnad Partille"
              caption="Genererad på 4 minuter och 12 sekunder. Karl gjorde två små justeringar innan han skickade den."
            >
              <QuoteMockup />
            </ImageCard>
          </ServiceShowcase>

          {/* 2. Kunduppföljning */}
          <ServiceShowcase
            index={2} total={6}
            reverse
            icon={MessageSquare}
            title="Automatisk kunduppföljning"
            lead="Systemet skickar automatiska SMS och e-post efter 3 och 7 dagar om kunden inte svarat. Personliga meddelanden, inte spam, och Karl ser alltid hela tråden."
          >
            <ImageCard
              badge="SMS + e-post"
              title="Uppföljning i praktiken"
              caption="41% svarsfrekvens på dag 7-mejlet. 23% av dessa konverterar till bokning."
            >
              <FollowupMockup />
            </ImageCard>
          </ServiceShowcase>

          {/* 3. Smart bokning */}
          <ServiceShowcase
            index={3} total={6}
            icon={Calendar}
            title="Smart bokning"
            lead="Kunderna bokar besiktning direkt på hemsidan. AI matchar tider mot Karls befintliga jobb och reseväg så att en dag i Mölndal inte avbryts av ett uppdrag på Hisingen."
          >
            <ImageCard
              badge="Bokningskalender"
              title="Vecka 14 · Reseoptimerad"
              caption="10 bokningar denna vecka utan ett enda telefonsamtal. Tidigare snitt: 6 bokningar."
            >
              <BookingMockup />
            </ImageCard>
          </ServiceShowcase>

          {/* 4. AI-marknadsföring · two ads side by side */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <span className="section-label mb-3 block">Tjänst i bruk · 4/6</span>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-11 h-11 rounded-xl bg-accent-orangePale border border-orange-200 flex items-center justify-center">
                  <Megaphone size={20} className="text-accent-orange" />
                </div>
                <h3 className="text-3xl font-black tracking-tight text-stone-900">AI-marknadsföring</h3>
              </div>
              <p className="text-stone-500 text-lg max-w-3xl">
                AI skapar och kör annonser på Facebook, Instagram och Google. Allt riktas mot
                husägare i Göteborgsregionen, A/B-testas löpande och optimeras baserat på vilka jobb som blir bokade.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <ImageCard
                  badge="Facebook-annons"
                  title="Sommarkampanj 2024"
                  caption="A/B-testad mot tre varianter. 3x högre CTR än stockfoto-annonsen."
                >
                  <FacebookAd />
                </ImageCard>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }}>
                <ImageCard
                  badge="Google-annons"
                  title="Sökord: tillbyggnad göteborg"
                  caption="12 400 visningar per vecka. 6,8% CTR vilket är klart över branschsnittet."
                >
                  <GoogleAd />
                </ImageCard>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.16 }}>
                <ImageCard
                  badge="Instagram Stories"
                  title="Kampanjbanner"
                  caption="Genererad på 10 minuter. 4 200 räckvidd och 14 leads från ett enda inlägg."
                >
                  <InstagramPost />
                </ImageCard>
              </motion.div>
            </div>

            {/* Text examples used in the ads */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
              <div className="bg-white border border-border rounded-2xl overflow-hidden shadow-card">
                <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-bg-primary">
                  <div className="flex items-center gap-2">
                    <Sparkles size={14} className="text-accent-orange" />
                    <span className="text-stone-700 font-medium text-sm">Offertmejl · text till offerten</span>
                  </div>
                  <CopyButton text={emailText} />
                </div>
                <div className="p-6">
                  <pre className="text-stone-700 text-sm leading-relaxed whitespace-pre-wrap font-sans">{emailText}</pre>
                </div>
              </div>

              <div className="bg-white border border-border rounded-2xl overflow-hidden shadow-card">
                <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-bg-primary">
                  <div className="flex items-center gap-2">
                    <Sparkles size={14} className="text-accent-orange" />
                    <span className="text-stone-700 font-medium text-sm">Instagram-text · sommarkampanj</span>
                  </div>
                  <CopyButton text={socialText} />
                </div>
                <div className="p-6">
                  <pre className="text-stone-700 text-sm leading-relaxed whitespace-pre-wrap font-sans">{socialText}</pre>
                </div>
              </div>
            </div>
          </div>

          {/* 5. AI-chatt */}
          <ServiceShowcase
            index={5} total={6}
            reverse
            icon={MessageSquare}
            title="AI-chatt och kundtjänst"
            lead="En intelligent chatt på Bergströms hemsida svarar på vanliga frågor dygnet runt, kvalificerar lead och skickar de varma kontakterna direkt till Karl med all info redo."
          >
            <ImageCard
              badge="Hemsidechatt"
              title="Lead kvalificerad på 4 meddelanden"
              caption="AI samlar namn, plats, projekttyp och budget innan den lämnar över till Karl."
            >
              <ChatMockup />
            </ImageCard>
          </ServiceShowcase>

          {/* 6. Rapportering */}
          <ServiceShowcase
            index={6} total={6}
            icon={BarChart3}
            title="Rapportering och insikter"
            lead="Karl loggar in en gång i veckan och ser allt: vilka kanaler som ger flest jobb, var leads tappas och hur omsättningen utvecklas. Inga gissningar, bara siffror."
          >
            <ImageCard
              badge="Realtidsdashboard"
              title="Q2 2024"
              caption="Visar att Google-annonser ger 55% av alla leads. Investeringen mot Meta-annonser justerades baserat på datat."
            >
              <DashboardMockup />
            </ImageCard>
          </ServiceShowcase>

        </div>

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
