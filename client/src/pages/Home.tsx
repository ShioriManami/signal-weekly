import { FormEvent, useEffect, useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Command,
  Compass,
  Download,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  MoveUpRight,
  Quote,
  Sparkles,
  X,
} from "lucide-react";
import { toast } from "sonner";

const navLinks = [
  ["#why", "Por qué Signal"],
  ["#sample", "Edición de muestra"],
  ["#voices", "Lectores"],
] as const;

const benefits = [
  {
    number: "01",
    icon: Compass,
    title: "La vista amplia",
    copy: "Una lectura clara de las fuerzas que mueven tu industria, sin el ruido de todos los días.",
  },
  {
    number: "02",
    icon: Command,
    title: "Señales, no resúmenes",
    copy: "Las ideas, los cambios y los números que vale la pena llevar a tu próxima conversación.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Una sorpresa útil",
    copy: "Una herramienta, un modelo mental o una conexión inesperada para mantener tu pensamiento en movimiento.",
  },
];

const sampleArticles = [
  {
    type: "NOTA DE ESTRATEGIA",
    read: "4 min de lectura",
    title: "El poder silencioso de hacer más pequeño el primer movimiento.",
    copy: "Los mejores equipos no apuestan menos: aprenden a acumular certeza más rápido.",
    accent: "bg-[#d9ceff]",
  },
  {
    type: "NOTA DE CAMPO",
    read: "6 min de lectura",
    title: "Por qué el buen criterio se está volviendo una ventaja operativa.",
    copy: "Cuando la IA abarata la ejecución, saber elegir es lo que diferencia.",
    accent: "bg-[#bde6dd]",
  },
  {
    type: "EL NÚMERO",
    read: "3 min de lectura",
    title: "El 18 % del recorrido que lo cambia todo.",
    copy: "Los momentos que nadie mide en el viaje del cliente y que generan una lealtad desproporcionada.",
    accent: "bg-[#ffcfa8]",
  },
];

const previewHeadlines = [
  {
    tag: "Estrategia",
    title: "Hacer más pequeño el primer movimiento.",
    read: "4 min",
    chip: "bg-[#d9ceff] text-[#4c388b]",
  },
  {
    tag: "Campo",
    title: "El criterio como ventaja operativa.",
    read: "6 min",
    chip: "bg-[#bde6dd] text-[#174d31]",
  },
  {
    tag: "Número",
    title: "El 18 % del recorrido que lo cambia todo.",
    read: "3 min",
    chip: "bg-[#ffcfa8] text-[#7a3d10]",
  },
];

const testimonials = [
  {
    quote:
      "Signal Weekly es de las pocas cosas que de verdad espero ver en mi bandeja de entrada. Me ayuda a llegar al lunes con un punto de vista más interesante.",
    name: "Mariana Cortés",
    role: "VP de Marca, Northstar Labs",
    initials: "MC",
    color: "bg-[#e8b5a5]",
  },
  {
    quote:
      "Se siente como una nota de la persona más leída de la sala: generosa, concisa y siempre un paso adelante de lo que todos comentan.",
    name: "Andrés Villalba",
    role: "Fundador, Stillform",
    initials: "AV",
    color: "bg-[#d2c0f5]",
  },
  {
    quote:
      "La escritura es precisa, la curaduría sorprende y le da a nuestro equipo de estrategia una referencia compartida cada semana. Eso vale muchísimo.",
    name: "Lucía Ferrer",
    role: "Directora de Estrategia, Fieldwork",
    initials: "LF",
    color: "bg-[#a6d7cc]",
  },
];

function ScrollLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}

function scrollToSubscribe() {
  document.querySelector("#subscribe")?.scrollIntoView({ behavior: "smooth" });
}

function IssuePreview() {
  return (
    <div className="hero-card relative overflow-hidden rounded-[34px] bg-[#111a3b] p-2 shadow-[0_34px_80px_rgba(25,25,61,0.23)]">
      <div className="flex items-center justify-between px-5 py-4 text-[#fcf8ef]">
        <span className="font-display text-[15px] font-bold tracking-[-0.05em]">
          Signal Weekly
        </span>
        <span className="rounded-full border border-white/30 bg-white/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.15em] backdrop-blur-sm">
          Viernes
        </span>
      </div>

      <div
        role="img"
        aria-label="Vista previa de la edición N.º 024 de Signal Weekly"
        className="rounded-[28px] bg-[#fffdf8] p-5 text-[#111a3b] sm:p-7"
      >
        <div className="flex items-start justify-between gap-4 border-b border-[#111a3b]/10 pb-4">
          <div>
            <p className="eyebrow">Signal Semanal · N.º 024</p>
            <p className="mt-1.5 text-[11px] font-medium text-[#111a3b]/55">
              Viernes, 8:06 a. m. · Edición de la semana
            </p>
          </div>
          <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#111a3b] text-[11px] font-bold text-[#fcf8ef]">
            S
          </span>
        </div>

        <div className="pt-5">
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#7659c7]">
            Historia principal
          </p>
          <p className="font-display mt-2 max-w-[360px] text-[24px] font-bold leading-[1.02] tracking-[-0.055em] sm:text-[29px]">
            Cuando el trabajo se acelera, el criterio escasea.
          </p>
        </div>

        <ul className="mt-6 space-y-2.5">
          {previewHeadlines.map(item => (
            <li
              key={item.title}
              className="flex items-center gap-3 rounded-2xl border border-[#111a3b]/8 bg-[#fcf8ef] px-3.5 py-3"
            >
              <span
                className={`shrink-0 rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.13em] ${item.chip}`}
              >
                {item.tag}
              </span>
              <span className="min-w-0 flex-1 truncate text-[12px] font-semibold sm:text-[13px]">
                {item.title}
              </span>
              <span className="shrink-0 text-[10px] font-medium text-[#111a3b]/45">
                {item.read}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-center gap-3 text-[10px] font-semibold text-[#111a3b]/55">
          <span className="shrink-0">Lectura total · 13 min</span>
          <div
            className="h-1 flex-1 overflow-hidden rounded-full bg-[#111a3b]/10"
            aria-hidden="true"
          >
            <div className="h-full w-[38%] rounded-full bg-[#7659c7]" />
          </div>
          <span className="shrink-0 tabular-nums">38 %</span>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveTestimonial(current => (current + 1) % testimonials.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, []);

  const submitEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedEmail = email.trim();

    if (!/^\S+@\S+\.\S+$/.test(trimmedEmail)) {
      toast.error("Ingresa un correo válido para unirte a Signal Weekly.");
      return;
    }

    setIsSubmitted(true);
    toast.success("Listo: tu primera señal llega este viernes.");
  };

  const current = testimonials[activeTestimonial];

  return (
    <main className="overflow-x-clip bg-[#fcf8ef] text-[#111a3b]">
      <div className="paper-noise pointer-events-none fixed inset-0 z-50 opacity-[0.035]" />

      <section className="relative overflow-hidden px-4 pb-16 pt-4 sm:px-6 lg:px-8 lg:pb-24">
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="mx-auto max-w-[1240px]">
          <header className="relative z-20 flex items-center justify-between rounded-full border border-[#111a3b]/10 bg-[#fcf8ef]/80 px-4 py-3 backdrop-blur-md sm:px-5">
            <a
              href="#top"
              className="group flex items-center gap-2.5"
              aria-label="Inicio de Signal Weekly"
            >
              <span className="grid size-8 place-items-center rounded-full bg-[#111a3b] text-[11px] font-bold tracking-tight text-[#fcf8ef] transition-transform duration-200 group-hover:rotate-12">
                S
              </span>
              <span className="font-display text-[15px] font-bold tracking-[-0.045em]">
                Signal Weekly
              </span>
            </a>

            <nav
              className="hidden items-center gap-6 text-[13px] font-medium text-[#111a3b]/70 md:flex"
              aria-label="Navegación principal"
            >
              {navLinks.map(([href, label]) => (
                <ScrollLink key={href} href={href} className="link-underline">
                  {label}
                </ScrollLink>
              ))}
            </nav>

            <button
              type="button"
              onClick={() => setMobileNavOpen(open => !open)}
              className="grid size-9 place-items-center rounded-full border border-[#111a3b]/10 text-[#111a3b] transition hover:bg-[#111a3b] hover:text-[#fcf8ef] md:hidden"
              aria-label={mobileNavOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={mobileNavOpen}
            >
              {mobileNavOpen ? <X size={17} /> : <Menu size={17} />}
            </button>

            <button
              type="button"
              onClick={scrollToSubscribe}
              className="hidden rounded-full bg-[#111a3b] px-4 py-2 text-[12px] font-semibold text-[#fcf8ef] transition duration-200 hover:-translate-y-0.5 hover:bg-[#303970] active:scale-[0.97] md:inline-flex"
            >
              Unirme a la lista
            </button>
          </header>

          {mobileNavOpen && (
            <nav
              className="relative z-10 mt-2 flex flex-col gap-1 rounded-3xl border border-[#111a3b]/10 bg-[#fcf8ef]/95 p-3 text-sm font-medium shadow-xl shadow-[#111a3b]/5 md:hidden"
              aria-label="Navegación móvil"
            >
              {navLinks.map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMobileNavOpen(false)}
                  className="rounded-2xl px-3 py-2.5 transition hover:bg-[#eee8fb]"
                >
                  {label}
                </a>
              ))}
            </nav>
          )}

          <div
            id="top"
            className="relative grid min-h-[640px] items-center gap-12 pb-4 pt-16 lg:grid-cols-[1.02fr_.98fr] lg:gap-8 lg:pb-0 lg:pt-20"
          >
            <div className="relative z-10 max-w-[650px] lg:pb-8">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#111a3b]/10 bg-white/55 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#111a3b]/70 backdrop-blur-sm">
                <span className="size-1.5 rounded-full bg-[#8265d7]" />
                Cada viernes, 8:06 a. m.
              </div>
              <h1 className="font-display max-w-[620px] text-[clamp(3.4rem,6.6vw,6.4rem)] font-bold leading-[0.91] tracking-[-0.075em] text-[#111a3b]">
                La señal{" "}
                <em className="font-display font-normal text-[#7659c7]">
                  antes
                </em>{" "}
                de que sea obvia.
              </h1>
              <p className="mt-7 max-w-[525px] text-[17px] leading-7 text-[#111a3b]/68 sm:text-[18px]">
                Un briefing semanal para líderes curiosos. Las ideas, los
                movimientos y los cambios culturales que vale la pena conocer
                antes que el resto.
              </p>

              <form
                id="subscribe"
                onSubmit={submitEmail}
                className="mt-9 max-w-[520px] rounded-[22px] border border-[#111a3b]/10 bg-[#fffdf8]/90 p-2 shadow-[0_20px_50px_rgba(29,28,62,0.10)] backdrop-blur-sm"
              >
                {isSubmitted ? (
                  <div
                    className="flex items-center gap-3 px-3 py-2.5"
                    role="status"
                  >
                    <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#c8efd9] text-[#174d31]">
                      <Check size={17} strokeWidth={2.5} />
                    </span>
                    <div>
                      <p className="text-sm font-bold">Ya estás dentro.</p>
                      <p className="text-xs text-[#111a3b]/60">
                        Tu primera edición llega este viernes.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col gap-2 sm:flex-row">
                    <label className="sr-only" htmlFor="email">
                      Tu correo electrónico
                    </label>
                    <div className="flex min-w-0 flex-1 items-center gap-2 px-3">
                      <Mail size={16} className="shrink-0 text-[#111a3b]/45" />
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                        placeholder="Tu mejor correo"
                        className="h-11 w-full bg-transparent text-[14px] font-medium outline-none placeholder:text-[#111a3b]/40"
                        autoComplete="email"
                      />
                    </div>
                    <button
                      type="submit"
                      className="inline-flex h-11 items-center justify-center gap-2 rounded-[15px] bg-[#111a3b] px-5 text-[13px] font-bold text-[#fcf8ef] transition duration-200 hover:bg-[#303970] active:scale-[0.97]"
                    >
                      Recibir la señal <ArrowRight size={15} />
                    </button>
                  </div>
                )}
              </form>
              <div className="mt-4 flex items-center gap-3 text-[11px] font-medium text-[#111a3b]/52">
                <div className="flex -space-x-1.5" aria-hidden="true">
                  {[
                    "bg-[#c5b0ea]",
                    "bg-[#f0b8a2]",
                    "bg-[#9ecdbd]",
                    "bg-[#ebcc76]",
                  ].map(color => (
                    <span
                      key={color}
                      className={`grid size-5 place-items-center rounded-full border-2 border-[#fcf8ef] ${color}`}
                    />
                  ))}
                </div>
                <span>Más de 18.000 lectores curiosos</span>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[560px] lg:ml-auto lg:mr-0">
              <IssuePreview />
              <div className="absolute -bottom-7 -left-4 z-10 flex max-w-[255px] items-center gap-3 rounded-2xl border border-[#111a3b]/10 bg-[#fffdf8]/95 p-3 shadow-[0_15px_38px_rgba(22,25,60,0.14)] backdrop-blur-lg sm:-left-10">
                <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-[#d7cbff] text-[#4f398f]">
                  <Quote size={17} fill="currentColor" />
                </span>
                <p className="text-[11px] font-semibold leading-4 text-[#111a3b]/78">
                  “Un antídoto bienvenido contra el scroll infinito.”
                </p>
              </div>
              <div className="absolute -right-3 top-[21%] grid size-14 place-items-center rounded-full border border-[#111a3b]/10 bg-[#f4eeff] text-[#6d51b5] shadow-lg shadow-[#111a3b]/10 sm:-right-6">
                <Sparkles size={20} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="why"
        className="scroll-mt-6 border-y border-[#111a3b]/10 bg-[#f2ecff] px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-[1240px]">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">El ritual semanal</p>
              <h2 className="font-display mt-4 max-w-[650px] text-[clamp(2.7rem,5vw,4.4rem)] font-bold leading-[0.97] tracking-[-0.07em]">
                Un poco menos de ruido.
                <br />
                <em className="font-normal text-[#7659c7]">
                  Mucha más perspectiva.
                </em>
              </h2>
            </div>
            <p className="max-w-[320px] pb-1 text-[15px] leading-6 text-[#111a3b]/63">
              Signal está diseñado para ser los cinco minutos más útiles de tu
              semana.
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <article
                  key={benefit.number}
                  className="group relative min-h-[280px] overflow-hidden rounded-[26px] border border-[#111a3b]/10 bg-[#fffdf8] p-7 shadow-[0_10px_28px_rgba(28,28,62,0.04)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_42px_rgba(28,28,62,0.11)]"
                >
                  <div
                    className={`absolute right-0 top-0 size-28 rounded-bl-[70px] opacity-50 ${
                      index === 0
                        ? "bg-[#d7cbff]"
                        : index === 1
                          ? "bg-[#c6e8df]"
                          : "bg-[#fbd6b3]"
                    }`}
                  />
                  <div className="relative flex h-full flex-col">
                    <div className="flex items-start justify-between">
                      <span className="text-[11px] font-bold tracking-[0.16em] text-[#111a3b]/45">
                        {benefit.number}
                      </span>
                      <span className="grid size-11 place-items-center rounded-2xl bg-[#111a3b] text-[#fcf8ef] transition duration-300 group-hover:rotate-6">
                        <Icon size={20} />
                      </span>
                    </div>
                    <div className="mt-auto pt-16">
                      <h3 className="font-display text-[26px] font-bold tracking-[-0.05em]">
                        {benefit.title}
                      </h3>
                      <p className="mt-3 max-w-[270px] text-[14px] leading-6 text-[#111a3b]/65">
                        {benefit.copy}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="sample"
        className="scroll-mt-6 bg-[#111a3b] px-4 py-20 text-[#fcf8ef] sm:px-6 lg:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-[1240px]">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
            <div className="lg:pt-2">
              <p className="eyebrow text-[#cfc1ff]">Abre la edición</p>
              <h2 className="font-display mt-4 text-[clamp(2.8rem,5vw,4.6rem)] font-bold leading-[0.95] tracking-[-0.075em]">
                Una buena lectura
                <br />
                para el{" "}
                <em className="font-normal text-[#cfc1ff]">entretiempo.</em>
              </h2>
              <p className="mt-6 max-w-[345px] text-[15px] leading-6 text-white/63">
                Sin opiniones apresuradas. Sin culpa por la productividad. Solo
                pensamiento claro, bien empaquetado para los momentos entre todo
                lo demás.
              </p>
              <button
                type="button"
                onClick={() =>
                  toast.info(
                    "Edición de muestra lista: recorre las notas para explorarla."
                  )
                }
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-2.5 text-[12px] font-bold transition hover:border-white/60 hover:bg-white/10 active:scale-[0.97]"
              >
                Ver la edición N.º 024 <MoveUpRight size={15} />
              </button>
            </div>
            <div className="grid gap-3 sm:grid-cols-3 lg:pt-4">
              {sampleArticles.map((article, index) => (
                <button
                  key={article.title}
                  type="button"
                  onClick={() => toast.info(`Abriendo: ${article.title}`)}
                  className="group flex min-h-[300px] flex-col rounded-[23px] bg-[#fffdf8] p-5 text-left text-[#111a3b] transition duration-300 hover:-translate-y-2 hover:rotate-[0.5deg] hover:shadow-2xl hover:shadow-black/30 active:scale-[0.98] sm:min-h-[370px]"
                >
                  <div
                    className={`mb-auto grid size-9 place-items-center rounded-full ${article.accent} text-[11px] font-bold`}
                  >
                    0{index + 1}
                  </div>
                  <div>
                    <div className="mb-3 flex items-center justify-between gap-2 text-[9px] font-bold tracking-[0.13em] text-[#111a3b]/44">
                      <span>{article.type}</span>
                      <span className="shrink-0">{article.read}</span>
                    </div>
                    <h3 className="font-display text-[22px] font-bold leading-[1.02] tracking-[-0.055em]">
                      {article.title}
                    </h3>
                    <p className="mt-3 text-[12px] leading-5 text-[#111a3b]/58">
                      {article.copy}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1 text-[11px] font-bold">
                      Leer nota{" "}
                      <ArrowRight
                        size={13}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
          <div className="mt-14 flex flex-col gap-4 border-t border-white/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-[#d8cbff] text-[#4c388b]">
                <Download size={16} />
              </span>
              <p className="text-[12px] leading-5 text-white/70">
                <strong className="font-bold text-white">
                  Descarga gratuita:
                </strong>{" "}
                El Mapa Signal 2026
                <br className="hidden sm:block" /> — diez cambios que conviene
                observar antes de que se vuelvan evidentes.
              </p>
            </div>
            <button
              type="button"
              onClick={scrollToSubscribe}
              className="text-left text-[12px] font-bold text-[#cfc1ff] transition hover:text-white sm:text-right"
            >
              Obtener el mapa <ArrowRight className="ml-1 inline" size={14} />
            </button>
          </div>
        </div>
      </section>

      <section
        id="voices"
        className="scroll-mt-6 bg-[#fcf8ef] px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-[1240px]">
          <div className="mb-10 flex items-end justify-between gap-5">
            <div>
              <p className="eyebrow">Lectores</p>
              <h2 className="font-display mt-3 text-[clamp(2.5rem,4.4vw,4rem)] font-bold leading-[0.98] tracking-[-0.065em]">
                Desde la bandeja de entrada.
              </h2>
            </div>
            <div className="hidden items-center gap-2 sm:flex">
              <button
                type="button"
                onClick={() =>
                  setActiveTestimonial(
                    (activeTestimonial - 1 + testimonials.length) %
                      testimonials.length
                  )
                }
                className="grid size-10 place-items-center rounded-full border border-[#111a3b]/15 transition hover:bg-[#111a3b] hover:text-[#fcf8ef] active:scale-[0.97]"
                aria-label="Testimonio anterior"
              >
                <ChevronLeft size={17} />
              </button>
              <button
                type="button"
                onClick={() =>
                  setActiveTestimonial(
                    (activeTestimonial + 1) % testimonials.length
                  )
                }
                className="grid size-10 place-items-center rounded-full border border-[#111a3b]/15 transition hover:bg-[#111a3b] hover:text-[#fcf8ef] active:scale-[0.97]"
                aria-label="Testimonio siguiente"
              >
                <ChevronRight size={17} />
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[30px] bg-[#ece7f9] p-7 sm:p-10 lg:p-14">
            <Quote
              className="absolute right-7 top-7 size-20 text-[#d1c2fb] sm:right-12 sm:top-10 sm:size-28"
              fill="currentColor"
            />
            <div className="relative min-h-[260px] max-w-[840px]">
              <div key={activeTestimonial} className="testimonial-enter">
                <p className="font-display text-[clamp(1.85rem,3.5vw,3.25rem)] font-bold leading-[1.05] tracking-[-0.065em] text-[#111a3b]">
                  “{current.quote}”
                </p>
                <div className="mt-9 flex items-center gap-3">
                  <span
                    className={`grid size-11 place-items-center rounded-full text-[12px] font-bold text-[#111a3b] ${current.color}`}
                  >
                    {current.initials}
                  </span>
                  <div>
                    <p className="text-[13px] font-bold">{current.name}</p>
                    <p className="text-[12px] text-[#111a3b]/58">
                      {current.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative mt-9 flex items-center justify-between border-t border-[#111a3b]/10 pt-5">
              <div
                className="flex gap-1.5"
                aria-label={`Mostrando testimonio ${activeTestimonial + 1} de ${testimonials.length}`}
              >
                {testimonials.map((item, index) => (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => setActiveTestimonial(index)}
                    className={`h-1.5 rounded-full transition-all ${
                      index === activeTestimonial
                        ? "w-7 bg-[#111a3b]"
                        : "w-1.5 bg-[#111a3b]/20 hover:bg-[#111a3b]/45"
                    }`}
                    aria-label={`Ver testimonio de ${item.name}`}
                  />
                ))}
              </div>
              <span className="text-[10px] font-bold tracking-[0.13em] text-[#111a3b]/40">
                0{activeTestimonial + 1} / 0{testimonials.length}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-4 sm:px-6 lg:px-8 lg:pb-8">
        <div className="mx-auto max-w-[1240px] overflow-hidden rounded-[32px] bg-[#bcadf0] px-6 py-14 text-[#111a3b] sm:px-10 lg:flex lg:items-center lg:justify-between lg:px-16 lg:py-16">
          <div>
            <p className="eyebrow text-[#111a3b]/55">
              Haz tu viernes más inteligente
            </p>
            <h2 className="font-display mt-4 max-w-[680px] text-[clamp(2.6rem,5vw,4.5rem)] font-bold leading-[0.93] tracking-[-0.075em]">
              Más señal. <em className="font-normal">Menos ruido.</em>
            </h2>
          </div>
          <button
            type="button"
            onClick={scrollToSubscribe}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#111a3b] px-5 py-3 text-[13px] font-bold text-[#fcf8ef] transition hover:-translate-y-0.5 hover:bg-[#303970] active:scale-[0.97] lg:mt-0"
          >
            Únete a más de 18.000 lectores <ArrowRight size={15} />
          </button>
        </div>
      </section>

      <footer className="px-4 pb-6 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-8 border-t border-[#111a3b]/10 pt-7 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <a
              href="#top"
              className="font-display text-lg font-bold tracking-[-0.05em]"
            >
              Signal Weekly
            </a>
            <p className="mt-2 max-w-[300px] text-[12px] leading-5 text-[#111a3b]/55">
              Inteligencia semanal para personas que hacen que las cosas pasen.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-[12px] font-semibold text-[#111a3b]/65">
            <button
              type="button"
              onClick={() =>
                toast.info("El archivo estará disponible muy pronto.")
              }
              className="transition hover:text-[#7659c7]"
            >
              Archivo
            </button>
            <a
              href="mailto:hola@signalweekly.demo"
              className="transition hover:text-[#7659c7]"
            >
              Contacto
            </a>
            <a href="#top" className="transition hover:text-[#7659c7]">
              Privacidad
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Signal Weekly en LinkedIn"
              className="transition hover:text-[#7659c7]"
            >
              <Linkedin size={15} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Signal Weekly en Instagram"
              className="transition hover:text-[#7659c7]"
            >
              <Instagram size={15} />
            </a>
          </div>
        </div>
        <p className="mx-auto mt-7 max-w-[1240px] text-[10px] font-medium text-[#111a3b]/35">
          © 2026 Signal Weekly. Hecho para mentes curiosas.
        </p>
      </footer>
    </main>
  );
}
