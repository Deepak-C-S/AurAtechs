import { motion } from 'framer-motion';

export default function HeroArchitecturalVector({ animated = true }) {
  const drawTransition = {
    duration: 1.8,
    ease: [0.16, 1, 0.3, 1],
  };

  return (
    <div className="hero-vector-wrapper">
      <svg
        viewBox="0 0 680 540"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="hero-vector-svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Subtle Grid Pattern for Architectural Blueprint feel */}
          <pattern id="archGrid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke="var(--ink)" strokeWidth="0.3" strokeOpacity="0.07" />
          </pattern>
          {/* Fine Stipple Dot Pattern */}
          <pattern id="archDots" width="12" height="12" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="0.6" fill="var(--ink)" fillOpacity="0.12" />
          </pattern>
          {/* Fluted Vertical Louver Pattern */}
          <pattern id="flutedLouvers" width="6" height="40" patternUnits="userSpaceOnUse">
            <line x1="1" y1="0" x2="1" y2="40" stroke="var(--ink)" strokeWidth="0.6" strokeOpacity="0.25" />
          </pattern>
        </defs>

        {/* 1. Background Grid Ground */}
        <rect x="20" y="20" width="640" height="500" fill="url(#archGrid)" rx="2" />
        <rect x="20" y="20" width="640" height="500" stroke="var(--border)" strokeWidth="0.8" rx="2" />

        {/* 2. Architectural Coordinate & Datum Lines */}
        <g className="arch-datum-lines" stroke="var(--ink)" strokeWidth="0.5" strokeOpacity="0.25" strokeDasharray="3 3">
          <line x1="20" y1="110" x2="660" y2="110" />
          <line x1="20" y1="390" x2="660" y2="390" />
          <line x1="140" y1="20" x2="140" y2="520" />
          <line x1="530" y1="20" x2="530" y2="520" />
        </g>

        {/* 3. Base Architectural Geometry Blocks (Warm Cream, Muted Taupe, Olive Accent) */}
        {/* Main Pavilion Wall Block (Soft Cream) */}
        <motion.rect
          x="120"
          y="150"
          width="410"
          height="240"
          fill="var(--bg-subtle)"
          stroke="var(--border-strong)"
          strokeWidth="0.8"
          initial={animated ? { opacity: 0, scale: 0.98 } : { opacity: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
        />

        {/* Deep Taupe Recessed Courtyard Volume */}
        <motion.rect
          x="160"
          y="180"
          width="170"
          height="210"
          fill="var(--taupe)"
          fillOpacity="0.3"
          stroke="var(--ink)"
          strokeWidth="0.6"
          strokeOpacity="0.4"
          initial={animated ? { opacity: 0 } : { opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        />

        {/* Fluted Screen Partition on Left */}
        <rect x="130" y="160" width="20" height="220" fill="url(#flutedLouvers)" />
        <rect x="130" y="160" width="20" height="220" stroke="var(--ink)" strokeWidth="0.6" strokeOpacity="0.3" />

        {/* Olive Accent Terracotta Wall Panel */}
        <motion.rect
          x="350"
          y="190"
          width="150"
          height="140"
          fill="var(--olive)"
          fillOpacity="0.22"
          stroke="var(--olive)"
          strokeWidth="0.8"
          initial={animated ? { opacity: 0, y: 10 } : { opacity: 1 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
        />

        {/* 4. Elegant Minimalist Architectural Archway */}
        <motion.path
          d="M 230 390 L 230 250 A 45 45 0 0 1 320 250 L 320 390"
          fill="var(--bg)"
          stroke="var(--ink)"
          strokeWidth="1.2"
          initial={animated ? { pathLength: 0 } : { pathLength: 1 }}
          animate={{ pathLength: 1 }}
          transition={drawTransition}
        />
        {/* Archway Depth Shadow */}
        <path
          d="M 238 390 L 238 255 A 37 37 0 0 1 312 255 L 312 390"
          fill="none"
          stroke="var(--ink)"
          strokeWidth="0.5"
          strokeOpacity="0.35"
        />

        {/* 5. Cantilevered Roof Slab with Isometric Perspective Overhang */}
        <motion.polygon
          points="80,140 550,140 590,165 120,165"
          fill="var(--taupe)"
          fillOpacity="0.45"
          stroke="var(--ink)"
          strokeWidth="1.2"
          initial={animated ? { opacity: 0, y: -15 } : { opacity: 1 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        />
        {/* Fascia Edge */}
        <line x1="80" y1="140" x2="550" y2="140" stroke="var(--ink)" strokeWidth="1.4" />
        <line x1="80" y1="148" x2="550" y2="148" stroke="var(--ink)" strokeWidth="0.6" strokeOpacity="0.5" />

        {/* 6. Floating Minimalist Interior Staircase */}
        <g className="arch-stairs" stroke="var(--ink)" strokeWidth="0.9">
          <line x1="430" y1="390" x2="490" y2="390" />
          <line x1="435" y1="365" x2="495" y2="365" />
          <line x1="440" y1="340" x2="500" y2="340" />
          <line x1="445" y1="315" x2="505" y2="315" />
          <line x1="450" y1="290" x2="510" y2="290" />
          <line x1="455" y1="265" x2="515" y2="265" />
          {/* Stair Stringer Beam */}
          <line x1="430" y1="390" x2="515" y2="265" stroke="var(--accent)" strokeWidth="1.2" />
        </g>

        {/* 7. Fine-Line Architectural Furniture */}
        {/* Modernist Lounge Chair */}
        <g className="arch-chair" transform="translate(165, 305)">
          {/* Chair Seat & Back Cushion */}
          <path
            d="M 5 50 Q 15 42, 35 45 Q 45 46, 50 35 L 55 15 Q 56 10, 50 8 Q 45 6, 42 12 L 38 32 L 10 36 Z"
            fill="var(--taupe)"
            fillOpacity="0.6"
            stroke="var(--ink)"
            strokeWidth="0.9"
          />
          {/* Tubular Steel Frame & Legs */}
          <line x1="12" y1="36" x2="8" y2="60" stroke="var(--ink)" strokeWidth="1" />
          <line x1="38" y1="35" x2="42" y2="60" stroke="var(--ink)" strokeWidth="1" />
          <line x1="48" y1="32" x2="52" y2="58" stroke="var(--ink)" strokeWidth="1" />
          {/* Ottoman */}
          <rect x="58" y="44" width="26" height="8" rx="2" fill="var(--bg-subtle)" stroke="var(--ink)" strokeWidth="0.8" />
          <line x1="62" y1="52" x2="60" y2="60" stroke="var(--ink)" strokeWidth="0.8" />
          <line x1="80" y1="52" x2="82" y2="60" stroke="var(--ink)" strokeWidth="0.8" />
        </g>

        {/* Architectural Arc Floor Lamp */}
        <motion.path
          d="M 285 390 L 285 375 C 285 270, 380 230, 390 280"
          fill="none"
          stroke="var(--ink)"
          strokeWidth="1.1"
          initial={animated ? { pathLength: 0 } : { pathLength: 1 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.6, delay: 0.4 }}
        />
        {/* Lamp Shade & Light Cone */}
        <path d="M 382 280 L 398 280 L 395 292 L 385 292 Z" fill="var(--olive)" stroke="var(--ink)" strokeWidth="0.8" />
        <polygon points="385,293 395,293 420,380 360,380" fill="var(--accent)" fillOpacity="0.08" />

        {/* 8. Botanical Olive Planter Silhouette (Tactile Nature Integration) */}
        <g className="arch-botanical" transform="translate(360, 310)">
          {/* Ceramic Cylinder Pot */}
          <rect x="8" y="55" width="24" height="25" fill="var(--taupe)" stroke="var(--ink)" strokeWidth="0.8" />
          {/* Olive Tree Fine Stems & Leaf Nodes */}
          <path
            d="M 20 55 Q 18 30, 24 10 M 20 38 Q 32 25, 38 18 M 19 44 Q 8 32, 2 25 M 22 22 Q 12 12, 10 4"
            fill="none"
            stroke="var(--olive)"
            strokeWidth="1"
          />
          {/* Minimalist Olive Leaves */}
          <ellipse cx="24" cy="10" rx="3.5" ry="2" fill="var(--olive)" fillOpacity="0.7" transform="rotate(-20 24 10)" />
          <ellipse cx="38" cy="18" rx="4" ry="2" fill="var(--olive)" fillOpacity="0.7" transform="rotate(30 38 18)" />
          <ellipse cx="2" cy="25" rx="3.5" ry="2" fill="var(--olive)" fillOpacity="0.7" transform="rotate(-40 2 25)" />
          <ellipse cx="10" cy="4" rx="3.5" ry="1.8" fill="var(--olive)" fillOpacity="0.7" transform="rotate(-15 10 4)" />
          <ellipse cx="30" cy="28" rx="3.5" ry="2" fill="var(--olive)" fillOpacity="0.7" transform="rotate(15 30 28)" />
        </g>

        {/* 9. Floor Horizon & Ground Line */}
        <line x1="80" y1="390" x2="600" y2="390" stroke="var(--ink)" strokeWidth="1.4" />
        {/* Hatch Marks on Ground */}
        <g stroke="var(--ink)" strokeWidth="0.6" strokeOpacity="0.3">
          <line x1="80" y1="390" x2="70" y2="402" />
          <line x1="120" y1="390" x2="110" y2="402" />
          <line x1="160" y1="390" x2="150" y2="402" />
          <line x1="200" y1="390" x2="190" y2="402" />
          <line x1="240" y1="390" x2="230" y2="402" />
          <line x1="280" y1="390" x2="270" y2="402" />
          <line x1="320" y1="390" x2="310" y2="402" />
          <line x1="360" y1="390" x2="350" y2="402" />
          <line x1="400" y1="390" x2="390" y2="402" />
          <line x1="440" y1="390" x2="430" y2="402" />
          <line x1="480" y1="390" x2="470" y2="402" />
          <line x1="520" y1="390" x2="510" y2="402" />
          <line x1="560" y1="390" x2="550" y2="402" />
          <line x1="600" y1="390" x2="590" y2="402" />
        </g>

        {/* 10. Architectural Dimension Strings & Annotations */}
        {/* Top Horizontal Dimension */}
        <g className="arch-dim" stroke="var(--ink)" strokeWidth="0.6" strokeOpacity="0.6">
          <line x1="120" y1="75" x2="530" y2="75" />
          <line x1="120" y1="70" x2="120" y2="80" strokeWidth="1" />
          <line x1="530" y1="70" x2="530" y2="80" strokeWidth="1" />
          <line x1="117" y1="78" x2="123" y2="72" strokeWidth="1" />
          <line x1="527" y1="78" x2="533" y2="72" strokeWidth="1" />
        </g>
        <text
          x="325"
          y="68"
          fill="var(--ink)"
          fontSize="9"
          fontFamily="var(--font-sans)"
          fontWeight="600"
          letterSpacing="0.16em"
          textAnchor="middle"
          fillOpacity="0.75"
        >
          AXIAL SPAN 14.80 M
        </text>

        {/* Right Vertical Level Markers */}
        <g className="arch-levels" transform="translate(560, 0)">
          {/* Roof Level */}
          <path d="M 0 140 L 12 140 L 6 132 Z" fill="var(--ink)" fillOpacity="0.7" />
          <line x1="0" y1="140" x2="55" y2="140" stroke="var(--ink)" strokeWidth="0.6" strokeOpacity="0.4" />
          <text x="18" y="137" fill="var(--ink)" fontSize="8" fontFamily="var(--font-sans)" fontWeight="600" letterSpacing="0.08em">
            +6.40 M [ROOF]
          </text>

          {/* First Floor Datum */}
          <path d="M 0 265 L 12 265 L 6 257 Z" fill="var(--ink)" fillOpacity="0.7" />
          <line x1="0" y1="265" x2="55" y2="265" stroke="var(--ink)" strokeWidth="0.6" strokeOpacity="0.4" />
          <text x="18" y="262" fill="var(--ink)" fontSize="8" fontFamily="var(--font-sans)" fontWeight="600" letterSpacing="0.08em">
            +3.20 M [MEZZANINE]
          </text>

          {/* Ground Datum */}
          <path d="M 0 390 L 12 390 L 6 382 Z" fill="var(--ink)" fillOpacity="0.7" />
          <line x1="0" y1="390" x2="55" y2="390" stroke="var(--ink)" strokeWidth="0.6" strokeOpacity="0.4" />
          <text x="18" y="387" fill="var(--ink)" fontSize="8" fontFamily="var(--font-sans)" fontWeight="600" letterSpacing="0.08em">
            ±0.00 M [FINISH FL.]
          </text>
        </g>

        {/* Bottom Left Architectural Stamp / North Arrow */}
        <g transform="translate(45, 450)">
          {/* Compass Rose */}
          <circle cx="20" cy="20" r="14" fill="none" stroke="var(--ink)" strokeWidth="0.6" strokeOpacity="0.5" />
          <polygon points="20,8 24,20 20,18" fill="var(--ink)" fillOpacity="0.8" />
          <polygon points="20,32 16,20 20,22" fill="var(--ink)" fillOpacity="0.3" />
          <text x="20" y="5" fill="var(--ink)" fontSize="7" fontFamily="var(--font-sans)" fontWeight="700" textAnchor="middle">
            N
          </text>
          {/* Studio Meta Tag */}
          <text x="45" y="18" fill="var(--ink)" fontSize="8" fontFamily="var(--font-sans)" fontWeight="700" letterSpacing="0.18em">
            AURATECTS STUDIO ETUDE
          </text>
          <text x="45" y="28" fill="var(--ink-muted)" fontSize="7" fontFamily="var(--font-sans)" letterSpacing="0.1em">
            FIG. 01 — SPATIAL SECTION &amp; AXONOMETRIC
          </text>
        </g>
      </svg>
    </div>
  );
}
