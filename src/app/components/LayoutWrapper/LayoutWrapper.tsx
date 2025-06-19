// src/app/components/LayoutWrapper/LayoutWrapper.tsx

"use client";

import { ReactNode, useEffect } from "react";
import { useOverlayStore } from "@/store/overlayStore";

export default function LayoutWrapper({ children }: { children: ReactNode }) {
  const { isOverlayActive } = useOverlayStore();

  useEffect(() => {
    // Cleanup any stuck modal class on reload
    if (!isOverlayActive) {
      document.body.classList.remove("modal-open");
    }
  }, [isOverlayActive]);

  return <div>{children}</div>;
}
