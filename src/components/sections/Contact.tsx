import { Icon } from "@/components/ui/Icon";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/sections/ContactForm";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { CONTACT } from "@/lib/constants";

const details = [
  { icon: "email" as const, label: CONTACT.salesEmail, href: `mailto:${CONTACT.salesEmail}` },
  { icon: "google" as const, label: CONTACT.gmail, href: `mailto:${CONTACT.gmail}` },
  { icon: "web" as const, label: CONTACT.website, href: `https://${CONTACT.website}` },
  {
    icon: "whatsapp" as const,
    label: CONTACT.phone,
    href: CONTACT.whatsappHref,
    external: true,
  },
  { icon: "phone" as const, label: CONTACT.phone, href: CONTACT.phoneHref },
  { icon: "clock" as const, label: CONTACT.hours },
  { icon: "map-pin" as const, label: CONTACT.address },
];

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden scroll-mt-20 bg-gray-50 py-20">
      <div
        className="pointer-events-none absolute -bottom-32 -right-32 -z-0 h-[420px] w-[420px] rounded-full bg-primary-100/60 blur-[100px]"
        aria-hidden="true"
      />

      <Container className="relative">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-dark sm:text-3xl">Contact Us</h2>
          <p className="mt-3 text-muted">
            Get in touch with us today! We&apos;re here to help with all your printing and
            publishing needs. Contact us for expert advice and quality service.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <StaggerGroup as="ul" className="space-y-4">
              {details.map((item, index) => (
                <StaggerItem key={index} as="li" className="flex items-start gap-3 text-sm">
                  <Icon name={item.icon} className="mt-0.5 h-5 w-5 flex-shrink-0 text-muted" />
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="font-medium text-dark transition-colors hover:text-primary-500"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span className="font-medium text-dark">{item.label}</span>
                  )}
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>

          <Reveal direction="right" delay={0.1} className="lg:col-span-7">
            <div className="rounded-xl bg-white p-6 shadow-card transition-shadow duration-300 hover:shadow-card-hover sm:p-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
