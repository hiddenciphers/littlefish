// src/app/store/overlayStore.ts

import { create } from "zustand";

interface OverlayState {
  isOverlayActive: boolean;
  setOverlayActive: (active: boolean) => void;
}

export const useOverlayStore = create<OverlayState>((set) => ({
  isOverlayActive: false,
  setOverlayActive: (active: boolean) => {
    // Apply/remove class on document.body
    if (typeof window !== "undefined") {
      if (active) {
        document.body.classList.add("modal-open");
      } else {
        document.body.classList.remove("modal-open");
      }
    }
    set({ isOverlayActive: active });
  },
}));
