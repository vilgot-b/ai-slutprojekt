import { motion } from 'framer-motion'
import { Sparkles, Download, ZoomIn } from 'lucide-react'
import { useState } from 'react'

// SVG-based construction illustrations representing AI-generated images

function ConstructionHero() {
  return (
    <svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="sky1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0a0b1e" />
          <stop offset="100%" stopColor="#1a1c3e" />
        </linearGradient>
        <linearGradient id="bldg1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4f70f5" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#1e2040" />
        </linearGradient>
        <linearGradient id="glow1" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#4f70f5" stopOpacity="0" />
          <stop offset="50%" stopColor="#4f70f5" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#4f70f5" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Sky */}
      <rect width="400" height="260" fill="url(#sky1)" />
      {/* Stars */}
      {[[40,20],[80,15],[150,30],[220,10],[290,25],[350,18],[370,40],[30,50],[120,45]].map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r="1.5" fill="white" opacity={0.4 + (i%3)*0.2} />
      ))}
      {/* Ground */}
      <rect y="200" width="400" height="60" fill="#0d0e1c" />
      {/* Building 1 - main */}
      <rect x="120" y="70" width="80" height="130" fill="url(#bldg1)" rx="2" />
      {/* Windows building 1 */}
      {[0,1,2,3,4].map(row => [0,1,2].map(col => (
        <rect key={`${row}${col}`} x={128+col*24} y={80+row*22} width="14" height="14" rx="2"
          fill={Math.random() > 0.4 ? '#7b97ff' : '#1e2040'} opacity="0.9" />
      )))}
      {/* Building 2 */}
      <rect x="220" y="100" width="60" height="100" fill="#1a1c2e" rx="2" />
      {[0,1,2,3].map(row => [0,1].map(col => (
        <rect key={`b2${row}${col}`} x={228+col*26} y={108+row*22} width="14" height="14" rx="2" fill="#2a3060" opacity="0.9" />
      )))}
      {/* Crane */}
      <line x1="110" y1="70" x2="110" y2="160" stroke="#4f70f5" strokeWidth="3" />
      <line x1="90" y1="75" x2="160" y2="75" stroke="#4f70f5" strokeWidth="2.5" />
      <line x1="160" y1="75" x2="160" y2="95" stroke="#7b97ff" strokeWidth="1.5" strokeDasharray="3,2" />
      {/* AI circuit overlay */}
      <rect x="0" y="0" width="400" height="260" fill="url(#glow1)" opacity="0.5" />
      {/* Dots pattern */}
      <circle cx="200" cy="75" r="4" fill="#4f70f5" opacity="0.6" />
      <circle cx="110" cy="75" r="4" fill="#7b97ff" opacity="0.6" />
      <line x1="110" y1="75" x2="200" y2="75" stroke="#4f70f5" strokeWidth="0.5" strokeDasharray="4,3" opacity="0.4" />
      {/* Label */}
      <rect x="10" y="225" width="120" height="22" rx="4" fill="#4f70f5" opacity="0.15" />
      <text x="20" y="240" fill="#7b97ff" fontSize="10" fontFamily="monospace">AI-GENERERAD BILD #1</text>
    </svg>
  )
}

function FacebookAd() {
  return (
    <svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="adBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#ea580c" />
        </linearGradient>
        <linearGradient id="house" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
      </defs>
      {/* Background */}
      <rect width="400" height="260" fill="#fff7ed" />
      {/* Top orange band */}
      <rect width="400" height="60" fill="url(#adBg)" />
      {/* House illustration */}
      <rect x="130" y="110" width="140" height="90" fill="url(#house)" rx="2" />
      <polygon points="120,115 200,65 280,115" fill="#fcd34d" />
      {/* Door */}
      <rect x="183" y="155" width="34" height="45" fill="#92400e" rx="2" />
      {/* Windows */}
      <rect x="145" y="130" width="30" height="26" fill="#bfdbfe" rx="2" />
      <rect x="225" y="130" width="30" height="26" fill="#bfdbfe" rx="2" />
      {/* Grass */}
      <rect x="0" y="200" width="400" height="60" fill="#d1fae5" />
      {/* Text blocks */}
      <rect x="20" y="10" width="200" height="18" rx="3" fill="white" opacity="0.9" />
      <rect x="20" y="35" width="140" height="12" rx="3" fill="white" opacity="0.6" />
      {/* Badge */}
      <rect x="295" y="8" width="90" height="44" rx="8" fill="white" opacity="0.95" />
      <text x="312" y="28" fill="#f97316" fontSize="11" fontWeight="bold">GRATIS</text>
      <text x="302" y="44" fill="#7c3aed" fontSize="9">KONSULTATION</text>
      {/* CTA button */}
      <rect x="120" y="215" width="160" height="30" rx="6" fill="#f97316" />
      <text x="165" y="235" fill="white" fontSize="11" fontWeight="bold">Boka nu →</text>
      {/* AI watermark */}
      <rect x="280" y="225" width="110" height="18" rx="4" fill="#f97316" opacity="0.2" />
      <text x="287" y="237" fill="#f97316" fontSize="9" fontFamily="monospace">AI-GENERERAD BILD #2</text>
    </svg>
  )
}

function LogoImage() {
  return (
    <svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="logoBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#07080f" />
          <stop offset="100%" stopColor="#111328" />
        </linearGradient>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4f70f5" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
      <rect width="400" height="260" fill="url(#logoBg)" />
      {/* Grid dots */}
      {Array.from({length: 8}, (_,row) => Array.from({length: 12}, (_,col) => (
        <circle key={`${row}${col}`} cx={col*38+10} cy={row*33+10} r="1" fill="#1e2040" />
      )))}
      {/* Bergström Bygg logo concept */}
      <rect x="130" y="80" width="140" height="100" rx="12" fill="url(#logoGrad)" opacity="0.15" />
      <rect x="130" y="80" width="140" height="100" rx="12" fill="none" stroke="url(#logoGrad)" strokeWidth="1.5" />
      {/* B mark */}
      <text x="168" y="150" fill="url(#logoGrad)" fontSize="64" fontWeight="900" fontFamily="serif">B</text>
      {/* Name */}
      <text x="155" y="210" fill="white" fontSize="14" fontWeight="700" fontFamily="sans-serif">BERGSTRÖM BYGG</text>
      <text x="177" y="228" fill="#4f70f5" fontSize="10" fontFamily="sans-serif" letterSpacing="4">GÖTEBORG</text>
      {/* Tag */}
      <rect x="10" y="225" width="120" height="18" rx="4" fill="#4f70f5" opacity="0.15" />
      <text x="17" y="237" fill="#7b97ff" fontSize="9" fontFamily="monospace">AI-GENERERAD LOGOTYP</text>
    </svg>
  )
}

function SocialBanner() {
  return (
    <svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="banner" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1e3a5f" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
      </defs>
      <rect width="400" height="260" fill="url(#banner)" />
      {/* Geometric shapes */}
      <polygon points="0,260 80,120 160,260" fill="#4f70f5" opacity="0.08" />
      <polygon points="240,0 400,0 400,140" fill="#7c3aed" opacity="0.08" />
      {/* Sun/stars */}
      <circle cx="340" cy="50" r="35" fill="#fbbf24" opacity="0.12" />
      <circle cx="340" cy="50" r="22" fill="#fbbf24" opacity="0.18" />
      {/* House silhouette */}
      <polygon points="140,180 200,130 260,180" fill="white" opacity="0.9" />
      <rect x="140" y="180" width="120" height="50" fill="white" opacity="0.9" />
      <rect x="183" y="200" width="34" height="30" fill="#1e3a5f" opacity="0.9" />
      {/* Text */}
      <text x="40" y="60" fill="white" fontSize="22" fontWeight="900">SOMMAR</text>
      <text x="40" y="88" fill="#fbbf24" fontSize="22" fontWeight="900">KAMPANJ 2024</text>
      <text x="40" y="115" fill="#93c5fd" fontSize="11">Tillbyggnader • Altaner • Uterum</text>
      {/* Price tag */}
      <rect x="285" y="185" width="100" height="50" rx="8" fill="#fbbf24" />
      <text x="305" y="208" fill="#1e3a5f" fontSize="10" fontWeight="bold">GRATIS</text>
      <text x="293" y="225" fill="#1e3a5f" fontSize="9">OFFERT INOM 24H</text>
      {/* Tag */}
      <rect x="10" y="225" width="130" height="18" rx="4" fill="#fbbf24" opacity="0.2" />
      <text x="17" y="237" fill="#fbbf24" fontSize="9" fontFamily="monospace">AI-GENERERAD BANNER #4</text>
    </svg>
  )
}

const images = [
  {
    id: 1,
    title: 'Bergström Bygg – Nattvy',
    desc: 'AI-genererad header-bild för hemsidan. Visar ett modernt flerfamiljshus i Göteborg under bygge, med dramatisk nattbelysning.',
    prompt: 'Modern Swedish construction site at night, crane, illuminated building, dramatic blue lighting, professional photography style',
    tool: 'Midjourney v6',
    component: ConstructionHero,
    usage: 'Hemsida hero-sektion',
    badge: 'Hemsida',
  },
  {
    id: 2,
    title: 'Facebook-annons – Sommarkampanj',
    desc: 'AI-genererad reklamannons för Facebook och Instagram. Ljus, inbjudande illustration av villa med sommarstämning och tydlig CTA.',
    prompt: 'Cheerful Swedish family house summer renovation, warm orange tones, clean illustration style, call to action button',
    tool: 'DALL-E 3',
    component: FacebookAd,
    usage: 'Social media ads',
    badge: 'Annons',
  },
  {
    id: 3,
    title: 'Logotyp – Bergström Bygg AB',
    desc: 'AI-genererat logotypkoncept med monogram. Professionellt, modernt och skalbart — fungerar i print och digitalt.',
    prompt: 'Minimalist construction company logo, letter B monogram, dark background, gradient blue-purple, premium feel',
    tool: 'Adobe Firefly + manuell refinement',
    component: LogoImage,
    usage: 'Varumärke & print',
    badge: 'Logotyp',
  },
  {
    id: 4,
    title: 'Instagram-banner – Kampanjgrafik',
    desc: 'AI-genererad kampanjbanner för sociala medier. Klar och minnesvärd design som sticker ut i feeden.',
    prompt: 'Instagram story banner Swedish construction company summer campaign, house silhouette, warm sky, clean bold typography',
    tool: 'Canva AI + Midjourney',
    component: SocialBanner,
    usage: 'Instagram Stories',
    badge: 'Social media',
  },
]

export default function AIImages() {
  const [zoomed, setZoomed] = useState(null)

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-bg-secondary" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4 block">AI-genererade bilder</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
            Visuellt material som
            <br />
            <span className="gradient-text">berättar historien</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Professionella bilder, logotyper och annonsgrafik — skapade med AI
            och anpassade för Bergström Byggsatt varumärke och målgrupp.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-bg-card border border-bg-border rounded-2xl overflow-hidden hover:border-accent-blue/30 transition-colors group"
            >
              {/* Image area */}
              <div className="relative bg-bg-primary overflow-hidden" style={{ aspectRatio: '16/10' }}>
                <img.component />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-accent-blue/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ZoomIn size={32} className="text-white drop-shadow" />
                </div>
                {/* Badge */}
                <span className="absolute top-3 left-3 text-xs font-bold bg-bg-card/90 text-accent-blueLight border border-accent-blue/30 rounded-full px-3 py-1 backdrop-blur">
                  {img.badge}
                </span>
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-white font-bold text-lg">{img.title}</h3>
                    <p className="text-gray-500 text-sm">{img.usage}</p>
                  </div>
                  <span className="text-xs bg-accent-blue/10 text-accent-blueLight border border-accent-blue/20 rounded-lg px-3 py-1 font-medium flex-shrink-0 ml-3">
                    {img.tool}
                  </span>
                </div>

                <p className="text-gray-400 text-sm mb-4">{img.desc}</p>

                <div className="bg-bg-secondary rounded-lg p-3 border border-bg-border">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <Sparkles size={12} className="text-accent-blue" />
                    <span className="text-xs text-gray-500 font-medium">Prompt (förenklad)</span>
                  </div>
                  <p className="text-gray-400 text-xs italic">"{img.prompt}"</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 text-sm mt-8"
        >
          * Bilderna ovan är SVG-illustrationer som representerar AI-genererat innehåll.
          Faktiska leveranser inkluderar fullupplösta bilder från Midjourney, DALL-E eller Adobe Firefly.
        </motion.p>
      </div>
    </section>
  )
}
