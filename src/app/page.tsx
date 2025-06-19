// src/app/page.tsx
"use client";

import { useState } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Sections from "./components/Sections/Sections";
import CTA from "./components/CTA/CTA";
import Footer from "./components/Footer/Footer";
import ContactFormModal from "./components/Modals/Contact/ContactModal";
import { useOverlayStore } from "@/store/overlayStore";

export default function Home() {
  const { isOverlayActive } = useOverlayStore();
  const [showContact, setShowContact] = useState(false);

  return (
    <>
      <Header onOpenContact={() => setShowContact(true)} />
      <Hero isHidden={isOverlayActive} />

      <main role="main">
        <Sections isHidden={isOverlayActive} />
        <CTA
          isHidden={isOverlayActive}
          onEnquire={() => setShowContact(true)}
        />
      </main>

      <ContactFormModal
        isOpen={showContact}
        onClose={() => setShowContact(false)}
      />
      <Footer />
    </>
  );
}
