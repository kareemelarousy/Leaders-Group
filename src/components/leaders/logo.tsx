export default function LeadersLogo({
  className = "",
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  const textColor = light ? "#FFFFFF" : "#1E2A78";
  const subtextColor = light ? "rgba(255,255,255,0.6)" : "#7C8AA5";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 620 220"
      className={className}
      aria-label="Leaders Group Logo"
    >
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#1E2A78" />
          <stop offset="1" stopColor="#00E0C6" />
        </linearGradient>
      </defs>

      <g transform="translate(40, 30)">
        <line
          x1="28"
          y1="140"
          x2="70"
          y2="100"
          stroke="url(#logoGrad)"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <line
          x1="70"
          y1="100"
          x2="112"
          y2="60"
          stroke="url(#logoGrad)"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <line
          x1="112"
          y1="60"
          x2="148"
          y2="28"
          stroke="url(#logoGrad)"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <line
          x1="70"
          y1="100"
          x2="88"
          y2="44"
          stroke="url(#logoGrad)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <line
          x1="112"
          y1="60"
          x2="144"
          y2="102"
          stroke="url(#logoGrad)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <polygon
          points="0,-8 7,7 -7,7"
          fill="#00E0C6"
          transform="translate(148,28) rotate(-39)"
        />
        <circle cx="28" cy="140" r="10" fill="#1E2A78" />
        <circle cx="70" cy="100" r="10" fill="#1E2A78" />
        <circle cx="112" cy="60" r="10" fill="#1E2A78" />
        <circle cx="88" cy="44" r="7.5" fill="#00E0C6" />
        <circle cx="144" cy="102" r="7.5" fill="#00E0C6" />
      </g>

      <text
        x="232"
        y="100"
        fontFamily="'Sora', sans-serif"
        fontWeight="700"
        fontSize="58"
        fill={textColor}
        letterSpacing="-1"
      >
        LEADERS
      </text>
      <text
        x="232"
        y="158"
        fontFamily="'Sora', sans-serif"
        fontWeight="600"
        fontSize="58"
        fill="#00E0C6"
        letterSpacing="4"
      >
        GROUP
      </text>

      <text
        x="234"
        y="192"
        fontFamily="'IBM Plex Mono', monospace"
        fontSize="15"
        fill={subtextColor}
        letterSpacing="4"
      >
        CONNECTING DATA TO DECISIONS
      </text>
    </svg>
  );
}