import Image from "next/image";
import Link from "next/link";
import { Award, Globe2, ShieldCheck } from "lucide-react";
import { HeroSlider } from "@/components/HeroSlider";
import { ProductCard } from "@/components/ProductCard";
import { EnquiryForm } from "@/components/EnquiryForm";
import {
  aboutContent,
  certificates,
  galleryImages,
  homeProducts,
  site,
  testimonials,
  whyChooseUs,
} from "@/lib/site-data";

const icons = {
  globe: Globe2,
  shield: ShieldCheck,
  award: Award,
};

export default function HomePage() {
  return (
    <>
      <HeroSlider />

      <section className="relative z-10 -mt-10 pb-8">
        <div className="container-site">
          <div className="rounded-2xl bg-white p-4 shadow-[0_20px_50px_rgba(0,0,0,0.12)] md:p-6">
            <EnquiryForm />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-site grid items-center gap-10 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl">
            <Image
              src={aboutContent.image}
              alt="About Sun Growexim"
              width={900}
              height={650}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="section-eyebrow">About Us</p>
            <h2 className="section-title">{aboutContent.title}</h2>
            <div className="prose-site mt-4">
              {aboutContent.paragraphs.slice(0, 2).map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
            <Link href="/about-us" className="btn-primary mt-6 inline-flex">
              More About Us
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-soft py-16 md:py-20">
        <div className="container-site">
          <div className="mb-10 text-center">
            <p className="section-eyebrow">What We Export</p>
            <h2 className="section-title">Our Products</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {homeProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-site">
          <div className="mb-10 text-center">
            <p className="section-eyebrow">Why Us</p>
            <h2 className="section-title">Why Choose Us</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {whyChooseUs.map((item) => {
              const Icon = icons[item.icon];
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-black/5 bg-white p-7 shadow-[3px_3px_13px_#eee]"
                >
                  <div className="mb-4 grid size-14 place-items-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="size-7" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                  <p className="text-muted">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#e5f3f3b0] py-16 md:py-20">
        <div className="container-site">
          <div className="mb-10 text-center">
            <p className="section-eyebrow">Credentials</p>
            <h2 className="section-title">Our Certificates</h2>
          </div>
          <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
            {certificates.map((certificate) => (
              <a
                key={certificate.title}
                href={certificate.pdf}
                target="_blank"
                rel="noreferrer"
                className="overflow-hidden rounded-2xl bg-white p-4 shadow-[3px_3px_13px_#eee] transition hover:-translate-y-1"
              >
                <Image
                  src={certificate.image}
                  alt={certificate.title}
                  width={480}
                  height={320}
                  className="mx-auto h-auto w-full object-contain"
                />
                <p className="mt-3 text-center font-semibold text-primary">
                  {certificate.title}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-site">
          <div className="mb-10 text-center">
            <p className="section-eyebrow">Reviews</p>
            <h2 className="section-title">Our Testimonials ❤️</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((item) => (
              <blockquote
                key={item.name}
                className="rounded-2xl border border-black/5 bg-white p-7 shadow-[3px_3px_13px_#eee]"
              >
                <p className="text-muted">&ldquo;{item.quote}&rdquo;</p>
                <footer className="mt-5 font-bold text-primary">{item.name}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-soft py-16 md:py-20">
        <div className="container-site">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="section-eyebrow">Portfolio</p>
              <h2 className="section-title">Our Gallery</h2>
            </div>
            <Link href="/gallery" className="btn-secondary">
              View Gallery
              <span className="btn-dot">→</span>
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image) => (
              <Link
                key={image.src}
                href="/gallery"
                className="relative aspect-[4/3] overflow-hidden rounded-2xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                  sizes="(max-width:768px) 100vw, 33vw"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative py-20 text-white"
        style={{
          backgroundImage:
            "linear-gradient(#fa921cd6, #000000d4), url(/images/2025_03_slider1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container-site grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="font-[family-name:var(--font-bricolage)] text-3xl font-bold md:text-4xl">
              Any questions? Get in touch
            </h2>
            <p className="mt-4 max-w-xl text-white/90">
              If you think we’d be the right fit for your export service needs,
              don’t hesitate to send us an email or call us for a free quote.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 lg:justify-end">
            <Link href="/contact-us" className="btn-secondary">
              Get in touch with us
              <span className="btn-dot">→</span>
            </Link>
            <a href={`mailto:${site.email}`} className="btn-primary">
              {site.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
