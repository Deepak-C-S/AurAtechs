import React from 'react';

export function SkylinePenthouseVector() {
  return (
    <svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg" className="proj-vector-svg">
      {/* Background Frame */}
      <rect x="10" y="10" width="380" height="230" fill="var(--bg-subtle)" stroke="var(--border)" strokeWidth="0.8" />
      
      {/* Grid Lines */}
      <line x1="10" y1="80" x2="390" y2="80" stroke="var(--ink)" strokeWidth="0.4" strokeOpacity="0.2" strokeDasharray="3 3" />
      <line x1="10" y1="180" x2="390" y2="180" stroke="var(--ink)" strokeWidth="0.4" strokeOpacity="0.2" strokeDasharray="3 3" />
      <line x1="130" y1="10" x2="130" y2="240" stroke="var(--ink)" strokeWidth="0.4" strokeOpacity="0.2" strokeDasharray="3 3" />
      <line x1="270" y1="10" x2="270" y2="240" stroke="var(--ink)" strokeWidth="0.4" strokeOpacity="0.2" strokeDasharray="3 3" />

      {/* Main Penthouse Loft Outline */}
      <rect x="60" y="50" width="280" height="140" fill="var(--bg)" stroke="var(--ink)" strokeWidth="1.2" />
      
      {/* Terrace Zone */}
      <rect x="60" y="50" width="90" height="140" fill="var(--taupe)" fillOpacity="0.25" stroke="var(--ink)" strokeWidth="0.8" strokeDasharray="4 2" />
      <text x="105" y="125" fill="var(--ink-muted)" fontSize="8" fontFamily="var(--font-sans)" fontWeight="600" textAnchor="middle" letterSpacing="0.1em">TERRACE</text>

      {/* Double-Height Living Room */}
      <rect x="150" y="50" width="120" height="140" fill="var(--bg-subtle)" stroke="var(--ink)" strokeWidth="0.8" />
      <text x="210" y="125" fill="var(--ink)" fontSize="8" fontFamily="var(--font-sans)" fontWeight="600" textAnchor="middle" letterSpacing="0.1em">LIVING VOID</text>

      {/* Fluted Travertine Wall */}
      <line x1="270" y1="50" x2="270" y2="190" stroke="var(--accent)" strokeWidth="3" />

      {/* Master Suite / Private Realm */}
      <rect x="270" y="50" width="70" height="140" fill="var(--olive)" fillOpacity="0.18" stroke="var(--ink)" strokeWidth="0.8" />

      {/* Architectural Glazing & Mullions */}
      <g stroke="var(--ink)" strokeWidth="0.6">
        <line x1="60" y1="50" x2="340" y2="50" strokeWidth="1.5" />
        <line x1="100" y1="46" x2="100" y2="54" />
        <line x1="140" y1="46" x2="140" y2="54" />
        <line x1="180" y1="46" x2="180" y2="54" />
        <line x1="220" y1="46" x2="220" y2="54" />
        <line x1="260" y1="46" x2="260" y2="54" />
        <line x1="300" y1="46" x2="300" y2="54" />
      </g>

      {/* Furniture Layout Lines */}
      <rect x="180" y="140" width="60" height="30" rx="3" fill="var(--taupe)" fillOpacity="0.5" stroke="var(--ink)" strokeWidth="0.8" />
      <circle cx="210" cy="155" r="7" fill="var(--bg)" stroke="var(--ink)" strokeWidth="0.6" />

      {/* Dimension Label */}
      <text x="345" y="215" fill="var(--ink-muted)" fontSize="7" fontFamily="var(--font-sans)" letterSpacing="0.08em">[ LEVEL 32 · BENGALURU ]</text>
    </svg>
  );
}

export function LuminaVillaVector() {
  return (
    <svg viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="proj-vector-svg">
      <rect x="10" y="10" width="280" height="380" fill="var(--bg-subtle)" stroke="var(--border)" strokeWidth="0.8" />

      {/* Ground Line */}
      <line x1="20" y1="320" x2="280" y2="320" stroke="var(--ink)" strokeWidth="1.4" />

      {/* Monolithic Concrete Base Block */}
      <rect x="40" y="180" width="220" height="140" fill="var(--bg)" stroke="var(--ink)" strokeWidth="1.2" />

      {/* Cantilever Upper Timber Box */}
      <polygon points="30,120 250,120 260,190 40,190" fill="var(--taupe)" fillOpacity="0.4" stroke="var(--ink)" strokeWidth="1.2" />

      {/* Vertical Louvers (Screen Wall) */}
      <g stroke="var(--ink)" strokeWidth="0.7" strokeOpacity="0.7">
        <line x1="50" y1="120" x2="50" y2="190" />
        <line x1="65" y1="120" x2="65" y2="190" />
        <line x1="80" y1="120" x2="80" y2="190" />
        <line x1="95" y1="120" x2="95" y2="190" />
        <line x1="110" y1="120" x2="110" y2="190" />
        <line x1="125" y1="120" x2="125" y2="190" />
      </g>

      {/* Deep Ground Floor Portal */}
      <rect x="150" y="210" width="90" height="110" fill="var(--olive)" fillOpacity="0.2" stroke="var(--ink)" strokeWidth="1" />
      <line x1="195" y1="210" x2="195" y2="320" stroke="var(--ink)" strokeWidth="0.6" />

      {/* Canopy Roof Slab */}
      <line x1="20" y1="115" x2="270" y2="115" stroke="var(--ink)" strokeWidth="2.5" />

      {/* Dimension Line & Tag */}
      <line x1="270" y1="115" x2="270" y2="320" stroke="var(--accent)" strokeWidth="0.6" strokeDasharray="3 3" />
      <text x="150" y="360" fill="var(--ink)" fontSize="8" fontFamily="var(--font-sans)" fontWeight="600" textAnchor="middle" letterSpacing="0.14em">
        FIG. 02 — VILLA ELEVATION
      </text>
    </svg>
  );
}

export function AmberLoungeVector() {
  return (
    <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="proj-vector-svg">
      <rect x="10" y="10" width="280" height="280" fill="var(--bg-subtle)" stroke="var(--border)" strokeWidth="0.8" />

      {/* Curved Bar Counter Geometry */}
      <path d="M 50 180 A 100 100 0 0 1 250 180" fill="none" stroke="var(--ink)" strokeWidth="1.6" />
      <path d="M 65 180 A 85 85 0 0 1 235 180" fill="var(--taupe)" fillOpacity="0.4" stroke="var(--accent)" strokeWidth="1" />

      {/* Bar Stools */}
      <g fill="var(--bg)" stroke="var(--ink)" strokeWidth="0.8">
        <circle cx="85" cy="140" r="7" />
        <circle cx="120" cy="115" r="7" />
        <circle cx="150" cy="105" r="7" />
        <circle cx="180" cy="115" r="7" />
        <circle cx="215" cy="140" r="7" />
      </g>

      {/* Ambient Lighting Rays */}
      <g stroke="var(--olive)" strokeWidth="0.5" strokeOpacity="0.4" strokeDasharray="2 2">
        <line x1="150" y1="40" x2="150" y2="100" />
        <line x1="150" y1="40" x2="110" y2="110" />
        <line x1="150" y1="40" x2="190" y2="110" />
      </g>
      <circle cx="150" cy="40" r="4" fill="var(--olive)" />

      {/* Fluted Back Wall */}
      <rect x="40" y="210" width="220" height="40" fill="var(--bg)" stroke="var(--ink)" strokeWidth="1" />
      <g stroke="var(--ink)" strokeWidth="0.5" strokeOpacity="0.3">
        <line x1="60" y1="210" x2="60" y2="250" />
        <line x1="80" y1="210" x2="80" y2="250" />
        <line x1="100" y1="210" x2="100" y2="250" />
        <line x1="120" y1="210" x2="120" y2="250" />
        <line x1="140" y1="210" x2="140" y2="250" />
        <line x1="160" y1="210" x2="160" y2="250" />
        <line x1="180" y1="210" x2="180" y2="250" />
        <line x1="200" y1="210" x2="200" y2="250" />
        <line x1="220" y1="210" x2="220" y2="250" />
        <line x1="240" y1="210" x2="240" y2="250" />
      </g>

      <text x="150" y="275" fill="var(--ink)" fontSize="8" fontFamily="var(--font-sans)" fontWeight="600" textAnchor="middle" letterSpacing="0.14em">
        FIG. 03 — CURVED LOUNGE ATELIER
      </text>
    </svg>
  );
}

export function UrbanOasisVector() {
  return (
    <svg viewBox="0 0 400 225" fill="none" xmlns="http://www.w3.org/2000/svg" className="proj-vector-svg">
      <rect x="10" y="10" width="380" height="205" fill="var(--bg-subtle)" stroke="var(--border)" strokeWidth="0.8" />

      {/* Structural Column Grid */}
      <g stroke="var(--ink)" strokeWidth="0.4" strokeOpacity="0.25" strokeDasharray="4 4">
        <line x1="50" y1="10" x2="50" y2="215" />
        <line x1="150" y1="10" x2="150" y2="215" />
        <line x1="250" y1="10" x2="250" y2="215" />
        <line x1="350" y1="10" x2="350" y2="215" />
        <line x1="10" y1="60" x2="390" y2="60" />
        <line x1="10" y1="140" x2="390" y2="140" />
      </g>

      {/* Steel Column Markers */}
      <rect x="46" y="56" width="8" height="8" fill="var(--ink)" />
      <rect x="146" y="56" width="8" height="8" fill="var(--ink)" />
      <rect x="246" y="56" width="8" height="8" fill="var(--ink)" />
      <rect x="346" y="56" width="8" height="8" fill="var(--ink)" />
      <rect x="46" y="136" width="8" height="8" fill="var(--ink)" />
      <rect x="146" y="136" width="8" height="8" fill="var(--ink)" />
      <rect x="246" y="136" width="8" height="8" fill="var(--ink)" />
      <rect x="346" y="136" width="8" height="8" fill="var(--ink)" />

      {/* Central Biophilic Tree Courtyard */}
      <circle cx="200" cy="100" r="32" fill="var(--olive)" fillOpacity="0.25" stroke="var(--olive)" strokeWidth="1" strokeDasharray="3 2" />
      <circle cx="200" cy="100" r="14" fill="var(--taupe)" fillOpacity="0.4" stroke="var(--ink)" strokeWidth="0.8" />
      <text x="200" y="103" fill="var(--ink)" fontSize="6" fontFamily="var(--font-sans)" fontWeight="700" textAnchor="middle">COURT</text>

      {/* Modular Workbench Pods */}
      <rect x="65" y="80" width="65" height="35" rx="2" fill="var(--bg)" stroke="var(--ink)" strokeWidth="0.9" />
      <rect x="270" y="80" width="65" height="35" rx="2" fill="var(--bg)" stroke="var(--ink)" strokeWidth="0.9" />

      {/* Acoustic Meeting Pod */}
      <rect x="65" y="150" width="100" height="40" rx="3" fill="var(--taupe)" fillOpacity="0.3" stroke="var(--accent)" strokeWidth="1" />
      <text x="115" y="174" fill="var(--ink)" fontSize="7" fontFamily="var(--font-sans)" fontWeight="600" textAnchor="middle">FOCUS POD</text>

      <text x="310" y="195" fill="var(--ink-muted)" fontSize="7" fontFamily="var(--font-sans)" letterSpacing="0.08em">[ 8,500 SQ.FT WORKPLACE ]</text>
    </svg>
  );
}

export function CoastalPavilionVector() {
  return (
    <svg viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="proj-vector-svg">
      <rect x="10" y="10" width="280" height="380" fill="var(--bg-subtle)" stroke="var(--border)" strokeWidth="0.8" />

      {/* Ocean Horizon Line */}
      <line x1="20" y1="280" x2="280" y2="280" stroke="var(--olive)" strokeWidth="0.8" strokeDasharray="4 4" strokeOpacity="0.6" />

      {/* Sloping Cliff Base */}
      <polygon points="20,330 180,310 280,350 280,370 20,370" fill="var(--taupe)" fillOpacity="0.35" stroke="var(--ink)" strokeWidth="1" />

      {/* Laterite Pavilion Structure */}
      <rect x="60" y="170" width="170" height="140" fill="var(--bg)" stroke="var(--ink)" strokeWidth="1.2" />

      {/* Louvered Teak Shutters */}
      <g stroke="var(--accent)" strokeWidth="0.8">
        <line x1="75" y1="190" x2="120" y2="190" />
        <line x1="75" y1="210" x2="120" y2="210" />
        <line x1="75" y1="230" x2="120" y2="230" />
        <line x1="75" y1="250" x2="120" y2="250" />
        <line x1="75" y1="270" x2="120" y2="270" />
      </g>

      {/* Open Veranda Facing Sea */}
      <rect x="135" y="190" width="80" height="120" fill="var(--olive)" fillOpacity="0.15" stroke="var(--ink)" strokeWidth="0.8" />

      {/* Oversized Teak Roof Overhang */}
      <polygon points="40,160 250,160 260,172 30,172" fill="var(--taupe)" fillOpacity="0.6" stroke="var(--ink)" strokeWidth="1.4" />

      <text x="150" y="360" fill="var(--ink)" fontSize="8" fontFamily="var(--font-sans)" fontWeight="600" textAnchor="middle" letterSpacing="0.14em">
        FIG. 05 — COASTAL PAVILION SECTION
      </text>
    </svg>
  );
}

export function CourtyardHouseVector() {
  return (
    <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="proj-vector-svg">
      <rect x="10" y="10" width="280" height="280" fill="var(--bg-subtle)" stroke="var(--border)" strokeWidth="0.8" />

      {/* Outer Envelope Wall */}
      <rect x="40" y="40" width="220" height="220" fill="var(--bg)" stroke="var(--ink)" strokeWidth="1.4" />

      {/* Peripheral Veranda Corridor */}
      <rect x="65" y="65" width="170" height="170" fill="var(--bg-subtle)" stroke="var(--ink)" strokeWidth="0.8" strokeDasharray="3 3" />

      {/* Central Sacred Water Court */}
      <rect x="105" y="105" width="90" height="90" fill="var(--olive)" fillOpacity="0.25" stroke="var(--ink)" strokeWidth="1.2" />
      {/* Water Ripple Circles */}
      <circle cx="150" cy="150" r="28" fill="none" stroke="var(--accent)" strokeWidth="0.6" />
      <circle cx="150" cy="150" r="15" fill="none" stroke="var(--accent)" strokeWidth="0.6" />
      <text x="150" y="153" fill="var(--ink)" fontSize="7" fontFamily="var(--font-sans)" fontWeight="700" textAnchor="middle">WATER COURT</text>

      {/* Veranda Column Markers */}
      <circle cx="65" cy="65" r="3" fill="var(--ink)" />
      <circle cx="150" cy="65" r="3" fill="var(--ink)" />
      <circle cx="235" cy="65" r="3" fill="var(--ink)" />
      <circle cx="65" cy="235" r="3" fill="var(--ink)" />
      <circle cx="150" cy="235" r="3" fill="var(--ink)" />
      <circle cx="235" cy="235" r="3" fill="var(--ink)" />

      <text x="150" y="278" fill="var(--ink)" fontSize="8" fontFamily="var(--font-sans)" fontWeight="600" textAnchor="middle" letterSpacing="0.14em">
        FIG. 06 — COURTYARD HOUSE PLAN
      </text>
    </svg>
  );
}

export function ApexHubVector() {
  return (
    <svg viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg" className="proj-vector-svg">
      <rect x="10" y="10" width="380" height="230" fill="var(--bg-subtle)" stroke="var(--border)" strokeWidth="0.8" />

      {/* PEB Steel Truss Portal Frame */}
      <g stroke="var(--ink)" strokeWidth="1.2">
        {/* Steel Columns */}
        <line x1="60" y1="200" x2="60" y2="80" strokeWidth="2" />
        <line x1="340" y1="200" x2="340" y2="80" strokeWidth="2" />
        {/* Pitched Roof Trusses */}
        <line x1="60" y1="80" x2="200" y2="40" strokeWidth="2" />
        <line x1="340" y1="80" x2="200" y2="40" strokeWidth="2" />
        {/* Bottom Chords */}
        <line x1="60" y1="95" x2="200" y2="60" strokeWidth="1" strokeOpacity="0.7" />
        <line x1="340" y1="95" x2="200" y2="60" strokeWidth="1" strokeOpacity="0.7" />
        {/* Truss Web Diagonals */}
        <line x1="90" y1="88" x2="90" y2="71" strokeWidth="0.8" />
        <line x1="120" y1="83" x2="120" y2="63" strokeWidth="0.8" />
        <line x1="150" y1="75" x2="150" y2="54" strokeWidth="0.8" />
        <line x1="180" y1="67" x2="180" y2="46" strokeWidth="0.8" />
        <line x1="220" y1="46" x2="220" y2="67" strokeWidth="0.8" />
        <line x1="250" y1="54" x2="250" y2="75" strokeWidth="0.8" />
        <line x1="280" y1="63" x2="280" y2="83" strokeWidth="0.8" />
        <line x1="310" y1="71" x2="310" y2="88" strokeWidth="0.8" />
      </g>

      {/* Structural Curtain Glazing Grid */}
      <g stroke="var(--accent)" strokeWidth="0.6" strokeOpacity="0.5">
        <line x1="60" y1="120" x2="340" y2="120" />
        <line x1="60" y1="160" x2="340" y2="160" />
        <line x1="130" y1="80" x2="130" y2="200" />
        <line x1="200" y1="40" x2="200" y2="200" />
        <line x1="270" y1="80" x2="270" y2="200" />
      </g>

      {/* Ground Foundation Pads */}
      <rect x="45" y="200" width="30" height="10" fill="var(--taupe)" stroke="var(--ink)" strokeWidth="1" />
      <rect x="325" y="200" width="30" height="10" fill="var(--taupe)" stroke="var(--ink)" strokeWidth="1" />
      <line x1="30" y1="210" x2="370" y2="210" stroke="var(--ink)" strokeWidth="1.2" />

      <text x="200" y="224" fill="var(--ink)" fontSize="8" fontFamily="var(--font-sans)" fontWeight="600" textAnchor="middle" letterSpacing="0.14em">
        FIG. 07 — PEB HIGH-TENSILE PORTAL FRAME
      </text>
    </svg>
  );
}

export function VayuMonolithVector() {
  return (
    <svg viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="proj-vector-svg">
      <rect x="10" y="10" width="280" height="380" fill="var(--bg-subtle)" stroke="var(--border)" strokeWidth="0.8" />

      {/* Topographic Contour Lines */}
      <g stroke="var(--ink)" strokeWidth="0.5" strokeOpacity="0.25" strokeDasharray="3 3">
        <path d="M 20 280 Q 150 250, 280 300" />
        <path d="M 20 310 Q 150 280, 280 330" />
        <path d="M 20 340 Q 150 310, 280 360" />
      </g>

      {/* Black Granite Monolithic Wall Base */}
      <polygon points="50,220 220,190 240,320 40,330" fill="var(--taupe)" fillOpacity="0.45" stroke="var(--ink)" strokeWidth="1.3" />

      {/* Cantilever Timber Roof Trusses */}
      <polygon points="30,140 260,110 270,122 20,152" fill="var(--olive)" fillOpacity="0.3" stroke="var(--ink)" strokeWidth="1.4" />

      {/* Deep Shadow Glazing Recess */}
      <rect x="80" y="155" width="130" height="70" fill="var(--bg)" stroke="var(--ink)" strokeWidth="1" />
      <line x1="120" y1="155" x2="120" y2="225" stroke="var(--ink)" strokeWidth="0.6" />
      <line x1="160" y1="155" x2="160" y2="225" stroke="var(--ink)" strokeWidth="0.6" />

      <text x="150" y="365" fill="var(--ink)" fontSize="8" fontFamily="var(--font-sans)" fontWeight="600" textAnchor="middle" letterSpacing="0.14em">
        FIG. 08 — HILLSIDE MONOLITH SECTION
      </text>
    </svg>
  );
}
