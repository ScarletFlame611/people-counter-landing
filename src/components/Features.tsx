import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../lib/motion";

const features = [
  {
    title: "Работает с вашими камерами",
    description:
      "Любая ONVIF или RTSP камера, которая уже висит у входа. Auto-discovery находит устройства в сети — никаких новых турникетов и датчиков покупать не нужно.",
    className: "md:col-span-2",
  },
  {
    title: "Точность YOLO + ByteTrack",
    description:
      "Детекция людей и трекинг между кадрами, который не сбивается на толпе. Модель yolov8n или yolov8m — на ваш выбор скорости и качества.",
    className: "md:col-span-1",
  },
  {
    title: "Live-счётчик в браузере",
    description:
      "WebSocket стримит события IN/OUT мгновенно. Видно поток людей прямо сейчас, без перезагрузок.",
    className: "md:col-span-1",
  },
  {
    title: "Аналитика и отчёты",
    description:
      "TimescaleDB + Grafana: почасовые и дневные срезы, готовые дашборды, экспорт в CSV и Excel — для управляющего и маркетинга.",
    className: "md:col-span-1",
  },
  {
    title: "Self-hosted и MIT — навсегда ваше",
    description:
      "Один docker compose up — и сервис крутится у вас. Никаких подписок, лимитов на камеры и отправки видео третьим лицам. Лицензия MIT.",
    className: "md:col-span-2",
  },
];

export function Features() {
  return (
    <section className="container-editorial py-12 md:py-16" id="features">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUp}
      >
        <p className="mb-3 font-mono text-[0.65rem] tracking-widest text-muted uppercase md:text-xs">
          Что внутри
        </p>
        <h2 className="max-w-2xl font-serif text-2xl font-medium tracking-tight text-ink md:text-3xl">
          Всё, чтобы заменить турникет и счётчик —{" "}
          <span className="editorial-underline italic">за один вечер</span>.
        </h2>
      </motion.div>

      <motion.div
        className="mt-8 grid grid-cols-1 border border-hairline md:mt-10 md:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUp}
        custom={1}
      >
        {features.map((f, i) => (
          <article
            key={f.title}
            className={`border-b border-hairline p-5 md:border-r md:border-b-0 md:p-6 md:[&:nth-child(3)]:border-r-0 md:[&:nth-child(5)]:border-r-0 ${f.className} ${
              i === features.length - 1 ? "md:border-b" : ""
            }`}
          >
            <h3 className="font-serif text-lg font-medium text-ink md:text-xl">
              {f.title}
            </h3>
            <p className="mt-2 max-w-md text-sm leading-snug text-muted md:text-[0.9375rem]">
              {f.description}
            </p>
          </article>
        ))}
      </motion.div>
    </section>
  );
}
