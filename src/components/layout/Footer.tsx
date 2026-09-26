import { Icon } from "@/components/ui/Icon";
import { FOOTER_LEGAL_LINKS, FOOTER_SOCIAL_LINKS } from "@/lib/constants";
import { BackToTop } from "@/components/layout/BackToTop";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-dark py-12 text-center">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-500/10 blur-[100px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-3">
          {FOOTER_SOCIAL_LINKS.map((social) => {
            const isWhatsApp = social.icon === "whatsapp";
            return (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`inline-flex items-center justify-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-200 ease-premium hover:-translate-y-0.5 active:translate-y-0 ${
                  isWhatsApp
                    ? "border-emerald-500/40 text-emerald-400 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white"
                    : "border-primary-500/40 text-primary-400 hover:border-primary-500 hover:bg-primary-500 hover:text-white"
                }`}
              >
                <Icon name={social.icon as any} className="h-4 w-4" />
                {isWhatsApp ? "WhatsApp" : "Call us"}
              </a>
            );
          })}
        </div>

        <ul className="mb-0 mt-6 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm">
          {FOOTER_LEGAL_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="relative text-white/60 transition-colors hover:text-white after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-white/60 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-6 mb-0 text-sm text-white/50">
          {year} &copy; Sthiratha &mdash; Design with{" "}
          <span aria-hidden="true" className="text-red-500">
            &hearts;
          </span>{" "}
          by{" "}
          <a
            href="https://raeeznazar.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 transition-colors hover:text-white"
          >
            Raeez Nazar
          </a>
        </p>
      </div>

      <BackToTop />
    </footer>
  );
}
