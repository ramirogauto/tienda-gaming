export function productPlaceholder(label: string, hue: number): string {
  const safe = encodeURIComponent(label.slice(0, 24));
  return `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="hsl(${hue}, 35%, 18%)"/>
          <stop offset="100%" stop-color="hsl(${hue}, 45%, 28%)"/>
        </linearGradient>
      </defs>
      <rect width="400" height="400" fill="url(#g)"/>
      <rect x="24" y="24" width="352" height="352" rx="12" fill="none" stroke="hsl(${hue}, 50%, 45%)" stroke-width="1" opacity="0.4"/>
      <text x="200" y="190" text-anchor="middle" fill="hsl(${hue}, 20%, 82%)" font-family="system-ui,sans-serif" font-size="14" font-weight="600">${safe}</text>
      <text x="200" y="220" text-anchor="middle" fill="hsl(${hue}, 15%, 58%)" font-family="system-ui,sans-serif" font-size="11">demo · synthetic</text>
    </svg>`,
  )}`;
}

export function heroPlaceholder(): string {
  return `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="400" viewBox="0 0 1200 400">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#252526"/>
          <stop offset="60%" stop-color="#1e2a38"/>
          <stop offset="100%" stop-color="#1a2838"/>
        </linearGradient>
      </defs>
      <rect width="1200" height="400" fill="url(#bg)"/>
      <circle cx="920" cy="200" r="120" fill="#569cd6" opacity="0.12"/>
      <circle cx="1000" cy="160" r="80" fill="#569cd6" opacity="0.08"/>
      <rect x="700" y="80" width="380" height="240" rx="8" fill="#1e1e1e" stroke="#569cd6" stroke-width="1" opacity="0.5"/>
      <text x="890" y="210" text-anchor="middle" fill="#569cd6" font-family="system-ui,sans-serif" font-size="13" opacity="0.7">setup gaming · demo</text>
    </svg>`,
  )}`;
}
