"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { heroSlides, site } from "@/lib/site-data";

export function HeroSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-black">
      <div className="h-full" ref={emblaRef}>
        <div className="flex h-full">
          {heroSlides.map((slide) => (
            <div
              key={slide.image}
              className="relative min-w-0 flex-[0_0_100%] min-h-[100svh]"
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />
              <div className="container-site relative z-10 flex min-h-[100svh] items-center pb-16 pt-36">
                <div className="max-w-2xl text-white">
                  <span className="mb-4 inline-flex rounded-full bg-secondary px-4 py-1.5 text-sm font-semibold">
                    {slide.eyebrow}
                  </span>
                  <div className="mb-5">
                    <Image
                      src={site.logo}
                      alt={site.name}
                      width={180}
                      height={84}
                      className="h-20 w-auto object-contain drop-shadow-lg"
                    />
                  </div>
                  <h1 className="font-[family-name:var(--font-bricolage)] text-4xl font-bold leading-tight md:text-5xl lg:text-[3.4rem]">
                    {slide.title}
                  </h1>
                  <p className="mt-4 max-w-xl text-base text-white/90 md:text-lg">
                    {slide.text}
                  </p>
                  <Link href="/products" className="btn-secondary mt-8">
                    View All Products
                    <span className="btn-dot">
                      <ArrowRight className="size-3.5" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => emblaApi?.scrollPrev()}
        className="absolute left-4 top-1/2 z-20 grid size-12 -translate-y-1/2 place-items-center rounded-full bg-white/20 text-white backdrop-blur-sm transition hover:bg-white/35"
      >
        <ChevronLeft className="size-6" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => emblaApi?.scrollNext()}
        className="absolute right-4 top-1/2 z-20 grid size-12 -translate-y-1/2 place-items-center rounded-full bg-white/20 text-white backdrop-blur-sm transition hover:bg-white/35"
      >
        <ChevronRight className="size-6" />
      </button>

      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`h-2.5 rounded-full transition-all ${
              selected === index ? "w-8 bg-secondary" : "w-2.5 bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
