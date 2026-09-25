import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/site-data";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/${product.slug}`}
      className="group overflow-hidden rounded-2xl bg-white shadow-[3px_3px_13px_#eee] transition hover:-translate-y-1 hover:shadow-[3px_3px_18px_#ddd]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width:768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
        <h3 className="absolute bottom-4 left-4 right-4 text-xl font-bold text-white">
          {product.title}
        </h3>
      </div>
      <div className="flex items-center justify-between px-4 py-3 text-sm font-semibold text-primary">
        <span>View More</span>
        <span className="text-secondary transition group-hover:translate-x-1">→</span>
      </div>
    </Link>
  );
}

export function PageBanner({
  title,
  image,
  crumbs,
}: {
  title: string;
  image: string;
  crumbs?: { label: string; href?: string }[];
}) {
  return (
    <section
      className="page-banner"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="container-site py-20">
        <h1 className="font-[family-name:var(--font-bricolage)] text-4xl font-bold md:text-5xl">
          {title}
        </h1>
        {crumbs && (
          <p className="mt-3 text-sm text-white/85">
            {crumbs.map((crumb, index) => (
              <span key={`${crumb.label}-${index}`}>
                {index > 0 && <span className="mx-2 opacity-60">/</span>}
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-secondary">
                    {crumb.label}
                  </Link>
                ) : (
                  crumb.label
                )}
              </span>
            ))}
          </p>
        )}
      </div>
    </section>
  );
}
