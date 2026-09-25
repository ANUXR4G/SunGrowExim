import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageBanner } from "@/components/ProductCard";
import { EnquiryForm } from "@/components/EnquiryForm";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Sun Growexim for export enquiries and quotations.",
};

export default function ContactPage() {
  return (
    <>
      <PageBanner
        title="Contact Us"
        image="/images/2025_03_slider1.jpg"
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      />
      <section className="py-16 md:py-20">
        <div className="container-site grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-2xl bg-primary p-8 text-white shadow-xl">
            <h2 className="mb-6 text-3xl font-bold">Get in touch with us</h2>
            <ul className="space-y-5 text-white/90">
              <li className="flex gap-3">
                <MapPin className="mt-1 size-5 shrink-0 text-secondary" />
                <span>{site.address}</span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-1 size-5 shrink-0 text-secondary" />
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-1 size-5 shrink-0 text-secondary" />
                <a href={`tel:${site.phone}`}>{site.phone}</a>
              </li>
            </ul>
          </div>
          <EnquiryForm />
        </div>
      </section>
    </>
  );
}
