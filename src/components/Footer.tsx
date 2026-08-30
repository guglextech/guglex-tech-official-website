import Link from 'next/link';
import BrandLogo from '@/components/BrandLogo';
import { Separator } from '@/components/ui/separator';

const productLinks = [
  { label: 'Overview', href: '/product' },
  { label: 'Ewale', href: 'https://ewalepay.com', external: true },
  { label: 'Gyepayments', href: 'https://gyepayments.guglextechnologies.com', external: true },
];

const companyLinks = [
  { label: 'About us', href: '/about' },
  { label: 'Use cases', href: '/use-cases' },
  { label: 'Partners', href: '/companies' },
  { label: 'Services', href: '/services' },
];

const resourceLinks = [
  { label: 'Developers', href: '/developers' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

function FooterLink({
  href,
  label,
  external,
}: {
  href: string;
  label: string;
  external?: boolean;
}) {
  const className = 'text-sm text-muted-foreground transition-colors hover:text-foreground';
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {label}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="border-t bg-card text-foreground">
      <div className="site-container py-16 lg:py-20">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-12 md:gap-8">
          <div className="col-span-2 md:col-span-4">
            <BrandLogo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Payments, products, and platforms for businesses across Africa.
            </p>
          </div>

          <div className="md:col-span-2 md:col-start-6">
            <h4 className="text-muted-foreground text-[11px] font-semibold tracking-[0.14em] uppercase">
              Product
            </h4>
            <ul className="mt-4 space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <FooterLink {...link} />
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-muted-foreground text-[11px] font-semibold tracking-[0.14em] uppercase">
              Company
            </h4>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <FooterLink {...link} />
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-3">
            <h4 className="text-muted-foreground text-[11px] font-semibold tracking-[0.14em] uppercase">
              Resources
            </h4>
            <ul className="mt-4 space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <FooterLink {...link} />
                </li>
              ))}
            </ul>
            <div className="text-muted-foreground mt-8 space-y-1.5 text-sm">
              <p>guglex.technologies@gmail.com</p>
              <p>+233 550 982 043</p>
              <p>Accra, Ghana</p>
            </div>
          </div>
        </div>

        <Separator className="mt-14" />
        <div className="text-muted-foreground flex flex-col gap-2 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Guglex Technologies</p>
          <p>All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
