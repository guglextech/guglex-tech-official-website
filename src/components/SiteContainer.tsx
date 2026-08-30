import { cn } from '@/lib/utils';

export default function SiteContainer({
  children,
  className,
  narrow = false,
}: {
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
}) {
  return (
    <div className={cn('site-container', className)}>
      {narrow ? <div className="max-w-3xl">{children}</div> : children}
    </div>
  );
}
