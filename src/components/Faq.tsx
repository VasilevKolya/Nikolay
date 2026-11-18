import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../data/demoContent.ts';
import Reveal from './Reveal.tsx';

export default function Faq() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="scroll-mt-20 border-b border-white/10 py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="border-b border-white/10 pb-8">
            <p className="text-xs font-semibold tracking-wide text-violet-400">FAQ</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white uppercase sm:text-4xl [text-wrap:balance]">
              Частые вопросы
            </h2>
            <p className="mt-4 max-w-2xl text-base text-zinc-300">
              Организационные детали демонстрационной концепции и условия работы макета.
            </p>
          </div>
        </Reveal>

        <div className="divide-y divide-white/10 border-b border-white/10">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            const panelId = `${item.id}-panel`;
            const buttonId = `${item.id}-button`;

            return (
              <div key={item.id}>
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(item.id)}
                    className="flex min-h-[56px] w-full items-center justify-between gap-6 py-5 text-left transition-colors duration-200 hover:text-violet-300"
                  >
                    <span className="text-base font-semibold text-white sm:text-lg">
                      {item.question}
                    </span>
                    <ChevronDown
                      aria-hidden="true"
                      className={`h-5 w-5 shrink-0 text-violet-400 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className={`pb-6 transition-opacity duration-200 ${
                    isOpen ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <p className="max-w-3xl text-sm leading-relaxed text-zinc-300 sm:text-base">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
