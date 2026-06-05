import { motion } from "framer-motion";
import { fadeIn } from "../lib/motion";

export function HeroVisual() {
  return (
    <motion.div
      className="relative w-full max-w-[280px] justify-self-end lg:max-w-[320px] xl:max-w-[360px]"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      transition={{ delay: 0.3 }}
    >
      <svg
        viewBox="0 0 400 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full max-h-[min(240px,32vh)]"
        aria-hidden="true"
      >
        <rect
          x="20"
          y="20"
          width="360"
          height="280"
          rx="2"
          stroke="#E6E2D8"
          strokeWidth="1"
          fill="none"
        />
        <line x1="20" y1="160" x2="380" y2="160" stroke="#E6E2D8" strokeWidth="0.5" opacity="0.6" />
        <line x1="200" y1="20" x2="200" y2="300" stroke="#E6E2D8" strokeWidth="0.5" opacity="0.6" />

        <ellipse cx="200" cy="95" rx="22" ry="26" fill="#E6E2D8" />
        <path
          d="M168 200 Q200 140 232 200 L232 260 L168 260 Z"
          fill="#E6E2D8"
        />

        <rect
          x="148"
          y="58"
          width="104"
          height="210"
          rx="1"
          stroke="#1F4D3A"
          strokeWidth="1.5"
          strokeDasharray="4 3"
          fill="none"
        />

        <line x1="60" y1="200" x2="340" y2="200" stroke="#FF5A36" strokeWidth="2.5" />
        <circle cx="60" cy="200" r="4" fill="#FF5A36" />
        <circle cx="340" cy="200" r="4" fill="#FF5A36" />

        <path
          d="M200 218 L200 248 M190 238 L200 248 L210 238"
          stroke="#FF5A36"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <text
          x="212"
          y="245"
          fill="#FF5A36"
          fontFamily="JetBrains Mono, monospace"
          fontSize="11"
          fontWeight="600"
        >
          IN
        </text>

        <text
          x="28"
          y="38"
          fill="#6B6B66"
          fontFamily="JetBrains Mono, monospace"
          fontSize="10"
        >
          frame · live
        </text>
      </svg>

      <div className="pointer-events-none absolute -top-3 -right-2 animate-float-chip md:-top-4 md:-right-4">
        <div className="rounded-sm bg-ink px-2.5 py-1.5 font-mono text-[0.65rem] tracking-wider text-paper shadow-lg">
          <span className="text-highlight">+1</span>
          <span className="ml-1.5 opacity-70">IN</span>
        </div>
      </div>
    </motion.div>
  );
}
