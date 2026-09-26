import Image from "next/image";
import { SERVICES } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { assetPath } from "@/lib/asset-path";

export function Services() {
  return (
    <section id="services" className="section scroll-mt-20 py-20">
      <Container>
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-dark sm:text-3xl">Our Services</h2>
          <p className="mt-3 text-muted">
            Expertise and excellence in every service we provide
          </p>
        </Reveal>

        <StaggerGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <StaggerItem
              key={service.id}
              as="article"
              className="group h-full overflow-hidden rounded-xl border border-gray-100 bg-white shadow-card transition-all duration-300 ease-premium hover:-translate-y-1 hover:border-primary-200 hover:shadow-card-hover"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
                <Image
                  src={assetPath(service.image)}
                  alt={service.title}
                  fill
                  sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 ease-premium group-hover:scale-110"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-dark transition-colors group-hover:text-primary-500">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{service.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
