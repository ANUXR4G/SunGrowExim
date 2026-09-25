import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { homeProducts, site } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-[#0f1224] text-white">
      <div className="container-site grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src={site.logo}
            alt={site.name}
            width={150}
            height={70}
            className="mb-4 h-16 w-auto object-contain"
          />
          <p className="text-sm leading-relaxed text-white/75">
            Welcome to Sun Growexim a trusted merchant exporter from India. We
            specialize in sourcing and supplying high-quality mango pulp,
            spices, agricultural products to global markets.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-bold">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/80">
            {[
              ["Home", "/"],
              ["About Us", "/about-us"],
              ["Products", "/products"],
              ["Gallery", "/gallery"],
              ["Contact Us", "/contact-us"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="hover:text-secondary">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-bold">Our Products</h4>
          <ul className="space-y-2 text-sm text-white/80">
            {homeProducts.map((product) => (
              <li key={product.slug}>
                <Link href={`/${product.slug}`} className="hover:text-secondary">
                  {product.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-bold">Contact Us</h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-secondary" />
              <span>{site.address}</span>
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 size-4 shrink-0 text-secondary" />
              <a href={`mailto:${site.email}`} className="hover:text-secondary">
                {site.email}
              </a>
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 size-4 shrink-0 text-secondary" />
              <a href={`tel:${site.phone}`} className="hover:text-secondary">
                {site.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-sm text-white/65">
        Copyright © {new Date().getFullYear()}, Sun Growexim. All rights reserved.
      </div>
    </footer>
  );
}
