"use client";

import dynamic from "next/dynamic";

const LivePageClient = dynamic(
  () => import("./LivePage").then((m) => m.LivePage),
  {
    ssr: false,
    loading: () => <div style={{ minHeight: "100vh" }} />,
  },
);

export function LivePage(props: {
  floatingHtml?: string;
  headerHtml: string;
  mainHtml: string;
  footerHtml: string;
  bodyClass?: string;
}) {
  return <LivePageClient {...props} />;
}
