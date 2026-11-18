import { useEffect, useState, type FormEvent } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { DEMO_CONTACTS, SERVICES } from '../data/demoContent.ts';
import Reveal from './Reveal.tsx';

interface ContactProps {
  selectedService: string;
}

interface SubmittedRequest {
  name: string;
  contact: string;
  service: string;
  message: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^\+?[0-9\s()-]{7,20}$/;

export default function Contact({ selectedService }: ContactProps) {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [service, setService] = useState(SERVICES[0].title);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [submittedData, setSubmittedData] = useState<SubmittedRequest | null>(null);

  useEffect(() => {
    if (selectedService) {
      setService(selectedService);
      setSubmittedData(null);
    }
  }, [selectedService]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedName = name.trim();
    const trimmedContact = contact.trim();

    if (trimmedName.length < 2) {
      setError('Укажите имя (минимум 2 символа) для демонстрационной проверки.');
      return;
    }

    if (!EMAIL_REGEX.test(trimmedContact) && !PHONE_REGEX.test(trimmedContact)) {
      setError('Введите корректный email или номер телефона для демонстрационной формы.');
      return;
    }

    setError('');
    setSubmittedData({
      name: trimmedName,
      contact: trimmedContact,
      service,
      message: message.trim(),
    });
  };

  const handleReset = () => {
    setSubmittedData(null);
    setName('');
    setContact('');
    setMessage('');
    setError('');
  };

  return (
    <section id="contact" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid gap-10 rounded-2xl border border-white/10 bg-[#12121A] p-6 sm:p-10 lg:grid-cols-12 lg:gap-12">
            <div className="flex flex-col justify-between lg:col-span-5">
              <div>
                <p className="text-xs font-semibold tracking-wide text-violet-400">
                  Контакты · Демонстрационные данные
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white uppercase sm:text-4xl [text-wrap:balance]">
                  Запись на консультацию
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-zinc-300">
                  Контактные данные и форма носят демонстрационный характер. Введённая информация
                  обрабатывается только в текущей вкладке браузера без базы данных и отправки на
                  сервер.
                </p>

                <dl className="mt-8 divide-y divide-white/10 border-t border-b border-white/10 text-sm">
                  <div className="py-4">
                    <dt className="text-xs font-medium text-zinc-400">Email (пример)</dt>
                    <dd className="mt-1">
                      <a
                        href={`mailto:${DEMO_CONTACTS.email}`}
                        className="font-medium text-violet-300 transition-colors hover:text-violet-200"
                      >
                        {DEMO_CONTACTS.email}
                      </a>
                    </dd>
                  </div>

                  <div className="py-4">
                    <dt className="text-xs font-medium text-zinc-400">Телефон (демо-заглушка)</dt>
                    <dd className="mt-1">
                      <a
                        href={DEMO_CONTACTS.phoneHref}
                        className="font-medium text-zinc-100 tabular-nums transition-colors hover:text-violet-300"
                      >
                        {DEMO_CONTACTS.phoneDisplay}
                      </a>
                    </dd>
                  </div>

                  <div className="py-4">
                    <dt className="text-xs font-medium text-zinc-400">Локация и формат</dt>
                    <dd className="mt-1 text-zinc-300">{DEMO_CONTACTS.location}</dd>
                  </div>

                  <div className="py-4">
                    <dt className="text-xs font-medium text-zinc-400">График работы</dt>
                    <dd className="mt-1 text-zinc-300">{DEMO_CONTACTS.hours}</dd>
                  </div>
                </dl>
              </div>
            </div>

            <div className="lg:col-span-7">
              {submittedData ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="flex h-full flex-col justify-center rounded-xl border border-violet-500/40 bg-[#0B0B10] p-6 sm:p-8"
                >
                  <div className="flex items-center gap-3 text-violet-300">
                    <CheckCircle2 className="h-6 w-6 shrink-0" aria-hidden="true" />
                    <span className="text-xs font-semibold tracking-wide uppercase">
                      Демо-подтверждение
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-2xl font-bold text-white uppercase">
                    Заявка сформирована локально
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                    Это демонстрационный интерфейс без серверного хранилища: данные никуда не
                    передаются. Вы можете изменить формат или сбросить форму.
                  </p>

                  <dl className="mt-6 divide-y divide-white/10 border-t border-b border-white/10 text-sm">
                    <div className="flex justify-between gap-4 py-3">
                      <dt className="text-zinc-400">Имя</dt>
                      <dd className="font-medium text-white">{submittedData.name}</dd>
                    </div>
                    <div className="flex justify-between gap-4 py-3">
                      <dt className="text-zinc-400">Контакт</dt>
                      <dd className="font-medium text-white">{submittedData.contact}</dd>
                    </div>
                    <div className="flex justify-between gap-4 py-3">
                      <dt className="text-zinc-400">Формат</dt>
                      <dd className="font-medium text-violet-300">{submittedData.service}</dd>
                    </div>
                    {submittedData.message && (
                      <div className="py-3">
                        <dt className="text-zinc-400">Комментарий</dt>
                        <dd className="mt-1 text-zinc-200">{submittedData.message}</dd>
                      </div>
                    )}
                  </dl>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="mt-6 inline-flex min-h-[44px] w-fit items-center justify-center rounded-lg border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-violet-400 hover:bg-white/[0.05]"
                  >
                    Сбросить форму
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="demo-name" className="block text-xs font-semibold text-zinc-300">
                        Имя *
                      </label>
                      <input
                        id="demo-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Например, Алексей"
                        required
                        autoComplete="name"
                        className="mt-2 min-h-[44px] w-full rounded-lg border border-white/15 bg-[#0B0B10] px-4 py-2.5 text-sm text-white placeholder:text-zinc-500 transition-colors focus:border-violet-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="demo-contact"
                        className="block text-xs font-semibold text-zinc-300"
                      >
                        Email или телефон *
                      </label>
                      <input
                        id="demo-contact"
                        type="text"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        placeholder="alexey@example.com"
                        required
                        className="mt-2 min-h-[44px] w-full rounded-lg border border-white/15 bg-[#0B0B10] px-4 py-2.5 text-sm text-white placeholder:text-zinc-500 transition-colors focus:border-violet-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="demo-service"
                      className="block text-xs font-semibold text-zinc-300"
                    >
                      Формат работы
                    </label>
                    <select
                      id="demo-service"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="mt-2 min-h-[44px] w-full rounded-lg border border-white/15 bg-[#0B0B10] px-4 py-2.5 text-sm text-white transition-colors focus:border-violet-500 focus:outline-none"
                    >
                      {SERVICES.map((item) => (
                        <option key={item.id} value={item.title}>
                          {item.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="demo-message"
                      className="block text-xs font-semibold text-zinc-300"
                    >
                      Задача или удобное время
                    </label>
                    <textarea
                      id="demo-message"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Кратко укажите желаемый график или вопрос (демо-поле)"
                      className="mt-2 w-full resize-none rounded-lg border border-white/15 bg-[#0B0B10] px-4 py-3 text-sm text-white placeholder:text-zinc-500 transition-colors focus:border-violet-500 focus:outline-none"
                    />
                  </div>

                  {error && (
                    <p role="alert" className="text-sm font-medium text-rose-400">
                      {error}
                    </p>
                  )}

                  <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-zinc-400">
                      Демо-форма · без регистрации, платежей и отправки в БД
                    </p>
                    <button
                      type="submit"
                      className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-violet-600 px-7 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-violet-500 whitespace-nowrap shrink-0"
                    >
                      Отправить заявку
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
