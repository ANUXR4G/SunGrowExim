"use client";

import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
} from "@/components/SocialIcons";
import { site } from "@/lib/site-data";

export function FloatingWidgets() {
  return (
    <>
      <div className="fixed left-0 top-1/3 z-40 hidden flex-col gap-1 md:flex">
        {[
          { href: site.social.facebook, icon: FacebookIcon, label: "Facebook" },
          { href: site.social.twitter, icon: TwitterIcon, label: "Twitter" },
          {
            href: site.social.instagram,
            icon: InstagramIcon,
            label: "Instagram",
          },
        ].map(({ href, icon: Icon, label }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="grid size-11 place-items-center rounded-r-xl bg-secondary text-white shadow-lg transition hover:w-12"
          >
            <Icon className="size-4" />
          </a>
        ))}
      </div>

      <div className="fixed bottom-5 left-5 z-40 flex items-center gap-2">
        <a
          href={site.whatsapp}
          target="_blank"
          rel="noreferrer"
          aria-label="Whatsapp"
          className="grid size-14 place-items-center rounded-full bg-[#25d366] text-white shadow-xl"
        >
          <MessageCircle className="size-7" />
        </a>
        <Link
          href="/contact-us"
          className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black shadow-xl"
        >
          Contact us
        </Link>
      </div>

      <a
        href={`tel:${site.phone}`}
        aria-label="Phone"
        className="fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-primary text-white shadow-xl md:hidden"
      >
        <Phone className="size-6" />
      </a>
    </>
  );
}
