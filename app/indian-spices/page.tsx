import { LivePage } from "@/components/LivePageGate";
import {
  title,
  bodyClass,
  floatingHtml,
  headerHtml,
  mainHtml,
  footerHtml,
} from "@/lib/live-html/indian_spices";

export const metadata = { title };

export default function Page() {
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
