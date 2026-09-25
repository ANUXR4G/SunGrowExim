"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site-data";

export function EnquiryForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const phone = String(data.get("phone") || "");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(`Enquiry from ${name || "website"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
    form.reset();
  }

  return (
    <form
      onSubmit={onSubmit}
      className={`rounded-2xl bg-white p-6 shadow-[3px_3px_13px_#eee] ${
        compact ? "" : "md:p-8"
      }`}
    >
      {!compact && (
        <h3 className="mb-2 text-xl font-bold text-black">
          Please Fill the below details we will get back to you shortly.
        </h3>
      )}
      <div className="grid gap-4 md:grid-cols-2">
        <input
          required
          name="name"
          placeholder="Your Name"
          className="rounded-xl border border-[#ddd] px-4 py-3 outline-none focus:border-secondary"
        />
        <input
          required
          type="email"
          name="email"
          placeholder="Email Address"
          className="rounded-xl border border-[#ddd] px-4 py-3 outline-none focus:border-secondary"
        />
        <input
          name="phone"
          placeholder="Phone Number"
          className="rounded-xl border border-[#ddd] px-4 py-3 outline-none focus:border-secondary md:col-span-2"
        />
        <textarea
          required
          name="message"
          rows={compact ? 4 : 5}
          placeholder="Your Message"
          className="rounded-xl border border-[#ddd] px-4 py-3 outline-none focus:border-secondary md:col-span-2"
        />
      </div>
      <button type="submit" className="btn-secondary mt-5">
        Send Message
        <span className="btn-dot">→</span>
      </button>
      {sent && (
        <p className="mt-3 text-sm font-medium text-primary">
          Opening your email client to send the enquiry…
        </p>
      )}
    </form>
  );
}
