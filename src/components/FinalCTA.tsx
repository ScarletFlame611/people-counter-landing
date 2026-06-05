import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Copy } from "lucide-react";
import { CLONE_CMD, GITHUB_URL } from "../lib/constants";
import { fadeUp, viewportOnce } from "../lib/motion";

const guarantees = [
  "Без регистрации",
  "Без подписок и SaaS-плат",
  "Видео не уходит в облако",
];

export function FinalCTA() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(CLONE_CMD);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  }

  return (
    <section
      className="container-editorial py-16 text-center md:py-20"
      id="quick-start"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUp}
      >
        <p className="mb-3 font-mono text-[0.65rem] tracking-widest text-muted uppercase md:text-xs">
          Быстрый старт
        </p>
        <h2 className="font-serif text-3xl font-medium tracking-tight text-ink md:text-4xl lg:text-5xl">
          Поставьте у себя за{" "}
          <span className="text-highlight">одну команду</span>.
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-base text-muted md:text-lg">
          Склонируйте репозиторий и запустите сервис одной командой. Камеру
          подключите прямо в&nbsp;браузере, проведите линию подсчёта — и счётчик
          запустится.
        </p>

        <div className="mx-auto mt-8 flex max-w-2xl flex-col items-stretch gap-3 md:mt-10">
          <button
            type="button"
            onClick={handleCopy}
            className="group flex items-center justify-between gap-4 rounded-sm border border-hairline bg-paper px-5 py-4 text-left font-mono text-sm text-ink transition-colors hover:border-highlight/40"
            aria-label="Скопировать команду установки"
          >
            <code className="truncate">{CLONE_CMD}</code>
            <span className="inline-flex shrink-0 items-center gap-1.5 text-xs">
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-highlight" strokeWidth={1.75} />
                  <span className="text-highlight">Скопировано</span>
                </>
              ) : (
                <>
                  <Copy
                    className="h-4 w-4 text-muted transition-colors group-hover:text-highlight"
                    strokeWidth={1.5}
                  />
                  <span className="text-muted transition-colors group-hover:text-highlight">
                    Скопировать
                  </span>
                </>
              )}
            </span>
          </button>

          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-sm bg-ink px-5 py-3 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
          >
            Открыть репозиторий
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              strokeWidth={1.5}
            />
          </a>
        </div>

        <ul className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-ink/80">
          {guarantees.map((g) => (
            <li key={g} className="inline-flex items-center gap-2">
              <Check className="h-4 w-4 text-highlight" strokeWidth={1.75} />
              {g}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
