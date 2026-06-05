import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../lib/motion";

const steps = [
  {
    num: "01",
    title: "Подключите камеру",
    description:
      "ONVIF auto-discovery или ручной RTSP URL. Тест соединения прямо в браузере — убедитесь, что поток идёт.",
  },
  {
    num: "02",
    title: "Нарисуйте линию подсчёта",
    description:
      "Два клика на превью с камеры — виртуальная линия и направление входа. Обработка видео запустится сама.",
  },
  {
    num: "03",
    title: "Получайте аналитику",
    description:
      "События IN/OUT в дашборде, WebSocket в реальном времени, агрегация в Grafana и экспорт в CSV.",
  },
];

function StepVisual({ step }: { step: string }) {
  if (step === "01") {
    return (
      <svg viewBox="0 0 120 80" className="h-14 w-20 opacity-80 md:h-16 md:w-24" aria-hidden="true">
        <rect x="4" y="4" width="112" height="72" rx="1" stroke="#E6E2D8" fill="none" />
        <circle cx="60" cy="40" r="8" fill="#E7EDE8" stroke="#1F4D3A" strokeWidth="1" />
        <text x="8" y="14" fontSize="8" fill="#6B6B66" fontFamily="monospace">
          ONVIF
        </text>
      </svg>
    );
  }
  if (step === "02") {
    return (
      <svg viewBox="0 0 120 80" className="h-14 w-20 opacity-80 md:h-16 md:w-24" aria-hidden="true">
        <rect x="4" y="4" width="112" height="72" rx="1" stroke="#E6E2D8" fill="none" />
        <line x1="20" y1="45" x2="100" y2="45" stroke="#1F4D3A" strokeWidth="2" />
        <circle cx="20" cy="45" r="3" fill="#1F4D3A" />
        <circle cx="100" cy="45" r="3" fill="#1F4D3A" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 120 80" className="h-14 w-20 opacity-80 md:h-16 md:w-24" aria-hidden="true">
      <rect x="4" y="4" width="112" height="72" rx="1" stroke="#E6E2D8" fill="none" />
      <text x="20" y="35" fontSize="14" fill="#1F4D3A" fontFamily="serif">
        IN +12
      </text>
      <text x="20" y="55" fontSize="10" fill="#6B6B66" fontFamily="monospace">
        OUT −8
      </text>
    </svg>
  );
}

export function HowItWorks() {
  return (
    <section className="container-editorial py-12 md:py-16" id="how-it-works">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUp}
      >
        <p className="mb-3 font-mono text-[0.65rem] tracking-widest text-muted uppercase md:text-xs">
          Как это работает
        </p>
        <h2 className="max-w-lg font-serif text-2xl font-medium tracking-tight text-ink md:text-3xl">
          Три шага от камеры до аналитики.
        </h2>
      </motion.div>

      <div className="mt-8 md:mt-10">
        {steps.map((step, i) => (
          <motion.article
            key={step.num}
            className={`grid items-center gap-4 py-6 md:grid-cols-12 md:gap-6 md:py-8 ${
              i > 0 ? "hairline-t" : ""
            }`}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            custom={i}
          >
            <div className="md:col-span-2">
              <span className="font-serif text-4xl font-medium tracking-tight text-hairline md:text-5xl lg:text-6xl">
                {step.num}
              </span>
            </div>
            <div className="md:col-span-6">
              <h3 className="font-serif text-xl font-medium text-ink md:text-2xl">
                {step.title}
              </h3>
              <p className="mt-2 max-w-lg text-sm leading-snug text-muted md:text-base">
                {step.description}
              </p>
            </div>
            <div className="flex justify-start md:col-span-4 md:justify-end">
              <StepVisual step={step.num} />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
