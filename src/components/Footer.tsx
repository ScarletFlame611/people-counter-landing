import { DEMO_URL, GITHUB_URL, QUICK_START_URL } from "../lib/constants";

export function Footer() {
  return (
    <footer className="container-editorial hairline-t py-8 md:py-10">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <p className="font-mono text-xs text-muted">
          PCS · People Counter System · МИЭМ НИУ ВШЭ
        </p>
        <nav className="flex flex-wrap gap-6 text-sm">
          <a href={DEMO_URL} className="link-hover text-ink">
            Демо
          </a>
          <a href={QUICK_START_URL} className="link-hover text-ink">
            Установка
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="link-hover text-ink"
          >
            GitLab
          </a>
        </nav>
      </div>
    </footer>
  );
}
