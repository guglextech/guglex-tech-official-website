import Link from 'next/link';

type BrandLogoProps = {
  href?: string;
  className?: string;
  variant?: 'full' | 'mark';
  /**
   * 'adaptive' follows the site theme (dark wordmark on light theme, white on dark).
   * 'light' / 'dark' force one wordmark regardless of theme — use 'dark' on
   * surfaces that are always dark (e.g. the footer).
   */
  theme?: 'adaptive' | 'light' | 'dark';
};

/* eslint-disable @next/next/no-img-element */
export default function BrandLogo({
  href = '/',
  className = '',
  variant = 'full',
  theme = 'adaptive',
}: BrandLogoProps) {
  const isMark = variant === 'mark';
  const sizeClass = isMark ? 'h-6 w-6' : 'h-6 w-auto';

  const image = isMark ? (
    <img src="/logo-mark.svg" alt="Guglex" className={sizeClass} />
  ) : theme === 'adaptive' ? (
    <>
      <img src="/logo-dark.svg" alt="Guglex" className={`${sizeClass} dark:hidden`} />
      <img src="/logo.svg" alt="Guglex" className={`${sizeClass} hidden dark:block`} />
    </>
  ) : (
    <img
      src={theme === 'dark' ? '/logo.svg' : '/logo-dark.svg'}
      alt="Guglex"
      className={sizeClass}
    />
  );

  if (!href) {
    return <span className={`inline-flex items-center ${className}`}>{image}</span>;
  }

  return (
    <Link
      href={href}
      className={`inline-flex items-center transition-opacity hover:opacity-80 ${className}`}
      aria-label="Guglex Technologies home"
    >
      {image}
    </Link>
  );
}
