import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../data/demoContent.ts';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B0B10]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        <a
          href="#hero"
          onClick={closeMenu}
          className="font-display text-xl font-bold tracking-wider text-white uppercase transition-colors hover:text-violet-300 whitespace-nowrap shrink-0"
        >
          Sokolov
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Основная навигация">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative py-1 text-sm font-medium text-zinc-300 transition-colors duration-200 hover:text-white after:absolute after:right-0 after:bottom-0 after:left-0 after:h-px after:origin-left after:scale-x-0 after:bg-violet-400 after:transition-transform after:duration-200 hover:after:scale-x-100 whitespace-nowrap shrink-0"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-violet-500 whitespace-nowrap shrink-0"
          >
            Записаться
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 bg-white/[0.03] text-zinc-200 transition-colors hover:border-violet-400/60 hover:text-white md:hidden"
          >
            {menuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-white/10 bg-[#0B0B10] px-4 py-6 sm:px-6 md:hidden"
        >
          <nav aria-label="Мобильная навигация" className="flex flex-col gap-1">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="flex min-h-[44px] items-center rounded-lg px-3 py-2.5 text-base font-medium text-zinc-200 transition-colors hover:bg-white/[0.05] hover:text-violet-300"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-4 inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-violet-600 px-5 py-3 text-base font-semibold text-white transition-colors hover:bg-violet-500"
            >
              Записаться
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
