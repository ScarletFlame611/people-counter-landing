import { motion } from "framer-motion";
import { Gitlab } from "lucide-react";
import {
  DEMO_URL,
  FEATURES_URL,
  GITHUB_URL,
  QUICK_START_URL,
} from "../lib/constants";
import { fadeIn } from "../lib/motion";

export function Nav() {
  return (
    <motion.header
      className="container-editorial flex shrink-0 items-center justify-between py-4 md:py-5"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <a href="#" className="font-mono text-xs tracking-wide text-muted uppercase">
        PCS
      </a>
      <nav className="flex items-center gap-5 md:gap-8">
        <a href={DEMO_URL} className="link-hover hidden text-sm text-ink sm:inline">
          Демо
        </a>
        <a
          href={FEATURES_URL}
          className="link-hover hidden text-sm text-ink sm:inline"
        >
          Возможности
        </a>
        <a
          href={QUICK_START_URL}
          className="link-hover hidden text-sm text-ink md:inline"
        >
          Установка
        </a>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="link-hover inline-flex items-center gap-1.5 text-sm text-ink"
        >
          <Gitlab className="h-4 w-4" strokeWidth={1.5} />
          <span className="hidden sm:inline">GitLab</span>
        </a>
      </nav>
    </motion.header>
  );
}
