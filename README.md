# Sthiratha — Press & Digital Printing Website

A fast, SEO-friendly marketing website for **Sthiratha Press & Digital Printing**, a Kozhikode-based printing house offering digital & offset printing, binding, ID card printing, DTP, and office stationery services.

Live focus: a modern, animated, mobile-first site that converts visitors into WhatsApp/phone/email inquiries.

---

## ✨ Features

- Animated hero slider showcasing core services
- Services showcase grid with individual service pages content
- "Our Process" section explaining the workflow
- Contact section with a working contact form (emails sent via EmailJS — no backend required)
- Sticky header, scroll progress bar, and "back to top" button
- SEO essentials built in: dynamic metadata, Open Graph tags, JSON-LD `LocalBusiness` structured data, `sitemap.xml`, and `robots.txt`
- Fully responsive design, built with reusable UI components

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Framework | [Next.js 15](https://nextjs.org/) (App Router) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| UI Library | [React 19](https://react.dev/) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| Animations | [Framer Motion](https://www.framer.com/motion/) |
| Contact Form | [EmailJS](https://www.emailjs.com/) (`@emailjs/browser`) — sends emails directly from the client |
| Linting | ESLint (`eslint-config-next`) |
| Package Manager | npm |

---

## 📁 Folder Structure

```
sthiratha-nextjs/
├── public/                      # Static assets served as-is
│   ├── favicon.ico
│   ├── icons/
│   └── images/
│       ├── home/                # Images used on the homepage
│       ├── services/            # Images for each service
│       └── blog/
│
├── src/
│   ├── app/                     # Next.js App Router — pages, layouts & routes
│   │   ├── layout.tsx           # Root layout: fonts, metadata, structured data, header/footer
│   │   ├── page.tsx             # Homepage
│   │   ├── globals.css          # Global styles / Tailwind entry point
│   │   ├── not-found.tsx        # Custom 404 page
│   │   ├── robots.ts            # Generates robots.txt
│   │   ├── sitemap.ts           # Generates sitemap.xml
│   │   └── aboutUs-details/
│   │       └── page.tsx         # "About Us" page
│   │
│   ├── components/
│   │   ├── layout/               # Site-wide layout pieces
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── ScrollProgress.tsx
│   │   │   └── BackToTop.tsx
│   │   ├── sections/             # Homepage sections
│   │   │   ├── HeroSlider.tsx
│   │   │   ├── Process.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── ContactForm.tsx
│   │   ├── motion/                # Reusable scroll/animation wrappers
│   │   │   ├── Reveal.tsx
│   │   │   └── Stagger.tsx
│   │   └── ui/                    # Generic, reusable UI building blocks
│   │       ├── Button.tsx
│   │       ├── Container.tsx
│   │       ├── Icon.tsx
│   │       └── Breadcrumbs.tsx
│   │
│   ├── data/                     # Static content, kept separate from components
│   │   ├── hero-slides.ts
│   │   ├── process.ts
│   │   └── services.ts
│   │
│   ├── lib/
│   │   └── constants.ts          # Site info, contact details, nav links (single source of truth)
│   │
│   └── types/                    # Shared TypeScript types
│
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.mjs
└── package.json
```

**Design philosophy:** content (`data/`) is kept separate from presentation (`components/`), and shared values like contact info and navigation links live in one place (`lib/constants.ts`) so updating them updates the whole site.

---

## 🚀 Getting Started

**Prerequisites:** Node.js 18.18+ and npm.

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Other scripts

```bash
npm run build   # Production build
npm run start   # Serve the production build
npm run lint    # Run ESLint
```

---

## 📬 Contact Form Setup

The contact form ([ContactForm.tsx](src/components/sections/ContactForm.tsx)) uses **EmailJS** to send messages without a custom backend. To make it work in your own environment, you'll need to add your EmailJS Service ID, Template ID, and Public Key (typically via environment variables).

---

## 📄 License

This project is private and built for Sthiratha Press & Digital Printing.
