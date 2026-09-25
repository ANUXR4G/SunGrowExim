import type { Metadata } from "next";
import Image from "next/image";
import { PageBanner } from "@/components/ProductCard";
import { galleryImages } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Product gallery of Sun Growexim export commodities.",
};

export default function GalleryPage() {
  return (
    <>
      <PageBanner
        title="Gallery"
        image="/images/2025_03_wmremove-transformed.jpeg"
        crumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
      />
      <section className="py-16 md:py-20">
        <div className="container-site grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image) => (
            <figure
              key={image.src}
              className="overflow-hidden rounded-2xl bg-white shadow-[3px_3px_13px_#eee]"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 100vw, 33vw"
                />
              </div>
              <figcaption className="px-4 py-3 font-semibold text-primary">
                {image.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
