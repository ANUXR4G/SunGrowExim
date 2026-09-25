import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/site-data";
import { PageBanner } from "@/components/ProductCard";
import { EnquiryForm } from "@/components/EnquiryForm";

export function ProductPage({ product }: { product: Product }) {
  return (
    <>
      <PageBanner
        title={product.title}
        image={product.banner}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: product.title },
        ]}
      />

      <section className="py-14 md:py-20">
        <div className="container-site grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="prose-site">
            <h2 className="section-title">{product.title}</h2>
            <p className="mb-6 text-lg text-muted">{product.excerpt}</p>

            {product.sections?.map((section) => (
              <div key={section.heading || section.paragraphs[0]?.slice(0, 24)}>
                {section.heading && <h3>{section.heading}</h3>}
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
            ))}

            {product.specs && (
              <div className="spec-grid">
                {product.specs.map((spec) => (
                  <div key={spec.label} className="spec-card">
                    <strong>{spec.label}</strong>
                    <span>{spec.value}</span>
                  </div>
                ))}
              </div>
            )}

            {product.table && (
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      {product.table.headers.map((header) => (
                        <th key={header}>{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {product.table.rows.map((row, rowIndex) => (
                      <tr key={`row-${rowIndex}`}>
                        {row.map((cell, cellIndex) => (
                          <td key={`cell-${rowIndex}-${cellIndex}`}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {product.children && (
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {product.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="group overflow-hidden rounded-2xl border border-black/5 bg-white shadow-[3px_3px_13px_#eee]"
                  >
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={child.image}
                        alt={child.title}
                        fill
                        className="object-cover transition group-hover:scale-105"
                        sizes="(max-width:768px) 100vw, 40vw"
                      />
                    </div>
                    <div className="px-4 py-3 font-bold text-primary">
                      {child.title}
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {product.gallery && product.gallery.length > 0 && (
              <>
                <h3 className="mt-10">Our Gallery</h3>
                <div className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                  {product.gallery.map((src) => (
                    <div
                      key={src}
                      className="relative aspect-[4/3] overflow-hidden rounded-xl"
                    >
                      <Image
                        src={src}
                        alt={product.title}
                        fill
                        className="object-cover"
                        sizes="(max-width:768px) 50vw, 25vw"
                      />
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          <aside className="lg:sticky lg:top-8 lg:self-start">
            <div className="mb-6 overflow-hidden rounded-2xl">
              <Image
                src={product.image}
                alt={product.title}
                width={640}
                height={480}
                className="h-auto w-full object-cover"
              />
            </div>
            <EnquiryForm compact />
            <div className="mt-6 rounded-2xl bg-[#e5f3f3b0] p-5">
              <h4 className="mb-2 font-bold text-primary">Contact Details</h4>
              <p className="text-sm text-muted">
                Office Add-Mogra, Plot No : A-2/2, Old MIDC satara - 415004,
                Maharashtra, India
              </p>
              <Link href="/contact-us" className="btn-primary mt-4 inline-flex">
                Enquire Now
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
