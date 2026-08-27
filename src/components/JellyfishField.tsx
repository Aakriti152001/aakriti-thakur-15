interface JellyfishProps {
  id: string;
  /** horizontal position, % of container width */
  left: number;
  /** rendered size in px (desktop) */
  size: number;
  opacity: number;
  blur: number;
  /** seconds */
  rise: number;
  riseDelay: number;
  drift: number;
  driftDelay: number;
  driftX: number;
  tilt: number;
  scaleY: number;
}

const JELLYFISH: JellyfishProps[] = [
  { id: "j1", left: 6, size: 200, opacity: 0.85, blur: 0, rise: 34, riseDelay: -4, drift: 13, driftDelay: -2, driftX: 26, tilt: -6, scaleY: 1 },
  { id: "j2", left: 24, size: 120, opacity: 0.55, blur: 1.6, rise: 46, riseDelay: -21, drift: 17, driftDelay: -9, driftX: -18, tilt: 7, scaleY: 0.94 },
  { id: "j3", left: 42, size: 216, opacity: 0.8, blur: 0.4, rise: 29, riseDelay: -13, drift: 11, driftDelay: -5, driftX: 20, tilt: 4, scaleY: 1.04 },
  { id: "j4", left: 58, size: 108, opacity: 0.5, blur: 2, rise: 52, riseDelay: -33, drift: 19, driftDelay: -14, driftX: -24, tilt: -9, scaleY: 0.9 },
  { id: "j5", left: 76, size: 188, opacity: 0.78, blur: 0.6, rise: 38, riseDelay: -26, drift: 15, driftDelay: -11, driftX: 16, tilt: 8, scaleY: 1 },
  { id: "j6", left: 91, size: 116, opacity: 0.52, blur: 1.8, rise: 43, riseDelay: -7, drift: 21, driftDelay: -17, driftX: -14, tilt: -5, scaleY: 0.96 },
];

const PARTICLES = [
  { left: 10, bottom: 12, size: 3, dur: 19, delay: -3 },
  { left: 21, bottom: 4, size: 2, dur: 26, delay: -12 },
  { left: 34, bottom: 18, size: 2.5, dur: 22, delay: -8 },
  { left: 47, bottom: 7, size: 2, dur: 31, delay: -19 },
  { left: 55, bottom: 22, size: 3, dur: 24, delay: -5 },
  { left: 66, bottom: 10, size: 2, dur: 28, delay: -15 },
  { left: 79, bottom: 16, size: 2.5, dur: 21, delay: -9 },
  { left: 88, bottom: 5, size: 2, dur: 33, delay: -23 },
  { left: 95, bottom: 20, size: 3, dur: 25, delay: -11 },
];

const Jellyfish = ({ item }: { item: JellyfishProps }) => (
  <div
    className="jelly-rise absolute bottom-0"
    style={{
      left: `${item.left}%`,
      animationDuration: `${item.rise}s`,
      animationDelay: `${item.riseDelay}s`,
    }}
  >
    <div
      className="jelly-drift"
      style={{
        animationDuration: `${item.drift}s`,
        animationDelay: `${item.driftDelay}s`,
        ["--jelly-drift-x" as string]: `${item.driftX}px`,
        ["--jelly-tilt" as string]: `${item.tilt}deg`,
      }}
    >
      <div
        className="jelly-body w-[var(--jelly-w)]"
        style={{
          ["--jelly-w" as string]: `${item.size}px`,
          opacity: item.opacity,
          filter: item.blur ? `blur(${item.blur}px)` : undefined,
          transform: `scaleY(${item.scaleY})`,
        }}
      >
        <svg viewBox="0 0 120 200" className="w-full h-auto" aria-hidden="true" focusable="false">
          <defs>
            <radialGradient id={`bell-${item.id}`} cx="50%" cy="62%" r="62%">
              <stop offset="0%" stopColor="hsl(84 90% 88%)" stopOpacity="1" />
              <stop offset="38%" stopColor="hsl(96 80% 74%)" stopOpacity="0.6" />
              <stop offset="78%" stopColor="hsl(140 72% 54%)" stopOpacity="0.28" />
              <stop offset="100%" stopColor="hsl(150 60% 40%)" stopOpacity="0.05" />
            </radialGradient>
            <radialGradient id={`core-${item.id}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="hsl(72 100% 92%)" stopOpacity="0.9" />
              <stop offset="100%" stopColor="hsl(96 90% 70%)" stopOpacity="0" />
            </radialGradient>
            <linearGradient id={`tent-${item.id}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(90 85% 82%)" stopOpacity="0.7" />
              <stop offset="60%" stopColor="hsl(120 70% 62%)" stopOpacity="0.28" />
              <stop offset="100%" stopColor="hsl(140 60% 50%)" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* ambient glow */}
          <ellipse cx="60" cy="58" rx="52" ry="42" fill={`url(#core-${item.id})`} opacity="0.5" />

          {/* tentacles */}
          <g className="jelly-tentacles" fill="none" stroke={`url(#tent-${item.id})`} strokeLinecap="round">
            <path d="M40 62 C34 96 46 122 36 168" strokeWidth="1.6" />
            <path d="M48 66 C44 104 56 130 48 182" strokeWidth="1.2" />
            <path d="M56 68 C56 108 62 138 58 190" strokeWidth="1.8" />
            <path d="M64 68 C68 106 60 140 70 186" strokeWidth="1.2" />
            <path d="M72 66 C78 100 70 128 80 176" strokeWidth="1.6" />
            <path d="M80 62 C88 94 78 118 90 162" strokeWidth="1.1" />
            <path d="M52 64 C46 92 54 112 44 146" strokeWidth="0.9" />
            <path d="M68 64 C74 90 66 110 76 144" strokeWidth="0.9" />
          </g>

          {/* bell */}
          <path
            d="M8 62 C8 28 32 6 60 6 C88 6 112 28 112 62 C112 70 104 74 96 70 C88 66 84 74 76 74 C68 74 66 68 60 68 C54 68 52 74 44 74 C36 74 32 66 24 70 C16 74 8 70 8 62 Z"
            fill={`url(#bell-${item.id})`}
            stroke="hsl(86 95% 85%)"
            strokeOpacity="0.4"
            strokeWidth="1"
          />
          {/* inner striations */}
          <g stroke="hsl(80 95% 88%)" strokeOpacity="0.22" strokeWidth="0.8" fill="none">
            <path d="M28 60 C30 40 42 22 60 18" />
            <path d="M44 62 C46 44 52 26 60 20" />
            <path d="M76 62 C74 44 68 26 60 20" />
            <path d="M92 60 C90 40 78 22 60 18" />
          </g>
          <ellipse cx="60" cy="52" rx="16" ry="12" fill={`url(#core-${item.id})`} />
        </svg>
      </div>
    </div>
  </div>
);

const JellyfishField = () => (
  <div className="jelly-field pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
    {PARTICLES.map((p, i) => (
      <span
        key={i}
        className="jelly-particle absolute rounded-full"
        style={{
          left: `${p.left}%`,
          bottom: `${p.bottom}%`,
          width: `${p.size}px`,
          height: `${p.size}px`,
          animationDuration: `${p.dur}s`,
          animationDelay: `${p.delay}s`,
        }}
      />
    ))}
    {JELLYFISH.map((item) => (
      <Jellyfish key={item.id} item={item} />
    ))}
  </div>
);

export default JellyfishField;
