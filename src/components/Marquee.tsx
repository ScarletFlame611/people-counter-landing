import { TECH_STACK } from "../lib/constants";

export function Marquee() {
  const row = TECH_STACK.map((item) => (
    <span key={item} className="inline-flex shrink-0 items-center gap-8">
      <span className="font-mono text-sm tracking-wide text-muted">{item}</span>
      <span className="text-hairline select-none" aria-hidden="true">
        ·
      </span>
    </span>
  ));

  return (
    <section className="hairline-t hairline-b overflow-hidden py-5" aria-label="Tech stack">
      <div className="flex w-max animate-marquee">
        <div className="flex shrink-0 items-center gap-8 pr-8">{row}</div>
        <div className="flex shrink-0 items-center gap-8 pr-8" aria-hidden="true">
          {row}
        </div>
      </div>
    </section>
  );
}
