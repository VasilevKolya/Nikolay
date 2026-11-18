import { ArrowUpRight, Check } from 'lucide-react';
import { SERVICES } from '../data/demoContent.ts';
import Reveal from './Reveal.tsx';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  return (
    <section id="services" className="scroll-mt-20 border-b border-white/10 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col justify-between gap-4 border-b border-white/10 pb-8 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold tracking-wide text-violet-400">
                Услуги · Демо-форматы
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white uppercase sm:text-4xl [text-wrap:balance]">
                Форматы работы
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-zinc-400">
              Три базовых сценария взаимодействия. Выбор любого формата перенесёт вас к форме записи
              и автоматически подставит выбранную услугу.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          {SERVICES.map((service, index) => {
            const colSpanClass = service.wide ? 'lg:col-span-12' : 'lg:col-span-6';

            return (
              <Reveal key={service.id} delay={index * 70} className={colSpanClass}>
                <article
                  className={`flex h-full flex-col justify-between rounded-2xl border p-7 transition-colors duration-200 sm:p-8 ${
                    service.featured
                      ? 'border-violet-500/45 bg-[#151521]'
                      : 'border-white/10 bg-[#12121A] hover:border-white/20'
                  }`}
                >
                  <div className={service.wide ? 'grid gap-8 lg:grid-cols-12 lg:items-start' : ''}>
                    <div className={service.wide ? 'lg:col-span-5' : ''}>
                      <div className="flex items-center gap-3 text-xs text-zinc-400">
                        <span className="font-display text-sm font-semibold text-violet-400 tabular-nums">
                          {service.index}
                        </span>
                        <span aria-hidden="true">/</span>
                        <span>{service.meta}</span>
                      </div>

                      <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-white uppercase">
                        {service.title}
                      </h3>

                      <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                        {service.description}
                      </p>
                    </div>

                    <ul
                      className={`space-y-3 ${
                        service.wide
                          ? 'border-t border-white/10 pt-6 lg:col-span-7 lg:border-t-0 lg:border-l lg:border-white/10 lg:pt-0 lg:pl-8'
                          : 'mt-6 border-t border-white/10 pt-6'
                      }`}
                    >
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-sm leading-relaxed text-zinc-300"
                        >
                          <Check
                            className="mt-0.5 h-4 w-4 shrink-0 text-violet-400"
                            aria-hidden="true"
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                    <span className="text-xs text-zinc-400">Демонстрационное предложение</span>
                    <a
                      href="#contact"
                      onClick={() => onSelectService(service.title)}
                      className={`inline-flex min-h-[40px] items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors duration-200 whitespace-nowrap shrink-0 ${
                        service.featured
                          ? 'bg-violet-600 text-white hover:bg-violet-500'
                          : 'border border-white/15 bg-white/[0.04] text-white hover:border-violet-400/60 hover:bg-violet-500/15'
                      }`}
                    >
                      {service.ctaLabel}
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
