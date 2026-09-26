"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "@/components/ui/Icon";
import { HEADER_SOCIAL_LINKS, CONTACT } from "@/lib/constants";
import { assetPath } from "@/lib/asset-path";

const SECTION_IDS = ["home", "services", "contact"];

const NAV_LINKS = [
  { href: "/#home", label: "Home", key: "home" },
  { href: "/#services", label: "Our Services", key: "services" },
  { href: "/aboutUs-details", label: "About Us", key: "about" },
  { href: "/#contact", label: "Contact", key: "contact" },
];

export function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();
  const isAboutPage = pathname === "/aboutUs-details";

  useEffect(() => {
    const onScroll = () => setIsSticky(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lightweight scroll-spy: replaces the Angular appScrollspy directive.
  useEffect(() => {
    if (pathname !== "/") return;

    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => Boolean(el)
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  const activeKey = isAboutPage ? "about" : activeSection;

  return (
    <header
      id="navbar"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-400 ease-premium ${
        isSticky
          ? "glass border-b border-gray-100 shadow-soft"
          : "border-b border-transparent bg-white/95"
      }`}
    >
      <div
        className={`mx-auto flex max-w-8xl items-center justify-between px-4 sm:px-6 lg:px-8 transition-all duration-400 ease-premium ${
          isSticky ? "py-2.5" : "py-3"
        }`}
      >
        <Link href="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
          <Image
            src={assetPath("/images/sthiratha-logo.png")}
            alt="Sthiratha logo"
            width={110}
            height={50}
            priority
            className="h-10 w-auto transition-transform duration-300 ease-premium sm:h-12"
          />
        </Link>

        <button
          type="button"
          className="rounded-md p-2 text-dark transition-colors hover:bg-gray-100 lg:hidden"
          aria-controls="primary-navigation"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <Icon name={isMenuOpen ? "close" : "menu"} className="h-6 w-6" />
        </button>

        <nav className="hidden lg:static lg:flex lg:items-center lg:border-0 lg:bg-transparent lg:p-0">
          <ul className="flex flex-col gap-1 pt-2 lg:flex-row lg:items-center lg:gap-6 lg:pt-0">
            {NAV_LINKS.map((link) => {
              const isActive = activeKey === link.key;
              return (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`group relative block rounded-md px-2 py-2 text-sm font-medium transition-colors lg:px-0 ${
                      isActive ? "text-primary-500" : "text-dark hover:text-primary-500"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-0.5 left-2 right-2 hidden h-0.5 origin-left rounded-full bg-primary-500 transition-transform duration-300 ease-premium lg:block ${
                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <ul className="mt-4 flex items-center gap-2.5 lg:ml-6 lg:mt-0 lg:border-l lg:border-gray-200 lg:pl-6">
            {HEADER_SOCIAL_LINKS.map((social) => {
              const isWhatsApp = social.icon === "whatsapp";
              return (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={social.label}
                    className={`inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-dark/60 transition-all duration-200 ease-premium hover:-translate-y-0.5 hover:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                      isWhatsApp
                        ? "hover:border-emerald-500 hover:bg-emerald-50 hover:text-emerald-600 focus-visible:ring-emerald-500"
                        : "hover:border-primary-500 hover:bg-primary-50 hover:text-primary-600 focus-visible:ring-primary-500"
                    }`}
                  >
                    <Icon name={social.icon as any} className="h-4 w-4" />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Animated mobile menu. AnimatePresence renders no DOM node of its
            own when closed, so — unlike a wrapping <div> — it never becomes
            an empty flex item that would throw off the header's
            justify-between spacing. */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              id="primary-navigation"
              key="mobile-nav"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-x-0 top-full overflow-hidden border-t border-gray-100 bg-white px-4 pb-4 lg:hidden"
              aria-label="Mobile navigation"
            >
              <ul className="flex flex-col gap-1 pt-2">
                {NAV_LINKS.map((link) => {
                  const isActive = activeKey === link.key;
                  return (
                    <li key={link.key}>
                      <Link
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block rounded-md px-2 py-2 text-sm font-medium transition-colors ${
                          isActive ? "text-primary-500" : "text-dark hover:text-primary-500"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-4 grid grid-cols-2 gap-3 border-t border-gray-100 pt-4">
                {HEADER_SOCIAL_LINKS.map((social) => {
                  const isWhatsApp = social.icon === "whatsapp";
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target={social.href.startsWith("http") ? "_blank" : undefined}
                      rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      onClick={() => setIsMenuOpen(false)}
                      className={`inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold transition-all duration-200 ease-premium active:scale-[0.98] ${
                        isWhatsApp
                          ? "border border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white"
                          : "bg-primary-500 text-white hover:bg-primary-700"
                      }`}
                    >
                      <Icon name={social.icon as any} className="h-4 w-4" />
                      {isWhatsApp ? "WhatsApp" : "Call"}
                    </a>
                  );
                })}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

export const HEADER_CONTACT = CONTACT;
