"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LittleFishLogo from "../../Logo/Logo";
import { useOverlayStore } from "@/store/overlayStore";

interface LocationsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LocationsModal({
  isOpen,
  onClose,
}: LocationsModalProps) {
  const { setOverlayActive } = useOverlayStore();

  useEffect(() => {
    setOverlayActive(isOpen);
    document.body.classList.toggle("overflow-hidden", isOpen);
    return () => {
      setOverlayActive(false);
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen, setOverlayActive]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="locationsModal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-light-header-footer/30 dark:bg-dark-header-footer/30 flex items-center justify-center backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-labelledby="locations-modal-heading"
          aria-describedby="locations-modal-description"
        >
          <div className="relative bg-modal-background rounded-xl shadow-xl p-6 w-full mx-2 md:w-120 h-fit flex flex-col items-center text-center gap-5">
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-4 right-4 text-dark-text-primary hover:text-dark-text-primary-25 cursor-pointer"
            >
              <X size={24} />
            </button>

            <h2
              id="locations-modal-heading"
              className="text-xl md:text-1xl font-medium font-inter text-og-blue"
            >
              LOCATIONS
            </h2>

            <p
              id="locations-modal-description"
              className="text-base md:text-1xl font-poppins font-semibold tracking-wide md:tracking-wider text-dark-text-primary"
            >
              Contact Your Local Office
            </p>

            <div className="w-full h-fit flex justify-around text-dark-text-primary mt-5">
              <div
                className="flex flex-col items-center justify-center"
                role="group"
                aria-label="Tamworth office contact"
              >
                <LittleFishLogo delay={0} />
                <p className="font-inter font-semibold mt-1">Tamworth</p>
                <p className="font-thin text-dark-background dark:text-dark-text-secondary cursor-pointer">
                  <a href="tel:0401721723" aria-label="Call Tamworth office">
                    0401-721-723
                  </a>
                </p>
              </div>
              <div
                className="flex flex-col items-center justify-center"
                role="group"
                aria-label="Yamba office contact"
              >
                <LittleFishLogo delay={0} />
                <p className="font-inter font-semibold mt-1">Yamba</p>
                <p className="font-thin text-dark-background dark:text-dark-text-secondary cursor-pointer">
                  <a href="tel:0401721723" aria-label="Call Yamba office">
                    0401-721-723
                  </a>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
