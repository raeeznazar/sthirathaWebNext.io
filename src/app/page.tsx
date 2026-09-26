import type { Metadata } from "next";
import { HeroSlider } from "@/components/sections/HeroSlider";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { Contact } from "@/components/sections/Contact";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${SITE.name} | Digital & Offset Printing, Binding, ID Cards in Kozhikode`,
  description: SITE.description,
  alternates: { canonical: "/" },
  openGraph: {
    url: SITE.url,
    title: `${SITE.name} | Digital & Offset Printing, Binding, ID Cards in Kozhikode`,
    description: SITE.description,
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <Process />
      <Services />
      <Contact />
    </>
  );
}
