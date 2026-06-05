import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../lib/motion";

export function DemoVideo() {
  return (
    <section className="container-editorial py-12 md:py-16" id="demo">
      <motion.div
        className="mb-6 flex flex-wrap items-end justify-between gap-4 md:mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUp}
      >
        <div>
          <p className="mb-3 font-mono text-[0.65rem] tracking-widest text-muted uppercase md:text-xs">
            Демо · реальная запись интерфейса
          </p>
          <h2 className="max-w-xl font-serif text-2xl font-medium tracking-tight text-ink md:text-3xl">
            Нарисовали линию — счётчик{" "}
            <span className="editorial-underline italic">пошёл</span>.
          </h2>
        </div>
        <span className="live-chip">
          <span className="live-dot" />
          real footage
        </span>
      </motion.div>

      <motion.figure
        className="hairline overflow-hidden rounded-sm bg-ink/[0.02] shadow-[0_30px_80px_-40px_rgba(17,17,17,0.25)]"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUp}
        custom={1}
      >
        <div className="flex items-center justify-between border-b border-hairline bg-paper px-4 py-2 font-mono text-[0.65rem] tracking-wider text-muted uppercase">
          <span className="inline-flex items-center gap-2">
            <span className="flex gap-1">
              <span className="h-2 w-2 rounded-full bg-hairline" />
              <span className="h-2 w-2 rounded-full bg-hairline" />
              <span className="h-2 w-2 rounded-full bg-hairline" />
            </span>
            pcs · live preview
          </span>
          <span className="inline-flex items-center gap-1.5 text-highlight">
            <span className="h-1.5 w-1.5 rounded-full bg-highlight" />
            rec
          </span>
        </div>
        <video
          src="/demo.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="block w-full bg-ink"
        />
        <figcaption className="border-t border-hairline px-4 py-3 text-xs text-muted md:text-sm">
          Подключение ONVIF&#8209;камеры, линия подсчёта, события IN/OUT и
          обновление счётчиков в реальном времени — всё, что вы увидите у себя на
          сервере после <code className="font-mono text-ink">docker compose up</code>.
        </figcaption>
      </motion.figure>
    </section>
  );
}
