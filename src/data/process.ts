export type ProcessStep = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: "tell-us-your-idea",
    title: "Tell us your idea",
    description:
      "Begin your creative journey by sharing your vision with us. Whether it's a branding project, a print advertisement, or a sophisticated marketing campaign, our team is here to listen. You can reach us via our online contact form, email, or phone. Feel free to provide as much detail as possible, including your goals, target audience, and any design preferences or requirements.",
    image: "/images/work-1.webp",
  },
  {
    id: "consultation",
    title: "Consultation",
    description:
      "Once we receive your brief, we'll schedule a consultation to delve deeper into your project needs. This may be conducted over the phone, through a video call, or in person. During this meeting, we'll discuss your ideas in detail, propose initial concepts, and establish project timelines and budgets.",
    image: "/images/work-2.webp",
  },
  {
    id: "vision-to-final-product",
    title: "From Vision to Final Product",
    description:
      "Our process begins once we fully grasp your vision. Our team of skilled designers will then create initial drafts and prototypes, inviting your feedback to ensure every detail aligns with your expectations. This collaborative approach allows us to refine and perfect the designs through an iterative process, ensuring the final artwork fully meets your goals. Once you approve the designs, we prepare them for their final application, whether it be in print or digital format. Utilizing state of the art printing technology, we guarantee the highest quality for physical prints, while digital projects are optimized for maximum effectiveness across all platforms. Finally, we deliver the completed products to you tailored to meet the specific needs of your project either as digital downloads or physical copies, ensuring a seamless transition from concept to completion.",
    image: "/images/work-3.webp",
  },
];
