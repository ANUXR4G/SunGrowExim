import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <section className="container-site flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <h1 className="section-title">Page not found</h1>
      <p className="mt-3 text-muted">
        The page you are looking for does not exist.
      </p>
      <a href="/" className="btn-secondary mt-8">
        Back to Home
        <span className="btn-dot">→</span>
      </a>
    </section>
  );
}
