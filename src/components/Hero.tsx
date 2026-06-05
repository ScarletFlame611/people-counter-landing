import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Wallet, Zap } from "lucide-react";
import { DEMO_URL, GITHUB_URL } from "../lib/constants";
import { fadeUp, staggerContainer } from "../lib/motion";
import { HeroVisual } from "./HeroVisual";

const benefits = [
  { icon: Zap, label: "Запуск за вечер" },
  { icon: ShieldCheck, label: "Данные у вас на сервере" },
  { icon: Wallet, label: "Ноль подписок и облака" },
];

export function Hero() {
  return (
    <section className="container-editorial flex flex-1 flex-col justify-center pb-6 pt-2 md:pb-8 md:pt-3">
      <motion.div
        className="mb-4 flex flex-wrap items-center gap-3 md:mb-5"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        custom={0}
      >
        <span className="live-chip">
          <span className="live-dot" />
          Live counting
        </span>
        <span className="font-mono text-[0.65rem] tracking-widest text-muted uppercase md:text-xs">
          PCS / v0.1 — Open Source
        </span>
      </motion.div>

      <div className="grid items-center gap-6 md:grid-cols-2 md:gap-6 lg:grid-cols-12 lg:gap-6">
        <motion.div
          className="md:col-span-1 lg:col-span-7"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1
            className="font-serif text-[clamp(1.85rem,4.2vw,3.25rem)] leading-[1.1] font-medium tracking-tight text-ink"
            variants={fadeUp}
            custom={1}
          >
            Считайте посетителей{" "}
            <span className="editorial-underline italic">линией на экране</span>, а не
            турникетом.
          </motion.h1>

          <motion.p
            className="mt-4 max-w-[52ch] text-base leading-snug text-muted md:mt-5 md:text-lg"
            variants={fadeUp}
            custom={2}
          >
            Запустите точный подсчёт посетителей за один вечер — на камерах,
            которые у вас уже стоят. Без турникетов, облачных подписок и передачи
            данных третьим лицам.
          </motion.p>

          <motion.div
            className="mt-5 flex flex-wrap items-center gap-4 md:mt-6 md:gap-6"
            variants={fadeUp}
            custom={3}
          >
            <a
              href={DEMO_URL}
              className="group relative inline-flex items-center gap-2 rounded-sm bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
            >
              <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-highlight shadow-[0_0_0_3px_var(--paper)]" />
              Смотреть демо
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                strokeWidth={1.5}
              />
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-base font-medium text-ink"
            >
              <span className="border-b border-ink pb-0.5 transition-colors group-hover:border-accent group-hover:text-accent">
                Исходники на GitLab
              </span>
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                strokeWidth={1.5}
              />
            </a>
          </motion.div>

          <motion.ul
            className="mt-6 flex flex-wrap gap-x-5 gap-y-2 md:mt-7"
            variants={fadeUp}
            custom={4}
          >
            {benefits.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="inline-flex items-center gap-2 text-sm text-ink/80"
              >
                <Icon className="h-4 w-4 text-highlight" strokeWidth={1.75} />
                {label}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <div className="max-md:hidden md:col-span-1 lg:col-span-5">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
