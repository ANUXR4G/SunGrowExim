import { LivePage } from "@/components/LivePageGate";
import {
  title,
  bodyClass,
  floatingHtml,
  headerHtml,
  mainHtml,
  footerHtml,
} from "@/lib/live-html/home";

export const metadata = { title };

export default function HomePage() {
  return (
    <LivePage
      floatingHtml={floatingHtml}
      headerHtml={headerHtml}
      mainHtml={mainHtml}
      footerHtml={footerHtml}
      bodyClass={bodyClass}
    />
  );
}
