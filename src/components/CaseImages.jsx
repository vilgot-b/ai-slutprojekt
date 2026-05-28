// SVG placeholders that mock up the actual services we offer.
// Replace by dropping real images into /public/case-images/ and swapping <Comp /> with <img src=...>

// ── 1. AI-offertskrivning: mockup of a generated quote PDF ────────────────
export function QuoteMockup() {
  return (
    <svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="400" height="240" fill="#f7f5f2"/>
      {/* Browser chrome */}
      <rect width="400" height="22" fill="#e5ded6"/>
      <circle cx="14" cy="11" r="3" fill="#ef4444"/>
      <circle cx="26" cy="11" r="3" fill="#fbbf24"/>
      <circle cx="38" cy="11" r="3" fill="#22c55e"/>
      <rect x="60" y="6" width="180" height="11" rx="3" fill="#fff"/>
      {/* PDF document */}
      <rect x="60" y="38" width="280" height="190" fill="white" stroke="#d6cec4" strokeWidth="1" rx="3"/>
      {/* Header strip */}
      <rect x="60" y="38" width="280" height="32" fill="#c2410c"/>
      <text x="74" y="58" fill="white" fontSize="12" fontWeight="700">OFFERT · Bergström Bygg AB</text>
      {/* Customer info */}
      <text x="74" y="86" fill="#1c1917" fontSize="9" fontWeight="600">Till: Maria Lindqvist</text>
      <text x="74" y="98" fill="#78716c" fontSize="8">Partille · Tillbyggnad 20 kvm</text>
      {/* Lines (items) */}
      {[0,1,2,3].map(i => (
        <g key={i}>
          <rect x="74" y={114 + i*18} width="160" height="6" rx="2" fill="#e5ded6"/>
          <rect x="270" y={114 + i*18} width="56" height="6" rx="2" fill="#fed7aa"/>
        </g>
      ))}
      {/* Total */}
      <line x1="74" y1="194" x2="326" y2="194" stroke="#d6cec4" strokeWidth="1"/>
      <text x="74" y="210" fill="#1c1917" fontSize="10" fontWeight="700">Totalt</text>
      <text x="278" y="210" fill="#c2410c" fontSize="11" fontWeight="800">285 000 kr</text>
      {/* Badge */}
      <rect x="278" y="44" width="55" height="20" rx="10" fill="white"/>
      <text x="291" y="58" fill="#c2410c" fontSize="8" fontWeight="700">5 min</text>
    </svg>
  )
}

// ── 2. Automatisk kunduppföljning: SMS + e-post tråd ──────────────────────
export function FollowupMockup() {
  return (
    <svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="400" height="240" fill="#f7f5f2"/>
      {/* Phone frame */}
      <rect x="20" y="14" width="180" height="212" rx="20" fill="#1c1917"/>
      <rect x="28" y="32" width="164" height="186" rx="6" fill="white"/>
      {/* SMS header */}
      <rect x="28" y="32" width="164" height="22" fill="#f5f5f4" rx="6"/>
      <text x="38" y="46" fill="#1c1917" fontSize="9" fontWeight="700">SMS · Bergström Bygg</text>
      {/* Messages */}
      <rect x="38" y="64" width="120" height="32" rx="10" fill="#e5e7eb"/>
      <text x="46" y="76" fill="#1c1917" fontSize="7">Hej Maria! Bara en</text>
      <text x="46" y="86" fill="#1c1917" fontSize="7">påminnelse om offerten</text>
      <text x="46" y="94" fill="#1c1917" fontSize="6" fillOpacity="0.5">12:04</text>

      <rect x="38" y="104" width="140" height="42" rx="10" fill="#fed7aa"/>
      <text x="46" y="116" fill="#1c1917" fontSize="7">Den gäller fram till den</text>
      <text x="46" y="126" fill="#1c1917" fontSize="7">15:e. Vill du boka in</text>
      <text x="46" y="136" fill="#1c1917" fontSize="7">besiktning?</text>
      <text x="46" y="144" fill="#1c1917" fontSize="6" fillOpacity="0.5">12:04</text>

      <rect x="60" y="156" width="118" height="22" rx="10" fill="#c2410c"/>
      <text x="68" y="170" fill="white" fontSize="7">Ja gärna, vilka tider</text>
      <text x="68" y="178" fill="white" fontSize="7">passar?</text>

      {/* Auto badge */}
      <rect x="38" y="194" width="60" height="14" rx="7" fill="#dcfce7"/>
      <text x="44" y="204" fill="#16a34a" fontSize="6" fontWeight="700">AUTO-SKICKAT</text>

      {/* Email side */}
      <rect x="218" y="14" width="170" height="212" rx="8" fill="white" stroke="#d6cec4" strokeWidth="1"/>
      <rect x="218" y="14" width="170" height="26" fill="#f5f5f4" rx="8"/>
      <text x="228" y="30" fill="#1c1917" fontSize="9" fontWeight="700">Inkorg · Uppföljning</text>

      {[0,1,2].map(i => (
        <g key={i}>
          <rect x="226" y={50 + i*52} width="154" height="46" rx="4" fill={i===0?'#fff7ed':'white'} stroke="#e5ded6" strokeWidth="0.5"/>
          <circle cx="238" cy={62 + i*52} r="6" fill={['#c2410c','#1d4ed8','#16a34a'][i]} opacity="0.8"/>
          <text x="250" y={60 + i*52} fill="#1c1917" fontSize="8" fontWeight="700">{['Maria L.','Thomas B.','Erik S.'][i]}</text>
          <text x="250" y={70 + i*52} fill="#78716c" fontSize="6">{['Dag 3 uppföljning','Dag 7 påminnelse','Bokningsbekräftelse'][i]}</text>
          <rect x="250" y={76 + i*52} width="100" height="3" rx="1.5" fill="#e5ded6"/>
          <rect x="250" y={82 + i*52} width="80" height="3" rx="1.5" fill="#e5ded6"/>
          <text x="362" y={60 + i*52} fill="#78716c" fontSize="6">12:0{i+2}</text>
        </g>
      ))}
    </svg>
  )
}

// ── 3. Smart bokning: kalenderpyttekvy ────────────────────────────────────
export function BookingMockup() {
  return (
    <svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="400" height="240" fill="#f7f5f2"/>
      <rect x="20" y="20" width="360" height="200" rx="8" fill="white" stroke="#d6cec4" strokeWidth="1"/>
      {/* Header */}
      <rect x="20" y="20" width="360" height="30" fill="#1c1917" rx="8"/>
      <rect x="20" y="42" width="360" height="8" fill="#1c1917"/>
      <text x="34" y="40" fill="white" fontSize="11" fontWeight="700">Boka besiktning · Bergström Bygg</text>
      <rect x="290" y="28" width="76" height="14" rx="7" fill="#c2410c"/>
      <text x="300" y="38" fill="white" fontSize="7" fontWeight="700">VECKA 14</text>

      {/* Day headers */}
      {['Mån','Tis','Ons','Tor','Fre'].map((d, i) => (
        <text key={d} x={50 + i*68} y="68" fill="#78716c" fontSize="8" fontWeight="700">{d.toUpperCase()}</text>
      ))}
      {[1,2,3,4,5].map(d => (
        <text key={d} x={50 + (d-1)*68} y="82" fill="#1c1917" fontSize="14" fontWeight="800">{d+7}</text>
      ))}

      {/* Time slots */}
      {[
        { day: 0, time: '09:00', booked: true, label: 'Lindqvist · Partille' },
        { day: 0, time: '13:00', booked: false },
        { day: 1, time: '10:00', booked: true, label: 'Eriksson · Mölndal' },
        { day: 1, time: '14:00', booked: false },
        { day: 2, time: '09:00', booked: false },
        { day: 2, time: '11:30', booked: true, label: 'Bjurman · Hisingen' },
        { day: 3, time: '08:00', booked: false },
        { day: 3, time: '13:00', booked: true, label: 'Andersson · Lerum' },
        { day: 4, time: '10:00', booked: false },
        { day: 4, time: '14:00', booked: false },
      ].map((s, i) => (
        <g key={i}>
          <rect
            x={40 + s.day*68}
            y={92 + (s.time === '09:00' || s.time === '08:00' || s.time === '10:00' ? 0 : 36)}
            width="60" height="32" rx="4"
            fill={s.booked ? '#fed7aa' : '#dcfce7'}
            stroke={s.booked ? '#fb923c' : '#86efac'} strokeWidth="0.75"
          />
          <text x={46 + s.day*68}
            y={104 + (s.time === '09:00' || s.time === '08:00' || s.time === '10:00' ? 0 : 36)}
            fill={s.booked ? '#9a3412' : '#15803d'} fontSize="7" fontWeight="700">{s.time}</text>
          <text x={46 + s.day*68}
            y={114 + (s.time === '09:00' || s.time === '08:00' || s.time === '10:00' ? 0 : 36)}
            fill={s.booked ? '#9a3412' : '#15803d'} fontSize="6">{s.booked ? s.label : 'Ledigt'}</text>
        </g>
      ))}

      {/* Footer */}
      <rect x="20" y="190" width="360" height="30" fill="#fff7ed" rx="0"/>
      <text x="34" y="208" fill="#c2410c" fontSize="9" fontWeight="700">10 bokningar denna vecka</text>
      <rect x="298" y="198" width="68" height="16" rx="8" fill="#c2410c"/>
      <text x="313" y="208" fill="white" fontSize="7" fontWeight="700">Optimera</text>
    </svg>
  )
}

// ── 4. AI-marknadsföring: Facebook-annons ─────────────────────────────────
export function FacebookAd() {
  return (
    <img
      src={`${import.meta.env.BASE_URL}images/case-facebook.jpg`}
      alt="Facebook-annons för Bergström Bygg AB"
      className="w-full h-full object-cover"
    />
  )
}

// ── 5. Google-annons ──────────────────────────────────────────────────────
export function GoogleAd() {
  return (
    <svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="400" height="240" fill="#f7f5f2"/>
      {/* Search bar */}
      <rect x="20" y="20" width="360" height="36" rx="18" fill="white" stroke="#d6cec4" strokeWidth="1"/>
      <circle cx="40" cy="38" r="6" fill="none" stroke="#78716c" strokeWidth="1.5"/>
      <line x1="44" y1="42" x2="48" y2="46" stroke="#78716c" strokeWidth="1.5"/>
      <text x="56" y="42" fill="#1c1917" fontSize="11">snickare göteborg tillbyggnad</text>

      {/* Sponsored ad */}
      <rect x="20" y="70" width="360" height="86" rx="6" fill="white" stroke="#fed7aa" strokeWidth="1.5"/>
      <rect x="28" y="78" width="34" height="14" rx="3" fill="#fff7ed"/>
      <text x="33" y="88" fill="#c2410c" fontSize="7" fontWeight="700">SPONSRAT</text>
      <text x="68" y="89" fill="#78716c" fontSize="8">bergströmbygg.se</text>
      <text x="28" y="108" fill="#1d4ed8" fontSize="13" fontWeight="700">Tillbyggnad i Göteborg · Offert inom 24h</text>
      <text x="28" y="124" fill="#1c1917" fontSize="9">Certifierade snickare med 13 års erfarenhet. Vi bygger altaner,</text>
      <text x="28" y="136" fill="#1c1917" fontSize="9">uterum och tillbyggnader. Fast pris, inga överraskningar.</text>
      <text x="28" y="148" fill="#c2410c" fontSize="9" fontWeight="600">★ 4.9 · 87 omdömen · Boka gratis besiktning</text>

      {/* Stats overlay */}
      <rect x="20" y="170" width="170" height="50" rx="6" fill="white" stroke="#d6cec4"/>
      <text x="32" y="186" fill="#78716c" fontSize="8" fontWeight="700">VISNINGAR / VECKA</text>
      <text x="32" y="208" fill="#c2410c" fontSize="18" fontWeight="800">12 400</text>
      <rect x="210" y="170" width="170" height="50" rx="6" fill="white" stroke="#d6cec4"/>
      <text x="222" y="186" fill="#78716c" fontSize="8" fontWeight="700">CTR</text>
      <text x="222" y="208" fill="#16a34a" fontSize="18" fontWeight="800">6,8%</text>
    </svg>
  )
}

// ── 6. Instagram-banner (social media) ────────────────────────────────────
export function InstagramPost() {
  return (
    <img
      src={`${import.meta.env.BASE_URL}images/case-instagram.jpg`}
      alt="Instagram-story för Bergström Bygg AB"
      className="w-full h-full object-cover"
    />
  )
}

// ── 7. AI-chatt på hemsidan ───────────────────────────────────────────────
export function ChatMockup() {
  return (
    <svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Faux website behind */}
      <rect width="400" height="240" fill="#f7f5f2"/>
      <rect x="20" y="20" width="220" height="14" rx="3" fill="#d6cec4"/>
      <rect x="20" y="40" width="180" height="10" rx="3" fill="#e5ded6"/>
      <rect x="20" y="58" width="200" height="10" rx="3" fill="#e5ded6"/>
      <rect x="20" y="80" width="140" height="80" rx="6" fill="#e5ded6"/>
      <rect x="170" y="80" width="70" height="80" rx="6" fill="#e5ded6"/>

      {/* Chat widget */}
      <rect x="240" y="40" width="150" height="186" rx="14" fill="white" stroke="#d6cec4" strokeWidth="1"/>
      <rect x="240" y="40" width="150" height="36" rx="14" fill="#c2410c"/>
      <rect x="240" y="64" width="150" height="12" fill="#c2410c"/>
      <circle cx="258" cy="58" r="8" fill="white"/>
      <text x="254" y="62" fill="#c2410c" fontSize="9" fontWeight="900">AI</text>
      <text x="272" y="56" fill="white" fontSize="9" fontWeight="700">Bergström Bygg</text>
      <text x="272" y="68" fill="white" fontSize="7" opacity="0.85">Svarar inom 30 sek</text>

      {/* Messages */}
      <rect x="250" y="86" width="100" height="22" rx="8" fill="#f5f5f4"/>
      <text x="256" y="96" fill="#1c1917" fontSize="6.5">Hej! Vad behöver du</text>
      <text x="256" y="104" fill="#1c1917" fontSize="6.5">hjälp med idag?</text>

      <rect x="280" y="114" width="100" height="22" rx="8" fill="#fed7aa"/>
      <text x="287" y="124" fill="#1c1917" fontSize="6.5">Jag vill bygga ett</text>
      <text x="287" y="132" fill="#1c1917" fontSize="6.5">uterum, 12 kvm</text>

      <rect x="250" y="142" width="115" height="32" rx="8" fill="#f5f5f4"/>
      <text x="256" y="152" fill="#1c1917" fontSize="6.5">Perfekt! Vart bor du?</text>
      <text x="256" y="161" fill="#1c1917" fontSize="6.5">Vi kan boka in en</text>
      <text x="256" y="170" fill="#1c1917" fontSize="6.5">gratis besiktning.</text>

      <rect x="250" y="184" width="130" height="32" rx="6" fill="#fff7ed" stroke="#fed7aa" strokeWidth="1"/>
      <text x="256" y="195" fill="#c2410c" fontSize="6" fontWeight="700">LEAD KVALIFICERAD</text>
      <text x="256" y="206" fill="#78716c" fontSize="6">Maria, Partille · uterum 12 kvm</text>
      <text x="256" y="214" fill="#78716c" fontSize="6">Skickad till Karl ✓</text>
    </svg>
  )
}

// ── 8. Rapportering: dashboard ────────────────────────────────────────────
export function DashboardMockup() {
  return (
    <svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="400" height="240" fill="#1c1917"/>
      {/* Header */}
      <rect width="400" height="32" fill="#0c0a09"/>
      <text x="20" y="20" fill="white" fontSize="11" fontWeight="700">Dashboard · Q2 2024</text>
      <rect x="320" y="10" width="60" height="14" rx="7" fill="#c2410c"/>
      <text x="333" y="20" fill="white" fontSize="7" fontWeight="700">LIVE</text>

      {/* KPI cards */}
      {[
        { x: 16,  label: 'OFFERTER', value: '38', sub: '↑ +18%', color: '#fb923c' },
        { x: 112, label: 'BOKNINGAR', value: '24', sub: '↑ +32%', color: '#60a5fa' },
        { x: 208, label: 'KONVERTERING', value: '63%', sub: '↑ +12%', color: '#4ade80' },
        { x: 304, label: 'INTÄKT (mkr)', value: '1,8', sub: '↑ +41%', color: '#fbbf24' },
      ].map((k) => (
        <g key={k.label}>
          <rect x={k.x} y="44" width="80" height="58" rx="6" fill="#292524" stroke="#44403c" strokeWidth="0.5"/>
          <text x={k.x + 8} y="58" fill="#a8a29e" fontSize="6.5" fontWeight="700">{k.label}</text>
          <text x={k.x + 8} y="80" fill="white" fontSize="18" fontWeight="800">{k.value}</text>
          <text x={k.x + 8} y="94" fill={k.color} fontSize="7" fontWeight="700">{k.sub}</text>
        </g>
      ))}

      {/* Chart */}
      <rect x="16" y="114" width="240" height="112" rx="6" fill="#292524" stroke="#44403c" strokeWidth="0.5"/>
      <text x="24" y="128" fill="#a8a29e" fontSize="7" fontWeight="700">OFFERTER · SENASTE 8 V</text>
      {/* Line chart */}
      <polyline
        points="28,200 56,196 84,182 112,184 140,168 168,158 196,148 224,140 252,128"
        fill="none" stroke="#fb923c" strokeWidth="2"
      />
      <polyline
        points="28,200 56,196 84,182 112,184 140,168 168,158 196,148 224,140 252,128 252,210 28,210"
        fill="#fb923c" fillOpacity="0.15" stroke="none"
      />
      {[28,56,84,112,140,168,196,224,252].map(x => (
        <circle key={x} cx={x} cy={[200,196,182,184,168,158,148,140,128][[28,56,84,112,140,168,196,224,252].indexOf(x)]} r="2" fill="#fb923c"/>
      ))}

      {/* Channels */}
      <rect x="264" y="114" width="124" height="112" rx="6" fill="#292524" stroke="#44403c" strokeWidth="0.5"/>
      <text x="272" y="128" fill="#a8a29e" fontSize="7" fontWeight="700">LEADS PER KANAL</text>
      {[
        { l: 'Google', v: 0.55, c: '#fb923c' },
        { l: 'Meta',   v: 0.30, c: '#60a5fa' },
        { l: 'Direkt', v: 0.10, c: '#4ade80' },
        { l: 'Rekomm', v: 0.05, c: '#a78bfa' },
      ].map((ch, i) => (
        <g key={ch.l}>
          <text x="272" y={148 + i*16} fill="white" fontSize="7">{ch.l}</text>
          <rect x="310" y={142 + i*16} width={ch.v * 70} height="6" rx="3" fill={ch.c}/>
          <text x={310 + ch.v * 70 + 4} y={148 + i*16} fill={ch.c} fontSize="6" fontWeight="700">{Math.round(ch.v*100)}%</text>
        </g>
      ))}
    </svg>
  )
}

// Wraps a placeholder with a label and metadata
export function ImageCard({ children, badge, title, tool, caption, aspect = '16/9' }) {
  return (
    <div className="bg-white border border-border rounded-2xl overflow-hidden shadow-card hover:shadow-card-md transition-shadow group">
      <div className="relative bg-bg-primary overflow-hidden" style={{ aspectRatio: aspect }}>
        {children}
        {badge && (
          <span className="absolute top-3 left-3 text-xs font-bold bg-white/90 text-accent-orange border border-orange-200 rounded-full px-3 py-1">
            {badge}
          </span>
        )}
        {tool && (
          <span className="absolute top-3 right-3 text-xs font-medium bg-stone-900/80 text-white rounded-lg px-2.5 py-1 backdrop-blur">
            {tool}
          </span>
        )}
      </div>
      {(title || caption) && (
        <div className="p-5">
          {title && <h4 className="text-stone-900 font-bold text-sm mb-1">{title}</h4>}
          {caption && <p className="text-stone-500 text-xs leading-relaxed">{caption}</p>}
        </div>
      )}
    </div>
  )
}
