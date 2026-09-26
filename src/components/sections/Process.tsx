import Image from "next/image";
import { PROCESS_STEPS } from "@/data/process";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { assetPath } from "@/lib/asset-path";

export function Process() {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-20">
      <div
        className="pointer-events-none absolute -left-40 top-0 -z-0 h-[420px] w-[420px] rounded-full bg-primary-100/60 blur-[100px]"
        aria-hidden="true"
      />

      <Container className="relative">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-dark sm:text-3xl">How It Works?</h2>
          <p className="mt-3 text-muted">
            Embark on a seamless creative journey with us, from initial concept to final
            delivery, where your vision becomes reality through our comprehensive design,
            refinement, and production process.
          </p>
        </Reveal>

        <div className="mx-auto flex max-w-5xl flex-col gap-16">
          {PROCESS_STEPS.map((step, index) => {
            const reversed = index % 2 === 1;
            return (
              <div
                key={step.id}
                className={`grid grid-cols-1 items-center gap-8 md:grid-cols-2 ${
                  reversed ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <Reveal direction={reversed ? "right" : "left"} className="mx-auto w-full max-w-xs">
                  <div className="overflow-hidden rounded-xl">
                    <Image
                      src={assetPath(step.image)}
                      alt={step.title}
                      width={350}
                      height={320}
                      className="h-auto w-full transition-transform duration-500 ease-premium hover:scale-105"
                    />
                  </div>
                </Reveal>
                <Reveal
                  direction={reversed ? "left" : "right"}
                  delay={0.1}
                  className={reversed ? "text-left md:text-right" : "text-left"}
                >
                  <h3 className="text-lg font-semibold text-dark">
                    <span className="text-primary-500">{index + 1}.</span> {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{step.description}</p>
                </Reveal>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
