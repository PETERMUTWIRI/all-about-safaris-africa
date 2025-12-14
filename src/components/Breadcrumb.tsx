import Link from 'next/link';

interface BreadcrumbProps {
  title: string;
  items: { label: string; href: string }[];
}

export function Breadcrumb({ title, items }: BreadcrumbProps) {
  return (
    <section
      className="relative bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "linear-gradient(rgba(19, 53, 123, 0.5), rgba(19, 53, 123, 0.5)), url('/images/breadcrumb-bg.jpg')",
        padding: '150px 0 50px 0',
      }}
    >
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <h1 className="text-5xl font-bold text-white mb-4">{title}</h1>
        <nav className="flex justify-center items-center gap-2">
          {items.map((item, index) => (
            <div key={item.href} className="flex items-center gap-2">
              {index > 0 && <span className="text-white/60">•</span>}
              {item.href === '#' ? (
                <span className="text-white/80 hover:text-yellow-400">{item.label}</span>
              ) : (
                <Link
                  href={item.href}
                  className={`${
                    index === items.length - 1
                      ? 'text-yellow-400 font-semibold'
                      : 'text-white/80 hover:text-yellow-400'
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>
    </section>
  );
}