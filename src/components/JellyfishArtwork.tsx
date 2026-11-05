const JellyfishArtwork = ({ id }: { id: string }) => (
  <svg viewBox="0 0 120 200" className="w-full h-auto" aria-hidden="true" focusable="false">
    <defs>
      <radialGradient id={`bell-${id}`} cx="50%" cy="62%" r="62%">
        <stop offset="0%" stopColor="hsl(84 90% 88%)" stopOpacity="1" />
        <stop offset="38%" stopColor="hsl(80 70% 80%)" stopOpacity="0.42" />
        <stop offset="78%" stopColor="hsl(110 55% 62%)" stopOpacity="0.16" />
        <stop offset="100%" stopColor="hsl(150 60% 40%)" stopOpacity="0.05" />
      </radialGradient>
      <radialGradient id={`core-${id}`} cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="hsl(72 100% 92%)" stopOpacity="0.9" />
        <stop offset="100%" stopColor="hsl(96 90% 70%)" stopOpacity="0" />
      </radialGradient>
      <linearGradient id={`tent-${id}`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="hsl(90 85% 82%)" stopOpacity="0.7" />
        <stop offset="60%" stopColor="hsl(120 70% 62%)" stopOpacity="0.28" />
        <stop offset="100%" stopColor="hsl(140 60% 50%)" stopOpacity="0" />
      </linearGradient>
    </defs>
    <ellipse cx="60" cy="58" rx="52" ry="42" fill={`url(#core-${id})`} opacity="0.5" />
    <g className="jelly-tentacles" fill="none" stroke={`url(#tent-${id})`} strokeLinecap="round">
      <path d="M40 62 C34 96 46 122 36 168" strokeWidth="1.6" />
      <path d="M48 66 C44 104 56 130 48 182" strokeWidth="1.2" />
      <path d="M56 68 C56 108 62 138 58 190" strokeWidth="1.8" />
      <path d="M64 68 C68 106 60 140 70 186" strokeWidth="1.2" />
      <path d="M72 66 C78 100 70 128 80 176" strokeWidth="1.6" />
      <path d="M80 62 C88 94 78 118 90 162" strokeWidth="1.1" />
    </g>
    <path
      d="M8 62 C8 28 32 6 60 6 C88 6 112 28 112 62 C112 70 104 74 96 70 C88 66 84 74 76 74 C68 74 66 68 60 68 C54 68 52 74 44 74 C36 74 32 66 24 70 C16 74 8 70 8 62 Z"
      fill={`url(#bell-${id})`}
      stroke="hsl(86 95% 85%)"
      strokeOpacity="0.4"
      strokeWidth="1"
    />
    <ellipse cx="60" cy="52" rx="16" ry="12" fill={`url(#core-${id})`} />
  </svg>
);

export default JellyfishArtwork;