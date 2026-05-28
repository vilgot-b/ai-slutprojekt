// SVG placeholders for AI-generated images used in the customer case.
// Replace by dropping real images into /public/case-images/ and swapping the <Comp /> with <img src=... />

export function BuildingNight() {
  return (
    <svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="400" height="240" fill="#0f172a"/>
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
    </svg>
  )
}

export function FacebookAd() {
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
    </svg>
  )
}

export function Logo() {
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
    </svg>
  )
}

export function CampaignBanner() {
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
    </svg>
  )
}

// Wraps a placeholder with a label and metadata
export function ImageCard({ children, badge, title, tool, caption }) {
  return (
    <div className="bg-white border border-border rounded-2xl overflow-hidden shadow-card hover:shadow-card-md transition-shadow group">
      <div className="relative bg-bg-primary overflow-hidden" style={{ aspectRatio: '16/9' }}>
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
