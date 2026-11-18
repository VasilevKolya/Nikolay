import { PROCESS_STEPS } from '../data/demoContent.ts';
import Reveal from './Reveal.tsx';

export default function Process() {
  return (
    <section id="process" className="scroll-mt-20 border-b border-white/10 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wide text-violet-400">
              Этапы сотрудничества
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white uppercase sm:text-4xl [text-wrap:balance]">
              Как выстроен процесс работы
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-300">
              Последовательность шагов от первого обращения до регулярного тренировочного цикла.
            </p>
          </div>
        </Reveal>

        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((item, index) => (
            <Reveal key={item.step} delay={index * 70}>
              <li className="group flex h-full flex-col border-t border-white/15 pt-6 transition-colors duration-200 hover:border-violet-400">
                <span className="font-display text-3xl font-bold text-violet-400 tabular-nums">
                  {item.step}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{item.description}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
