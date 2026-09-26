import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};
export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center py-24">
      <Container>
        <Reveal className="mx-auto max-w-xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary-500">404 error</p>
          <h1 className="mt-3 text-3xl font-bold text-dark sm:text-4xl">We couldn&apos;t find that page</h1>
          <p className="mt-4 text-muted">The page you&apos;re looking for may have been moved or no longer exists. Try heading back home, or jump straight to what you need below.</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-md bg-primary-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 ease-premium hover:-translate-y-0.5 hover:bg-primary-700 hover:shadow-glow active:translate-y-0"
            >
              Back to Home
            </Link>
            <Link
              href="/#services"
              className="inline-flex items-center justify-center rounded-md border border-primary-500 px-6 py-3 text-sm font-semibold text-primary-500 transition-all duration-200 ease-premium hover:-translate-y-0.5 hover:bg-primary-500 hover:text-white active:translate-y-0"
            >
              Our Services
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-md border border-gray-300 px-6 py-3 text-sm font-semibold text-dark transition-all duration-200 ease-premium hover:-translate-y-0.5 hover:border-primary-500 hover:text-primary-500 active:translate-y-0"
            >
              Contact Us
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
