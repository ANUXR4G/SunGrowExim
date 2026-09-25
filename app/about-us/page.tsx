import type { Metadata } from "next";
import Image from "next/image";
import { PageBanner } from "@/components/ProductCard";
import { aboutContent } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About Us",
  description: aboutContent.paragraphs[2],
};

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="About Us"
        image={aboutContent.image}
        crumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />
      <section className="py-16 md:py-20">
        <div className="container-site grid items-start gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl">
            <Image
              src={aboutContent.image}
              alt="About Sun Growexim"
              width={900}
              height={650}
              className="w-full object-cover"
            />
          </div>
          <div className="prose-site">
            <p className="section-eyebrow">Who We Are</p>
            <h2 className="section-title">{aboutContent.title}</h2>
            {aboutContent.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
