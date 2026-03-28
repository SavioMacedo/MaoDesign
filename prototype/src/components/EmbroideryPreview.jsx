import React, { useMemo } from 'react';

function generateEmbroideryPaths(seed, colors, shape = 'flower') {
  const paths = [];
  const rng = (s) => {
    let x = Math.sin(s + seed) * 10000;
    return x - Math.floor(x);
  };

  if (shape === 'flower') {
    // Petals
    for (let p = 0; p < 5; p++) {
      const angle = (p * 72 * Math.PI) / 180;
      const cx = 130 + Math.cos(angle) * 45;
      const cy = 130 + Math.sin(angle) * 45;
      const r = 28 + rng(p * 7) * 8;
      const color = colors[p % colors.length];
      for (let i = 0; i < 12; i++) {
        const sa = (i / 12) * Math.PI * 2;
        const x1 = cx + Math.cos(sa) * (r * 0.3);
        const y1 = cy + Math.sin(sa) * (r * 0.6);
        const x2 = cx + Math.cos(sa + 0.4) * r;
        const y2 = cy + Math.sin(sa + 0.4) * (r * 0.8);
        paths.push({ d: `M${x1},${y1} Q${cx},${cy} ${x2},${y2}`, color, opacity: 0.7 + rng(i + p) * 0.3, width: 0.8 });
      }
    }
    // Center
    for (let i = 0; i < 20; i++) {
      const a1 = rng(i) * Math.PI * 2;
      const a2 = rng(i + 100) * Math.PI * 2;
      const r1 = rng(i + 50) * 18;
      const r2 = rng(i + 150) * 18;
      paths.push({
        d: `M${130 + Math.cos(a1) * r1},${130 + Math.sin(a1) * r1} L${130 + Math.cos(a2) * r2},${130 + Math.sin(a2) * r2}`,
        color: colors[colors.length - 1],
        opacity: 0.9,
        width: 1,
      });
    }
  } else if (shape === 'mandala') {
    for (let ring = 1; ring <= 5; ring++) {
      const segments = ring * 8;
      const r = ring * 20;
      const color = colors[ring % colors.length];
      for (let s = 0; s < segments; s++) {
        const a1 = (s / segments) * Math.PI * 2;
        const a2 = ((s + 0.7) / segments) * Math.PI * 2;
        const x1 = 130 + Math.cos(a1) * (r - 8);
        const y1 = 130 + Math.sin(a1) * (r - 8);
        const x2 = 130 + Math.cos(a2) * r;
        const y2 = 130 + Math.sin(a2) * r;
        const mx = 130 + Math.cos((a1 + a2) / 2) * (r + 5);
        const my = 130 + Math.sin((a1 + a2) / 2) * (r + 5);
        for (let i = 0; i < 3; i++) {
          paths.push({ d: `M${x1},${y1} Q${mx},${my} ${x2},${y2}`, color, opacity: 0.6 + ring * 0.06, width: 0.7 });
        }
      }
    }
  } else if (shape === 'butterfly') {
    const wingColors = colors;
    for (let wing = -1; wing <= 1; wing += 2) {
      for (let i = 0; i < 30; i++) {
        const t = i / 30;
        const x1 = 130 + wing * (15 + t * 50);
        const y1 = 120 - Math.sin(t * Math.PI) * 40 + rng(i * 3) * 10;
        const x2 = 130 + wing * (15 + (t + 0.05) * 50);
        const y2 = 120 - Math.sin((t + 0.05) * Math.PI) * 40 + rng(i * 3 + 1) * 10;
        paths.push({ d: `M${x1},${y1} L${x2},${y2}`, color: wingColors[i % wingColors.length], opacity: 0.75, width: 0.9 });
      }
    }
    paths.push({ d: 'M130,90 Q132,130 130,165', color: colors[0], opacity: 1, width: 2 });
  } else if (shape === 'monogram') {
    const letter = 'M';
    for (let i = 0; i < 40; i++) {
      const x = 85 + (i / 40) * 90;
      const y1 = 85 + Math.abs(Math.sin((i / 40) * Math.PI * 2)) * 60;
      const y2 = y1 + rng(i + seed) * 12;
      paths.push({ d: `M${x},${y1} L${x + 1},${y2}`, color: colors[i % colors.length], opacity: 0.8, width: 1.5 });
    }
    paths.push({ d: 'M85,90 L110,175 L130,120 L150,175 L175,90', color: colors[0], opacity: 1, width: 2, fill: 'none' });
  } else if (shape === 'logo') {
    for (let col = 0; col < 4; col++) {
      const color = colors[col % colors.length];
      for (let row = 0; row < 15; row++) {
        const x1 = 60 + col * 50 + rng(col * 30 + row) * 8;
        const y1 = 95 + row * 8 + rng(col * 40 + row) * 4;
        const x2 = x1 + 30 + rng(col * 50 + row) * 15;
        const y2 = y1 + rng(col * 60 + row) * 3;
        paths.push({ d: `M${x1},${y1} L${x2},${y2}`, color, opacity: 0.75, width: 1 });
      }
    }
  } else {
    // Generic fill
    for (let i = 0; i < 60; i++) {
      const x1 = 60 + rng(i * 7) * 140;
      const y1 = 60 + rng(i * 11) * 140;
      const x2 = x1 + (rng(i * 13) - 0.5) * 40;
      const y2 = y1 + (rng(i * 17) - 0.5) * 40;
      paths.push({ d: `M${x1},${y1} L${x2},${y2}`, color: colors[i % colors.length], opacity: 0.7, width: 0.8 });
    }
  }
  return paths;
}

const shapeMap = ['flower', 'mandala', 'butterfly', 'monogram', 'flower', 'logo'];

export default function EmbroideryPreview({ file, size = 260, highlightStep = null }) {
  const shapeIndex = parseInt(file.id, 10) - 1;
  const shape = shapeMap[shapeIndex % shapeMap.length];

  const paths = useMemo(() => {
    const allColors = file.colorList || ['#D81B60', '#FFFFFF'];
    if (highlightStep !== null) {
      const step = file.stitchOrder?.[highlightStep];
      if (step) {
        return generateEmbroideryPaths(parseInt(file.id, 10), [step.color], shape);
      }
    }
    return generateEmbroideryPaths(parseInt(file.id, 10), allColors, shape);
  }, [file, highlightStep, shape]);

  return (
    <svg viewBox="0 0 260 260" width={size} height={size} className="embroidery-svg">
      <rect width="260" height="260" fill="#1D1D29" rx="0" />
      {/* Grid */}
      {Array.from({ length: 13 }).map((_, i) => (
        <line
          key={`v${i}`}
          x1={i * 20}
          y1={0}
          x2={i * 20}
          y2={260}
          stroke="#2F3040"
          strokeWidth="0.5"
        />
      ))}
      {Array.from({ length: 13 }).map((_, i) => (
        <line
          key={`h${i}`}
          x1={0}
          y1={i * 20}
          x2={260}
          y2={i * 20}
          stroke="#2F3040"
          strokeWidth="0.5"
        />
      ))}
      {/* Paths */}
      {paths.map((p, i) => (
        <path
          key={i}
          d={p.d}
          stroke={p.color}
          strokeWidth={p.width}
          fill={p.fill || 'none'}
          opacity={p.opacity}
          strokeLinecap="round"
        />
      ))}
      {/* Size indicator */}
      <g opacity="0.6">
        <line x1="20" y1="235" x2={20 + (file.width / 2)} y2="235" stroke="#B6B7C3" strokeWidth="0.8" />
        <line x1="20" y1="232" x2="20" y2="238" stroke="#B6B7C3" strokeWidth="0.8" />
        <line x1={20 + (file.width / 2)} y1="232" x2={20 + (file.width / 2)} y2="238" stroke="#B6B7C3" strokeWidth="0.8" />
        <text x={20 + (file.width / 4)} y="246" fill="#B6B7C3" fontSize="8" textAnchor="middle">{file.width}mm</text>
      </g>
    </svg>
  );
}
