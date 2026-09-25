import type { Metadata } from "next";
import { PageBanner, ProductCard } from "@/components/ProductCard";
import { homeProducts } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Sun Growexim export products including mango pulp, coconut, rice, spices, potato and millets.",
};

export default function ProductsPage() {
  return (
    <>
      <PageBanner
        title="Products"
        image="/images/2025_03_slider1.jpg"
        crumbs={[{ label: "Home", href: "/" }, { label: "Products" }]}
      />
      <section className="bg-soft py-16 md:py-20">
        <div className="container-site">
          <div className="mb-10 text-center">
            <p className="section-eyebrow">Export Range</p>
            <h2 className="section-title">Our Products</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {homeProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
