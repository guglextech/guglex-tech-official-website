export default function PageHero({
  kicker,
  title,
  description,
}: {
  kicker?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="border-b bg-card">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        {kicker ? (
          <p className="mb-4 text-[11px] font-semibold tracking-[0.18em] text-brand-blue uppercase">
            {kicker}
          </p>
        ) : null}
        <h1 className="mb-5 max-w-3xl text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
          {title}
        </h1>
        {description ? (
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">{description}</p>
        ) : null}
      </div>
    </section>
  );
}
