"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Mail, MapPin, Menu, Send, X, ChevronDown } from "lucide-react";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "@/components/SocialIcons";
import { navLinks, site } from "@/lib/site-data";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
    setProductsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div className="relative z-40 bg-black/55 text-white backdrop-blur-sm">
        <div className="container-site flex flex-wrap items-center justify-between gap-3 py-2.5 text-sm">
          <p className="flex items-start gap-2 max-w-3xl">
            <MapPin className="mt-0.5 size-4 shrink-0 text-secondary" />
            <span>{site.address}</span>
          </p>
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 hover:text-secondary"
            >
              <Send className="size-4 text-secondary" />
              {site.email}
            </a>
            <div className="hidden sm:flex items-center gap-2">
              <a
                href={site.social.facebook}
                aria-label="Facebook"
                className="grid size-7 place-items-center rounded-full bg-white text-[#1877f2]"
              >
                <FacebookIcon className="size-3.5" />
              </a>
              <a
                href={site.social.twitter}
                aria-label="Twitter"
                className="grid size-7 place-items-center rounded-full bg-white text-[#1da1f2]"
              >
                <TwitterIcon className="size-3.5" />
              </a>
              <a
                href={site.social.instagram}
                aria-label="Instagram"
                className="grid size-7 place-items-center rounded-full bg-white text-[#e1306c]"
              >
                <InstagramIcon className="size-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <header className="absolute left-0 right-0 top-[52px] z-50">
        <div className="container-site flex items-center justify-between gap-4 py-4">
          <Link href="/" className="relative z-10">
            <Image
              src={site.logo}
              alt={site.name}
              width={150}
              height={70}
              className="h-14 w-auto object-contain drop-shadow-md"
              priority
            />
          </Link>

          <div className="flex items-center gap-3">
            <Link href="/contact-us" className="btn-secondary hidden sm:inline-flex">
              Book Now
              <span className="btn-dot">
                <Mail className="size-3.5" />
              </span>
            </Link>
            <button
              type="button"
              aria-label="Menu Trigger"
              onClick={() => setOpen(true)}
              className="grid size-12 place-items-center rounded-md bg-primary text-white shadow-lg shadow-primary/30"
            >
              <Menu className="size-6" />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[80] transition ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <button
          type="button"
          aria-label="Close menu overlay"
          className={`absolute inset-0 bg-black/50 transition ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute right-0 top-0 flex h-full w-[min(360px,92vw)] flex-col bg-white shadow-2xl transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-black/10 px-5 py-4">
            <Image src={site.logo} alt={site.name} width={120} height={56} />
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="grid size-10 place-items-center rounded-full bg-soft"
            >
              <X className="size-5" />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto px-3 py-4">
            <ul className="space-y-1">
              {navLinks.map((link) => {
                const active =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                if ("children" in link && link.children) {
                  return (
                    <li key={link.href}>
                      <button
                        type="button"
                        onClick={() => setProductsOpen((v) => !v)}
                        className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left font-semibold ${
                          active ? "bg-primary/10 text-primary" : "hover:bg-soft"
                        }`}
                      >
                        <span>{link.label}</span>
                        <ChevronDown
                          className={`size-4 transition ${
                            productsOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {productsOpen && (
                        <ul className="ml-3 mt-1 space-y-1 border-l border-black/10 pl-3">
                          {link.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                className="block rounded-lg px-3 py-2 text-sm text-muted hover:bg-soft hover:text-primary"
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                          <li>
                            <Link
                              href="/products"
                              className="block rounded-lg px-3 py-2 text-sm font-semibold text-secondary"
                            >
                              View All Products
                            </Link>
                          </li>
                        </ul>
                      )}
                    </li>
                  );
                }
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`block rounded-xl px-4 py-3 font-semibold ${
                        active ? "bg-primary/10 text-primary" : "hover:bg-soft"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="border-t border-black/10 p-5 text-sm text-muted">
            <a href={`mailto:${site.email}`} className="block hover:text-primary">
              {site.email}
            </a>
            <a href={`tel:${site.phone}`} className="mt-2 block hover:text-primary">
              {site.phoneDisplay}
            </a>
          </div>
        </aside>
      </div>
    </>
  );
}
