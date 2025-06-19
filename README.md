# 🐟 LittleFish Accounting | Franchise Landing Site

Welcome to the official source code for **LittleFish Accounting's franchise opportunity landing page** — a fast, accessible, SEO-optimized, and mobile-first React/Next.js web app built with Tailwind CSS and Framer Motion.

---

## 🔍 Overview

LittleFish Accounting is expanding its national franchise network and empowering small business accountants to succeed with brand strength and full support.

This responsive landing page was built to convert potential franchisees and clients by combining animation, performance, accessibility, and clear calls to action.

---

## 🚀 Features

- ✅ **WCAG-compliant accessibility**
- ⚡ **Framer Motion animations** across all components
- 🎯 **Search Engine Optimization (SEO)**
  - OpenGraph & Twitter meta tags
  - JSON-LD structured data for FAQ and LocalBusiness
  - Canonical links and Apple/Android icons
- 📱 **Fully responsive** mobile-first layout
- 🧠 **Zustand global state** for overlay/modal control
- 📨 **Contact modal form** with Formspree integration
- 📍 Local business locations: Tamworth and Yamba, Australia
- 🌐 Deployed on [Vercel](https://vercel.com/)

---

## 🛠️ Built With

- [Next.js 14+](https://nextjs.org/)
- [React 18](https://reactjs.org/)
- [Tailwind CSS 3](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React](https://lucide.dev/)
- [Formspree](https://formspree.io/)
- [Zustand](https://github.com/pmndrs/zustand)

---

## 📁 Folder Structure

```bash
src/
│
├── app/
│   ├── components/          # All UI components
│   ├── Modals/              # Contact & Location modals
│   ├── sections/            # Hero, About, Services, CTA, Footer
│   ├── utils/               # Utility functions (e.g., scrollToSection)
│   ├── store/               # Zustand global store (overlay control)
│   ├── layout.tsx          # Metadata, SEO tags, wrapper
│   └── page.tsx            # App entry
```

## 📸 Open Graph Image

**Ensure /public/og-image.jpg is:**

- 1200×630 pixels

- Optimised and compressed

- Branded for LittleFish with franchise messaging

## 📦 Installation

### Clone repo

```
git clone https://github.com/hiddenciphers/littlefish.git

cd littlefish
```

### Install dependencies

```
npm install
```

### Run dev server

```
npm run dev
```

## 🔐 Environment Setup

This project uses Formspree for contact form handling. No .env needed unless extending functionality.

## ✅ Deployment

1. This project is deployed using Vercel. If the domain is managed via Cloudflare:

2. Deploy under a Vercel alias or temporary subdomain.

3. Fine-tune.

4. Once approved, point Cloudflare DNS to Vercel’s edge network.

5. Set the production domain in your Vercel settings.

## 🧠 Accessibility & SEO Strategy

- All interactive elements are keyboard and screen-reader accessible.

- Semantic HTML and ARIA roles ensure WCAG 2.1 AA compliance.

- SEO-optimized meta config in layout.tsx:

  - Metadata API

  - Open Graph + Twitter meta

  - JSON-LD for LocalBusiness + FAQs

- Custom 404 page

- Favicon and Apple touch icon configured

## 👨‍💻 Author

World Class Web Solutions

Built by [@hiddenciphers](https://www.github.com/hiddenciphers)

## 📝 License

This project is private and owned by LittleFish Accounting.

For licensing inquiries,
please contact: info@littlefishaccounting.com.au
