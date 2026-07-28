import React from 'react';

/**
 * Cartographie stylisée Europe-Afrique : contours "papier ancien" en or,
 * arcs Paris → Abidjan / Paris → Douala animés.
 * Aucune dépendance externe, tout est SVG inline.
 */
const HeroCartography = ({ className = '' }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 800 900"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="landStroke" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="hsl(43 96% 56%)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="hsl(38 92% 50%)" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="arcGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="hsl(43 96% 56%)" stopOpacity="0" />
          <stop offset="50%" stopColor="hsl(43 96% 56%)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="hsl(38 92% 50%)" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="cityGlow">
          <stop offset="0%" stopColor="hsl(43 96% 65%)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="hsl(43 96% 56%)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Latitude / longitude grid - papier */}
      <g stroke="hsl(43 96% 56% / 0.06)" strokeWidth="0.5">
        {[100, 200, 300, 400, 500, 600, 700, 800].map((y) => (
          <line key={`h${y}`} x1="0" y1={y} x2="800" y2={y} />
        ))}
        {[100, 200, 300, 400, 500, 600, 700].map((x) => (
          <line key={`v${x}`} x1={x} y1="0" x2={x} y2="900" />
        ))}
      </g>

      {/* Europe (silhouette abstraite) */}
      <path
        d="M 340 160 Q 380 130 430 145 Q 480 155 510 180 Q 540 210 525 240 Q 500 265 460 260 Q 420 258 400 285 Q 380 305 355 295 Q 325 285 320 250 Q 315 210 340 160 Z"
        stroke="url(#landStroke)"
        strokeWidth="1.2"
        strokeDasharray="2 3"
      />

      {/* Afrique (silhouette abstraite) */}
      <path
        d="M 360 340 Q 420 320 480 345 Q 540 375 555 430 Q 565 490 545 555 Q 520 625 480 680 Q 445 730 410 745 Q 375 755 355 720 Q 335 680 335 620 Q 335 555 355 495 Q 370 440 360 340 Z"
        stroke="url(#landStroke)"
        strokeWidth="1.2"
        strokeDasharray="2 3"
      />

      {/* Arc Paris → Abidjan */}
      <path
        d="M 420 220 Q 300 400 400 605"
        stroke="url(#arcGrad)"
        strokeWidth="1.4"
        strokeDasharray="1200"
        strokeDashoffset="1200"
        style={{ animation: 'drawArc 2.6s 0.4s ease-out forwards' }}
      />
      {/* Arc Paris → Douala */}
      <path
        d="M 420 220 Q 550 420 465 605"
        stroke="url(#arcGrad)"
        strokeWidth="1.4"
        strokeDasharray="1200"
        strokeDashoffset="1200"
        style={{ animation: 'drawArc 2.6s 1s ease-out forwards' }}
      />

      {/* Villes */}
      {[
        { x: 420, y: 220, label: 'PARIS', delay: '2.4s' },
        { x: 400, y: 605, label: 'ABIDJAN', delay: '2.8s' },
        { x: 465, y: 605, label: 'DOUALA', delay: '3.1s' },
      ].map((c) => (
        <g key={c.label} style={{ opacity: 0, animation: `fadeCity 0.8s ${c.delay} ease-out forwards` }}>
          <circle cx={c.x} cy={c.y} r="18" fill="url(#cityGlow)" />
          <circle cx={c.x} cy={c.y} r="3" fill="hsl(43 96% 65%)" />
          <text
            x={c.x + 14}
            y={c.y + 4}
            fill="hsl(43 96% 72%)"
            fontSize="10"
            fontFamily="Inter, sans-serif"
            letterSpacing="0.3em"
          >
            {c.label}
          </text>
        </g>
      ))}
    </svg>
  );
};

export default HeroCartography;
