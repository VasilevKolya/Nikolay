import { NAV_LINKS } from '../data/demoContent.ts';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#08080C] py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <p className="font-display text-base font-bold tracking-wider text-white uppercase">
            Sokolov Training
          </p>
          <p className="mt-1.5 text-xs text-zinc-400">
            Демонстрационный одностраничный проект для портфолио веб-разработчика.
          </p>
        </div>

        <nav aria-label="Навигация в подвале" className="flex flex-wrap items-center gap-6 text-xs text-zinc-400">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-violet-300 whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#hero"
            className="font-semibold text-violet-300 transition-colors hover:text-violet-200 whitespace-nowrap"
          >
            Наверх ↑
          </a>
        </nav>
      </div>
    </footer>
  );
}
