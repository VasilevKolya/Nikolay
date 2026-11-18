import { useState } from 'react';
import { ArrowUpRight, Dumbbell } from 'lucide-react';
import { HERO_HIGHLIGHTS } from '../data/demoContent.ts';

const HERO_IMAGE_PATH = '/src/assets/images/hero_athletic_studio_1795000865728.jpg';

export default function Hero() {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-white/10 pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24"
    >
      <div className="athletic-grid pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 left-1/3 h-[460px] w-[640px] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[140px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col justify-between py-2 lg:col-span-7">
            <div>
              <p className="text-xs font-medium tracking-wide text-violet-300 sm:text-sm">
                Демонстрационный проект · Вымышленный профиль тренера
              </p>

              <h1 className="mt-5 max-w-2xl font-display text-[clamp(2.5rem,5vw,4.25rem)] leading-[1.06] font-bold tracking-tight text-white uppercase [text-wrap:balance]">
                Системный тренинг для{' '}
                <span className="text-violet-400">силы, техники и формы</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg">
                Структурированные персональные занятия и дистанционное сопровождение без хаотичных
                нагрузок. Демонстрационная концепция лендинга для портфолио веб-разработчика.
              </p>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-6">
              <a
                href="#contact"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-violet-600 px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-violet-500 whitespace-nowrap shrink-0"
              >
                Записаться
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href="#services"
                className="inline-flex min-h-[44px] items-center text-sm font-semibold text-zinc-300 underline decoration-white/25 underline-offset-8 transition-colors duration-200 hover:text-white hover:decoration-violet-400 whitespace-nowrap shrink-0"
              >
                Смотреть форматы работы
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#12121A] lg:aspect-auto lg:h-full lg:min-h-[380px]">
              {!imageError ? (
                <img
                  src={HERO_IMAGE_PATH}
                  alt="Минималистичная тренировочная студия с силовой рамой и штангой в тёмных тонах с фиолетовой подсветкой"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full min-h-[320px] flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#161622] via-[#12121A] to-[#0B0B10] p-8 text-center">
                  <Dumbbell className="h-10 w-10 text-violet-400" aria-hidden="true" />
                  <p className="font-display text-lg font-semibold tracking-wide text-white uppercase">
                    Sokolov Training Studio
                  </p>
                  <p className="text-xs text-zinc-400">Демонстрационная визуализация зала</p>
                </div>
              )}

              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B0B10]/90 via-[#0B0B10]/20 to-transparent"
                aria-hidden="true"
              />

              <div className="absolute right-0 bottom-0 left-0 p-5 sm:p-6">
                <p className="text-xs text-zinc-300">
                  Демо-концепт · Силовая и функциональная подготовка
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
          {HERO_HIGHLIGHTS.map((item, idx) => (
            <div key={item.label} className="flex items-baseline justify-between gap-4 sm:block">
              <p className="text-xs font-medium text-violet-300">
                0{idx + 1}. {item.label}
              </p>
              <p className="mt-1 text-sm font-medium text-zinc-200">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
