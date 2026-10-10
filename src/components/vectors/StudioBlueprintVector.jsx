import React from 'react';

export default function StudioBlueprintVector() {
  return (
    <svg viewBox="0 0 500 420" fill="none" xmlns="http://www.w3.org/2000/svg" className="studio-blueprint-svg">
      {/* Outer Technical Frame */}
      <rect x="15" y="15" width="470" height="390" fill="var(--bg-subtle)" stroke="var(--border)" strokeWidth="0.8" />
      <rect x="22" y="22" width="456" height="376" stroke="var(--ink)" strokeWidth="0.4" strokeOpacity="0.3" strokeDasharray="3 3" />

      {/* Grid Reference Lines */}
      <line x1="22" y1="120" x2="478" y2="120" stroke="var(--ink)" strokeWidth="0.4" strokeOpacity="0.2" strokeDasharray="2 2" />
      <line x1="22" y1="280" x2="478" y2="280" stroke="var(--ink)" strokeWidth="0.4" strokeOpacity="0.2" strokeDasharray="2 2" />
      <line x1="140" y1="22" x2="140" y2="398" stroke="var(--ink)" strokeWidth="0.4" strokeOpacity="0.2" strokeDasharray="2 2" />
      <line x1="360" y1="22" x2="360" y2="398" stroke="var(--ink)" strokeWidth="0.4" strokeOpacity="0.2" strokeDasharray="2 2" />

      {/* Section Cut of Contemporary Architecture */}
      {/* Ground Mass */}
      <line x1="40" y1="300" x2="460" y2="300" stroke="var(--ink)" strokeWidth="1.6" />
      <polygon points="40,300 460,300 460,340 40,340" fill="var(--taupe)" fillOpacity="0.25" stroke="var(--ink)" strokeWidth="0.6" strokeDasharray="2 2" />

      {/* Concrete Retaining Core */}
      <rect x="80" y="160" width="300" height="140" fill="var(--bg)" stroke="var(--ink)" strokeWidth="1.2" />

      {/* Double Height Gallery Void */}
      <rect x="110" y="180" width="130" height="120" fill="var(--olive)" fillOpacity="0.15" stroke="var(--ink)" strokeWidth="0.8" strokeDasharray="3 2" />
      <text x="175" y="245" fill="var(--ink)" fontSize="8" fontFamily="var(--font-sans)" fontWeight="600" textAnchor="middle" letterSpacing="0.1em">
        ATELIER VOID
      </text>

      {/* Cantilevered Upper Studio Wing */}
      <polygon points="60,110 420,110 400,160 80,160" fill="var(--taupe)" fillOpacity="0.45" stroke="var(--ink)" strokeWidth="1.4" />

      {/* Skylight Light Shaft Angles */}
      <g stroke="var(--olive)" strokeWidth="0.6" strokeDasharray="3 3">
        <line x1="175" y1="110" x2="140" y2="300" />
        <line x1="215" y1="110" x2="250" y2="300" />
      </g>
      <polygon points="175,110 215,110 250,300 140,300" fill="var(--accent)" fillOpacity="0.08" />

      {/* Vertical Louver Screen Detail */}
      <g stroke="var(--ink)" strokeWidth="0.6" strokeOpacity="0.5">
        <line x1="260" y1="180" x2="260" y2="300" />
        <line x1="280" y1="180" x2="280" y2="300" />
        <line x1="300" y1="180" x2="300" y2="300" />
        <line x1="320" y1="180" x2="320" y2="300" />
        <line x1="340" y1="180" x2="340" y2="300" />
        <line x1="360" y1="180" x2="360" y2="300" />
      </g>

      {/* Dimension Line Strings */}
      <g stroke="var(--ink)" strokeWidth="0.6" strokeOpacity="0.6">
        <line x1="80" y1="65" x2="380" y2="65" />
        <line x1="80" y1="60" x2="80" y2="70" strokeWidth="1" />
        <line x1="380" y1="60" x2="380" y2="70" strokeWidth="1" />
        <line x1="77" y1="68" x2="83" y2="62" strokeWidth="1" />
        <line x1="377" y1="68" x2="383" y2="62" strokeWidth="1" />
      </g>
      <text x="230" y="58" fill="var(--ink)" fontSize="8" fontFamily="var(--font-sans)" fontWeight="600" textAnchor="middle" letterSpacing="0.12em">
        CLEAR BAY SPAN 12.00 M
      </text>

      {/* Level Symbols on Left */}
      <g className="arch-levels" transform="translate(30, 0)">
        <path d="M 0 110 L 10 110 L 5 103 Z" fill="var(--ink)" />
        <text x="14" y="107" fill="var(--ink)" fontSize="7" fontFamily="var(--font-sans)" fontWeight="600">
          +7.20 M
        </text>

        <path d="M 0 160 L 10 160 L 5 153 Z" fill="var(--ink)" />
        <text x="14" y="157" fill="var(--ink)" fontSize="7" fontFamily="var(--font-sans)" fontWeight="600">
          +3.60 M
        </text>

        <path d="M 0 300 L 10 300 L 5 293 Z" fill="var(--ink)" />
        <text x="14" y="297" fill="var(--ink)" fontSize="7" fontFamily="var(--font-sans)" fontWeight="600">
          ±0.00 M
        </text>
      </g>

      {/* Title Block on Bottom Right */}
      <g transform="translate(260, 325)">
        <rect x="0" y="0" width="190" height="50" fill="var(--bg)" stroke="var(--ink)" strokeWidth="0.8" />
        <text x="10" y="16" fill="var(--ink)" fontSize="8" fontFamily="var(--font-sans)" fontWeight="700" letterSpacing="0.15em">
          AURATECTS STUDIO SECTION
        </text>
        <text x="10" y="28" fill="var(--ink-secondary)" fontSize="7" fontFamily="var(--font-sans)" letterSpacing="0.08em">
          PROJECT: ETUDE ARCHIVE / AR. AMULYA K.
        </text>
        <text x="10" y="40" fill="var(--olive)" fontSize="7" fontFamily="var(--font-sans)" fontWeight="600" letterSpacing="0.08em">
          SCALE 1:50 · DWG NO. A-104
        </text>
      </g>
    </svg>
  );
}
