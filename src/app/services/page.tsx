import SiteShell from '@/components/SiteShell';
import PageHero from '@/components/PageHero';
import SiteCta from '@/components/SiteCta';

const services = [
  {
    title: 'Web & Product Engineering',
    description:
      'Custom web applications and digital products built with modern frameworks — from marketing sites to complex enterprise platforms.',
    details: ['Next.js & modern stacks', 'Responsive & accessible', 'SEO & performance', 'Scalable architecture'],
  },
  {
    title: 'Mobile App Development',
    description:
      'Native and cross-platform mobile applications for iOS and Android, designed for clarity, speed, and everyday reliability.',
    details: ['iOS & Android', 'Cross-platform delivery', 'Store-ready releases', 'Ongoing iteration'],
  },
  {
    title: 'Payments & Digital Infrastructure',
    description:
      'Payment systems, USSD, and integrations built for African markets — mobile money, bank transfer, and card collection.',
    details: ['Mobile money', 'USSD flows', 'Gateway integration', 'Settlement & reporting'],
  },
  {
    title: 'Cloud & DevOps',
    description:
      'Cloud infrastructure, migration, and operations that keep products stable, observable, and cost-efficient as they grow.',
    details: ['AWS & Azure', 'CI/CD pipelines', 'Monitoring & uptime', 'Cost optimization'],
  },
  {
    title: 'UI/UX Design',
    description:
      'User-centered interfaces and design systems that make products clear, usable, and consistent across every screen.',
    details: ['Product design', 'Design systems', 'Prototyping', 'Accessibility'],
  },
  {
    title: 'Consulting & Strategy',
    description:
      'Technical direction for teams that need clarity — audits, architecture planning, and roadmaps aligned to business goals.',
    details: ['Technology audit', 'Architecture planning', 'Digital transformation', 'Delivery advisory'],
  },
];

const process = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We define goals, constraints, and success metrics before committing to a build plan.',
  },
  {
    step: '02',
    title: 'Planning',
    description: 'Scope, architecture, and milestones are set so delivery stays clear and accountable.',
  },
  {
    step: '03',
    title: 'Build',
    description: 'Design and engineering move in short cycles with transparent progress and reviews.',
  },
  {
    step: '04',
    title: 'Launch & support',
    description: 'We ship to production, monitor quality, and stay available as the product evolves.',
  },
];

export default function Services() {
  return (
    <SiteShell>
      <PageHero
        kicker="Services"
        title="Capabilities for products that need to ship and scale."
        description="End-to-end design, engineering, and infrastructure — tailored to how your business actually operates."
      />

        {/* Services list */}
        <section className="bg-background py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 max-w-2xl md:mb-16">
              <p className="mb-3 text-[11px] font-semibold tracking-[0.18em] text-brand-blue uppercase">
                What we offer
              </p>
              <h2 className="mb-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                A focused set of services.
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Each engagement is scoped around outcomes — not a menu of
                disconnected deliverables.
              </p>
            </div>

            <div className="border-t border-border">
              {services.map((service, index) => (
                <article
                  key={service.title}
                  className="group grid grid-cols-1 gap-6 border-b border-border py-10 lg:grid-cols-12 lg:gap-10 md:py-12"
                >
                  <div className="lg:col-span-1">
                    <span className="text-sm font-semibold text-brand-blue tabular-nums">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="lg:col-span-4">
                    <h3 className="text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-brand-blue md:text-2xl">
                      {service.title}
                    </h3>
                  </div>
                  <div className="lg:col-span-4">
                    <p className="leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                  <div className="lg:col-span-3">
                    <ul className="space-y-2">
                      {service.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-blue" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="border-y border-border bg-muted py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 text-[11px] font-semibold tracking-[0.18em] text-brand-blue uppercase">
                How we work
              </p>
              <h2 className="mb-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                A clear path from brief to launch.
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Simple stages, honest timelines, and delivery you can track.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {process.map((item) => (
                <div key={item.step}>
                  <p className="mb-4 text-sm font-semibold text-brand-blue">{item.step}</p>
                  <h3 className="mb-3 text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      <SiteCta
        title="Ready to scope your next build?"
        description="Share your product goals or technical challenges. We'll respond with a clear recommendation and next step."
        primary={{ href: '/contact', label: 'Talk to us' }}
        secondary={{ href: '/use-cases', label: 'See our work' }}
      />
    </SiteShell>
  );
}
