import { useState } from 'react';
import { User } from 'lucide-react';
import { ABOUT_PRINCIPLES } from '../data/demoContent.ts';
import Reveal from './Reveal.tsx';

const TRAINER_IMAGE_PATH = '/src/assets/images/trainer_editorial_portrait_1795000865120.jpg';

export default function About() {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="about" className="scroll-mt-20 border-b border-white/10 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#12121A] lg:h-full">
                {!imageError ? (
                  <img
                    src={TRAINER_IMAGE_PATH}
                    alt="Вымышленный персональный фитнес-тренер Марк Соколов в тёмной студии"
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                    className="h-full w-full object-cover object-top"
                  />
                ) : (
                  <div className="flex h-full min-h-[360px] flex-col items-center justify-center gap-3 bg-gradient-to-b from-[#171724] to-[#0B0B10] p-8 text-center">
                    <User className="h-12 w-12 text-violet-400" aria-hidden="true" />
                    <p className="font-display text-xl font-bold tracking-wide text-white uppercase">
                      Марк Соколов
                    </p>
                    <p className="text-xs text-zinc-400">Демонстрационный профиль тренера</p>
                  </div>
                )}

                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B0B10]/90 via-[#0B0B10]/15 to-transparent"
                  aria-hidden="true"
                />

                <div className="absolute right-0 bottom-0 left-0 p-6">
                  <p className="font-display text-2xl font-bold tracking-wide text-white uppercase">
                    Марк Соколов
                  </p>
                  <p className="mt-1 text-xs text-zinc-300">
                    Персональный тренер · Вымышленный персонаж для демо
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between lg:col-span-7">
              <div>
                <p className="text-xs font-semibold tracking-wide text-violet-400">
                  Обо мне · Демонстрационное описание
                </p>

                <h2 className="mt-3 max-w-xl font-display text-3xl leading-tight font-bold tracking-tight text-white uppercase sm:text-4xl [text-wrap:balance]">
                  Спокойная методика вместо случайных тренировок
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-300">
                  Этот блок представляет нейтральное описание подхода вымышленного тренера. В
                  основе демонстрационной концепции — внимание к биомеханике движений, постепенная
                  адаптация к нагрузке и понятная организация тренировочной недели без нереалистичных
                  обещаний и выдуманных регалий.
                </p>
              </div>

              <div className="mt-10 divide-y divide-white/10 border-t border-b border-white/10">
                {ABOUT_PRINCIPLES.map((principle) => (
                  <div
                    key={principle.number}
                    className="grid gap-2 py-5 sm:grid-cols-12 sm:items-baseline sm:gap-6"
                  >
                    <span className="font-display text-sm font-semibold text-violet-400 tabular-nums sm:col-span-2">
                      {principle.number}
                    </span>
                    <h3 className="text-base font-semibold text-white sm:col-span-4">
                      {principle.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-zinc-400 sm:col-span-6">
                      {principle.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
