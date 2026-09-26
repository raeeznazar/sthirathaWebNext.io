import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Reveal } from "@/components/motion/Reveal";
import { SITE } from "@/lib/constants";
import { assetPath } from "@/lib/asset-path";

export const metadata: Metadata = {
  title: "About Us — Our Story",
  description:
    "Sthiratha began in 1980 as an evening newspaper, grew into commercial letterpress, digital and offset printing, and now offers digital marketing and web design in Kozhikode.",
  alternates: { canonical: "/aboutUs-details" },
  openGraph: {
    url: `${SITE.url}/aboutUs-details`,
    title: "About Us — Our Story | Sthiratha",
    description:
      "Sthiratha began in 1980 as an evening newspaper, grew into commercial letterpress, digital and offset printing, and now offers digital marketing and web design in Kozhikode.",
  },
};

export default function AboutUsDetailsPage() {
  return (
    <>
      <section className="relative flex min-h-[45vh] items-center justify-center overflow-hidden bg-dark pt-24 text-center">
        <div className="absolute inset-0">
          <Image
            src={assetPath("/images/blog/sthiratha-news.webp")}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-dark/20" />
        </div>
        <div
          className="pointer-events-none absolute -top-32 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-primary-500/15 blur-[110px]"
          aria-hidden="true"
        />
        <Container className="relative z-10">
          <Reveal>
            <h1 className="text-2xl font-light text-white sm:text-3xl lg:text-4xl">
              This is how we started{" "}
              <span className="font-semibold">our printing journey</span>
            </h1>
            <Breadcrumbs
              items={[{ label: "Home", href: "/" }, { label: "Our story" }]}
            />
          </Reveal>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Reveal className="mb-8 overflow-hidden rounded-xl">
              <Image
                src={assetPath("/images/blog/sthiratha-news.webp")}
                alt="Sthiratha press archive"
                width={1400}
                height={1400}
                className="h-auto w-full transition-transform duration-700 ease-premium hover:scale-[1.02]"
              />
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="text-xl font-semibold text-dark">Our Story</h2>
              <p className="mt-3 leading-relaxed text-muted">
                <strong className="text-dark">STHIRATHA</strong> began in 1980 as an evening
                newspaper and later expanded to include weekly magazines. Subsequently, we
                ventured into the commercial sector, starting with traditional letterpress
                printing and later advancing to digital and offset printing technologies to
                provide high-quality printing solutions. In response to the new internet era,
                we are now stepping into digital marketing and web design to offer robust
                support for your brand and business.
              </p>
            </Reveal>

            <Reveal delay={0.15} className="my-8 border-l-4 border-primary-500 pl-6">
              <h3 className="text-lg font-semibold text-dark">Our Quality.</h3>
              <p className="mt-1 text-muted">
                Our goal is to provide you with the best and happiest products and services
                around.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
