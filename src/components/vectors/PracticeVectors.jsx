import React from 'react';

export function HospitalityPracticeVector() {
  return (
    <svg viewBox="0 0 360 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="practice-vector-svg">
      <rect x="5" y="5" width="350" height="210" fill="var(--bg-subtle)" stroke="var(--border)" strokeWidth="0.8" />
      {/* Arched Portico */}
      <path d="M 50 180 L 50 80 A 35 35 0 0 1 120 80 L 120 180" fill="var(--bg)" stroke="var(--ink)" strokeWidth="1.2" />
      <path d="M 140 180 L 140 80 A 35 35 0 0 1 210 80 L 210 180" fill="var(--taupe)" fillOpacity="0.3" stroke="var(--ink)" strokeWidth="1.2" />
      <path d="M 230 180 L 230 80 A 35 35 0 0 1 300 80 L 300 180" fill="var(--olive)" fillOpacity="0.2" stroke="var(--ink)" strokeWidth="1.2" />
      {/* Entablature Line */}
      <line x1="35" y1="45" x2="315" y2="45" stroke="var(--ink)" strokeWidth="1.5" />
      <line x1="35" y1="52" x2="315" y2="52" stroke="var(--ink)" strokeWidth="0.6" strokeOpacity="0.5" />
      {/* Lounge Lighting Pendants */}
      <circle cx="85" cy="115" r="5" fill="var(--accent)" />
      <line x1="85" y1="52" x2="85" y2="110" stroke="var(--ink)" strokeWidth="0.6" />
      <circle cx="175" cy="115" r="5" fill="var(--accent)" />
      <line x1="175" y1="52" x2="175" y2="110" stroke="var(--ink)" strokeWidth="0.6" />
      <circle cx="265" cy="115" r="5" fill="var(--accent)" />
      <line x1="265" y1="52" x2="265" y2="110" stroke="var(--ink)" strokeWidth="0.6" />
      <line x1="20" y1="180" x2="330" y2="180" stroke="var(--ink)" strokeWidth="1.2" />
      <text x="180" y="200" fill="var(--ink)" fontSize="8" fontFamily="var(--font-sans)" fontWeight="600" textAnchor="middle" letterSpacing="0.12em">
        SECTOR 01 — HOSPITALITY COLONNADE &amp; LOUNGE
      </text>
    </svg>
  );
}

export function CommercialPracticeVector() {
  return (
    <svg viewBox="0 0 360 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="practice-vector-svg">
      <rect x="5" y="5" width="350" height="210" fill="var(--bg-subtle)" stroke="var(--border)" strokeWidth="0.8" />
      {/* Office Curtain Wall Elevation */}
      <g stroke="var(--ink)" strokeWidth="0.9">
        <rect x="50" y="40" width="260" height="130" fill="var(--bg)" />
        {/* Floor slabs */}
        <line x1="50" y1="80" x2="310" y2="80" strokeWidth="1.4" />
        <line x1="50" y1="125" x2="310" y2="125" strokeWidth="1.4" />
        {/* Vertical Mullions */}
        <line x1="100" y1="40" x2="100" y2="170" strokeOpacity="0.4" />
        <line x1="150" y1="40" x2="150" y2="170" strokeOpacity="0.4" />
        <line x1="200" y1="40" x2="200" y2="170" strokeOpacity="0.4" />
        <line x1="250" y1="40" x2="250" y2="170" strokeOpacity="0.4" />
      </g>
      {/* Biophilic Greenery Blocks */}
      <rect x="105" y="86" width="40" height="34" fill="var(--olive)" fillOpacity="0.25" stroke="var(--olive)" strokeWidth="0.8" />
      <rect x="205" y="131" width="40" height="34" fill="var(--taupe)" fillOpacity="0.4" stroke="var(--accent)" strokeWidth="0.8" />
      <line x1="25" y1="170" x2="335" y2="170" stroke="var(--ink)" strokeWidth="1.2" />
      <text x="180" y="200" fill="var(--ink)" fontSize="8" fontFamily="var(--font-sans)" fontWeight="600" textAnchor="middle" letterSpacing="0.12em">
        SECTOR 02 — COMMERCIAL WORKPLACE ATRIUM
      </text>
    </svg>
  );
}

export function ResidentialPracticeVector() {
  return (
    <svg viewBox="0 0 360 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="practice-vector-svg">
      <rect x="5" y="5" width="350" height="210" fill="var(--bg-subtle)" stroke="var(--border)" strokeWidth="0.8" />
      {/* Warm Residential Living Pavilion Isometric */}
      <polygon points="60,110 180,50 300,110 180,170" fill="var(--bg)" stroke="var(--ink)" strokeWidth="1.2" />
      {/* Living Zone Inset */}
      <polygon points="95,110 180,68 265,110 180,152" fill="var(--taupe)" fillOpacity="0.3" stroke="var(--accent)" strokeWidth="0.8" />
      {/* Minimalist Linear Fireplace / Hearth */}
      <rect x="160" y="95" width="40" height="8" rx="2" fill="var(--olive)" stroke="var(--ink)" strokeWidth="0.8" />
      {/* Lounge Seating Perimeter */}
      <path d="M 120 120 L 160 140 L 220 110" fill="none" stroke="var(--ink)" strokeWidth="1.2" />
      <text x="180" y="200" fill="var(--ink)" fontSize="8" fontFamily="var(--font-sans)" fontWeight="600" textAnchor="middle" letterSpacing="0.12em">
        SECTOR 03 — RESIDENTIAL SANCTUARY AXONOMETRIC
      </text>
    </svg>
  );
}

export function InstitutionalPracticeVector() {
  return (
    <svg viewBox="0 0 360 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="practice-vector-svg">
      <rect x="5" y="5" width="350" height="210" fill="var(--bg-subtle)" stroke="var(--border)" strokeWidth="0.8" />
      {/* Grand Civic Steps & Triangular Pediment */}
      <polygon points="180,30 60,80 300,80" fill="var(--taupe)" fillOpacity="0.35" stroke="var(--ink)" strokeWidth="1.2" />
      {/* Colonnade Pillars */}
      <g stroke="var(--ink)" strokeWidth="1">
        <rect x="80" y="80" width="16" height="80" fill="var(--bg)" />
        <rect x="120" y="80" width="16" height="80" fill="var(--bg)" />
        <rect x="160" y="80" width="16" height="80" fill="var(--bg)" />
        <rect x="200" y="80" width="16" height="80" fill="var(--bg)" />
        <rect x="240" y="80" width="16" height="80" fill="var(--bg)" />
      </g>
      {/* Steps */}
      <g stroke="var(--ink)" strokeWidth="0.8">
        <line x1="50" y1="160" x2="290" y2="160" />
        <line x1="45" y1="166" x2="295" y2="166" />
        <line x1="40" y1="172" x2="300" y2="172" />
      </g>
      <text x="180" y="200" fill="var(--ink)" fontSize="8" fontFamily="var(--font-sans)" fontWeight="600" textAnchor="middle" letterSpacing="0.12em">
        SECTOR 04 — INSTITUTIONAL CIVIC PAVILION
      </text>
    </svg>
  );
}

export function PEBPracticeVector() {
  return (
    <svg viewBox="0 0 360 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="practice-vector-svg">
      <rect x="5" y="5" width="350" height="210" fill="var(--bg-subtle)" stroke="var(--border)" strokeWidth="0.8" />
      {/* Steel Truss & Pre-Engineered Portal */}
      <g stroke="var(--ink)" strokeWidth="1.2">
        <line x1="60" y1="160" x2="60" y2="70" strokeWidth="1.8" />
        <line x1="300" y1="160" x2="300" y2="70" strokeWidth="1.8" />
        <line x1="60" y1="70" x2="180" y2="35" strokeWidth="1.8" />
        <line x1="300" y1="70" x2="180" y2="35" strokeWidth="1.8" />
        <line x1="60" y1="85" x2="180" y2="52" strokeWidth="0.9" strokeOpacity="0.6" />
        <line x1="300" y1="85" x2="180" y2="52" strokeWidth="0.9" strokeOpacity="0.6" />
        {/* Diagonal Bracing */}
        <line x1="90" y1="78" x2="90" y2="61" strokeWidth="0.7" />
        <line x1="130" y1="68" x2="130" y2="48" strokeWidth="0.7" />
        <line x1="230" y1="48" x2="230" y2="68" strokeWidth="0.7" />
        <line x1="270" y1="61" x2="270" y2="78" strokeWidth="0.7" />
      </g>
      <line x1="30" y1="160" x2="330" y2="160" stroke="var(--ink)" strokeWidth="1.4" />
      <text x="180" y="200" fill="var(--ink)" fontSize="8" fontFamily="var(--font-sans)" fontWeight="600" textAnchor="middle" letterSpacing="0.12em">
        SECTOR 05 — PEB STRUCTURAL STEEL TRUSS
      </text>
    </svg>
  );
}
