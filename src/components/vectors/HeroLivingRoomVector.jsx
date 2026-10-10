import { motion } from 'framer-motion';

export default function HeroLivingRoomVector() {
  return (
    <div className="hero-living-vector-wrap">
      <svg
        viewBox="0 0 720 560"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="hero-living-svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Subtle Sunlight Gradient */}
          <linearGradient id="sunbeamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF8E7" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#FFF8E7" stopOpacity="0.0" />
          </linearGradient>

          {/* Rug Texture Pattern */}
          <pattern id="woolWeave" width="10" height="10" patternUnits="userSpaceOnUse">
            <line x1="0" y1="5" x2="10" y2="5" stroke="#D3C9B8" strokeWidth="0.8" strokeOpacity="0.6" />
            <line x1="5" y1="0" x2="5" y2="10" stroke="#D3C9B8" strokeWidth="0.8" strokeOpacity="0.6" />
          </pattern>

          {/* Fluted Oak Pattern */}
          <pattern id="flutedOak" width="8" height="60" patternUnits="userSpaceOnUse">
            <rect width="4" height="60" fill="#D8C7B0" />
            <rect x="4" width="4" height="60" fill="#CBB69B" />
          </pattern>
        </defs>

        {/* 1. Room Background Walls (Warm Ivory & Soft Cream Paneling) */}
        <rect x="20" y="20" width="680" height="520" fill="var(--bg-subtle)" rx="12" />
        <rect x="20" y="20" width="680" height="520" stroke="var(--border)" strokeWidth="1" rx="12" />

        {/* Wall Accent Blocks (Terracotta & Soft Beige Plaster) */}
        <path d="M 20 20 L 320 20 L 320 440 L 20 440 Z" fill="#EFE8DB" />
        <path d="M 320 20 L 700 20 L 700 440 L 320 440 Z" fill="#F7F3EB" />

        {/* Fluted Wood Feature Wall Inset */}
        <rect x="60" y="60" width="120" height="340" fill="url(#flutedOak)" rx="4" />
        <rect x="60" y="60" width="120" height="340" stroke="#B8A58D" strokeWidth="1" rx="4" />

        {/* 2. Arched Architectural Window with Scenic View */}
        <g className="window-scene" transform="translate(420, 60)">
          {/* Outer Arch Frame */}
          <path
            d="M 0 300 L 0 110 A 110 110 0 0 1 220 110 L 220 300 Z"
            fill="#DCE8EB"
            stroke="#242622"
            strokeWidth="2.5"
          />
          {/* Distant Rolling Hills / Garden View */}
          <path d="M 0 250 Q 80 200, 220 240 L 220 300 L 0 300 Z" fill="#B2C5B0" />
          <path d="M 0 270 Q 110 230, 220 260 L 220 300 L 0 300 Z" fill="#8DA689" />
          {/* Subtle Sun / Sky */}
          <circle cx="160" cy="90" r="30" fill="#FBEED7" />

          {/* Window Mullions */}
          <line x1="110" y1="0" x2="110" y2="300" stroke="#242622" strokeWidth="2" />
          <line x1="0" y1="160" x2="220" y2="160" stroke="#242622" strokeWidth="2" />
          <line x1="0" y1="230" x2="220" y2="230" stroke="#242622" strokeWidth="1.5" />
        </g>

        {/* Sunbeam Light Stream Casting onto Floor */}
        <polygon points="420,180 640,180 580,480 280,480" fill="url(#sunbeamGrad)" />

        {/* 3. Hardwood / Microcement Floor */}
        <rect x="20" y="440" width="680" height="100" fill="#DFD6C5" rx="0 0 12 12" />
        <line x1="20" y1="440" x2="700" y2="440" stroke="#242622" strokeWidth="2" />
        {/* Floor Plank Seams */}
        <line x1="160" y1="440" x2="110" y2="540" stroke="#CFC4B1" strokeWidth="1.2" />
        <line x1="340" y1="440" x2="290" y2="540" stroke="#CFC4B1" strokeWidth="1.2" />
        <line x1="520" y1="440" x2="480" y2="540" stroke="#CFC4B1" strokeWidth="1.2" />

        {/* 4. Organic Wool Area Rug */}
        <ellipse cx="360" cy="465" rx="260" ry="50" fill="#E8DFCE" stroke="#C7BBA7" strokeWidth="1.5" />
        <ellipse cx="360" cy="465" rx="250" ry="44" fill="url(#woolWeave)" />

        {/* 5. Modernist Contemporary Sofa (Warm Sand / Beige with Terracotta Cushions) */}
        <g className="living-sofa" transform="translate(180, 310)">
          {/* Sofa Shadow */}
          <ellipse cx="160" cy="140" rx="170" ry="18" fill="#1C1D1A" fillOpacity="0.12" />

          {/* Sofa Base & Seat Cushion */}
          <rect x="10" y="70" width="290" height="55" rx="16" fill="#EDE4D4" stroke="#242622" strokeWidth="2" />
          {/* Sofa Backrest (Curved Pill-Shape) */}
          <rect x="0" y="20" width="310" height="60" rx="24" fill="#F5EEE2" stroke="#242622" strokeWidth="2" />

          {/* Left Armrest */}
          <rect x="-10" y="35" width="40" height="75" rx="18" fill="#E8DEC9" stroke="#242622" strokeWidth="2" />
          {/* Right Armrest */}
          <rect x="280" y="35" width="40" height="75" rx="18" fill="#E8DEC9" stroke="#242622" strokeWidth="2" />

          {/* Terracotta Throw Pillow 1 */}
          <rect x="40" y="38" width="48" height="42" rx="8" fill="#C87A5B" stroke="#242622" strokeWidth="1.5" transform="rotate(-8 40 38)" />
          {/* Dusty Blue Throw Pillow 2 */}
          <rect x="220" y="38" width="48" height="42" rx="8" fill="#6B8798" stroke="#242622" strokeWidth="1.5" transform="rotate(10 220 38)" />
          {/* Sage Green Round Cushion */}
          <circle cx="105" cy="65" r="18" fill="#7E927A" stroke="#242622" strokeWidth="1.5" />

          {/* Sofa Legs (Matte Black Steel) */}
          <line x1="25" y1="125" x2="20" y2="142" stroke="#242622" strokeWidth="3" strokeLinecap="round" />
          <line x1="90" y1="125" x2="88" y2="142" stroke="#242622" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="220" y1="125" x2="222" y2="142" stroke="#242622" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="285" y1="125" x2="290" y2="142" stroke="#242622" strokeWidth="3" strokeLinecap="round" />
        </g>

        {/* 6. Dusty Blue Lounge Accent Chair (Foreground Left) */}
        <g className="accent-chair" transform="translate(60, 360)">
          {/* Shadow */}
          <ellipse cx="50" cy="115" rx="45" ry="12" fill="#1C1D1A" fillOpacity="0.14" />
          {/* Chair Seat */}
          <rect x="10" y="45" width="80" height="45" rx="16" fill="#6B8798" stroke="#242622" strokeWidth="2" />
          {/* Chair Curved Backrest */}
          <path d="M 0 35 Q 50 -10, 100 35 L 90 60 Q 50 25, 10 60 Z" fill="#587485" stroke="#242622" strokeWidth="2" />
          {/* Wooden Peg Legs */}
          <line x1="20" y1="90" x2="10" y2="118" stroke="#8C6847" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="80" y1="90" x2="90" y2="118" stroke="#8C6847" strokeWidth="3.5" strokeLinecap="round" />
          {/* Small Cream Accent Pillow */}
          <circle cx="50" cy="50" r="14" fill="#F7F3EB" stroke="#242622" strokeWidth="1.2" />
        </g>

        {/* 7. Sculptural Oak & Glass Coffee Table (Center Foreground) */}
        <g className="coffee-table" transform="translate(300, 420)">
          {/* Table Shadow */}
          <ellipse cx="65" cy="55" rx="80" ry="16" fill="#1C1D1A" fillOpacity="0.15" />
          {/* Solid Oak Pill Base */}
          <ellipse cx="65" cy="45" rx="65" ry="24" fill="#D3BEA2" stroke="#242622" strokeWidth="1.8" />
          {/* Tinted Fluted Glass Top */}
          <ellipse cx="65" cy="38" rx="72" ry="26" fill="#EAE3D6" fillOpacity="0.85" stroke="#242622" strokeWidth="2" />

          {/* Decorative Ceramic Vase with Olive Stem */}
          <path d="M 55 35 Q 52 15, 62 10 Q 72 15, 69 35 Z" fill="#C87A5B" stroke="#242622" strokeWidth="1.5" />
          {/* Foliage Stem */}
          <path d="M 62 10 Q 55 -10, 48 -22 M 62 0 Q 75 -12, 80 -25" stroke="#7E927A" strokeWidth="1.8" fill="none" />
          <ellipse cx="48" cy="-22" rx="6" ry="3.5" fill="#7E927A" transform="rotate(-30 48 -22)" />
          <ellipse cx="80" cy="-25" rx="6.5" ry="3.5" fill="#7E927A" transform="rotate(35 80 -25)" />

          {/* Design Coffee Book */}
          <polygon points="85,32 115,26 125,36 95,42" fill="#FAF7F2" stroke="#242622" strokeWidth="1.2" />
          <polygon points="85,30 115,24 125,34 95,40" fill="#6B8798" stroke="#242622" strokeWidth="1" />
        </g>

        {/* 8. Potted Monstera / Fiddle Fig Botanical Corner (Right) */}
        <g className="indoor-plant" transform="translate(560, 310)">
          {/* Terracotta Fluted Planter */}
          <ellipse cx="45" cy="185" rx="35" ry="10" fill="#1C1D1A" fillOpacity="0.15" />
          <polygon points="20,110 70,110 62,180 28,180" fill="#C87A5B" stroke="#242622" strokeWidth="2" />
          <ellipse cx="45" cy="110" rx="25" ry="7" fill="#8C4D35" stroke="#242622" strokeWidth="1.5" />

          {/* Lush Green Monstera & Fiddle Leaves */}
          <g stroke="#242622" strokeWidth="1.5">
            {/* Leaf 1 */}
            <path d="M 45 110 Q 30 60, -10 30 Q 15 15, 45 75 Z" fill="#7E927A" />
            {/* Leaf 2 */}
            <path d="M 45 110 Q 60 40, 90 10 Q 95 45, 55 85 Z" fill="#657A61" />
            {/* Leaf 3 (Top Center) */}
            <path d="M 45 90 Q 40 10, 35 -30 Q 65 -15, 50 60 Z" fill="#8FA48B" />
            {/* Leaf 4 */}
            <path d="M 45 100 Q 80 70, 110 65 Q 90 95, 55 105 Z" fill="#748970" />
          </g>
        </g>

        {/* 9. Minimalist Brass Arc Floor Lamp */}
        <g className="arc-lamp">
          {/* Base */}
          <ellipse cx="140" cy="465" rx="22" ry="7" fill="#BFA37E" stroke="#242622" strokeWidth="1.5" />
          {/* Sweeping Brass Arc Pole */}
          <path
            d="M 140 465 L 140 440 Q 130 140, 260 110"
            fill="none"
            stroke="#BFA37E"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          {/* Shade */}
          <path d="M 245 110 Q 260 95, 275 110 L 285 130 L 235 130 Z" fill="#FAF7F2" stroke="#242622" strokeWidth="1.8" />
          {/* Warm Glowing Bulb & Cone */}
          <circle cx="260" cy="130" r="6" fill="#FCD385" />
          <polygon points="240,132 280,132 310,230 210,230" fill="#FCD385" fillOpacity="0.18" />
        </g>

        {/* 10. Floating Wall Shelf with Curated Objects (Upper Left) */}
        <g className="wall-shelf" transform="translate(200, 110)">
          {/* Oak Shelf */}
          <rect x="0" y="40" width="160" height="8" rx="2" fill="#CBB69B" stroke="#242622" strokeWidth="1.5" />

          {/* Minimalist Abstract Art Frame */}
          <rect x="15" y="-15" width="45" height="55" rx="3" fill="#FAF7F2" stroke="#242622" strokeWidth="1.5" />
          <circle cx="37" cy="10" r="12" fill="#C87A5B" />
          <path d="M 20 28 Q 37 15, 55 25" stroke="#6B8798" strokeWidth="1.5" fill="none" />

          {/* Ceramic Sculpture / Urn */}
          <path d="M 75 40 L 75 15 Q 85 8, 95 15 L 95 40 Z" fill="#6B8798" stroke="#242622" strokeWidth="1.4" />
          <circle cx="85" cy="8" r="4" fill="#FAF7F2" stroke="#242622" strokeWidth="1.2" />

          {/* Travertine Bookends & Books */}
          <rect x="110" y="16" width="6" height="24" fill="#C87A5B" stroke="#242622" strokeWidth="1" />
          <rect x="117" y="12" width="7" height="28" fill="#7E927A" stroke="#242622" strokeWidth="1" />
          <rect x="125" y="18" width="6" height="22" fill="#587485" stroke="#242622" strokeWidth="1" />
          <polygon points="135,40 145,15 150,40" fill="#D8C7B0" stroke="#242622" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}
