import type { Metadata } from "next";
import "./globals.css";
import { cssHrefs } from "@/lib/live-html/chrome";

export const metadata: Metadata = {
  title: "Sun Grow Exim",
  description:
    "Trusted merchant exporter from India — mango pulp, rice, spices, coconut products and agricultural commodities.",
  icons: {
    icon: "/favicon.png",
  },
};

const STYLESHEETS = Array.from(
  new Set(
    cssHrefs.map((href) => href.split("?")[0]).filter((href) => href.startsWith("/")),
  ),
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="/css/live/wp-global.css" />
        {STYLESHEETS.map((href) => (
          <link key={href} rel="stylesheet" href={href} />
        ))}
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
