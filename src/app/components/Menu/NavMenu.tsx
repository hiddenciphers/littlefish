"use client";

import Button from "../Button/Button";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { scrollToSection } from "@/utils/scrollToSection";

interface NavMenuProps {
  onSelect?: () => void;
  delay?: number;
  isOpen?: boolean;
  onOpenLocations?: () => void;
  onOpenContact?: () => void;
}

const NavMenu = ({
  onSelect,
  delay = 0,
  isOpen = false,
  onOpenLocations,
  onOpenContact,
}: NavMenuProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  const handleNavClick = (label: string, id?: string) => {
    const isModal = label === "Locations" || label === "Contact";
    const delay = isModal ? 400 : 300;

    onSelect?.();

    setTimeout(() => {
      if (label === "Locations") {
        onOpenLocations?.();
      } else if (label === "Contact") {
        onOpenContact?.();
      } else if (id) {
        scrollToSection(id);
      }
      document.body.classList.remove("overflow-hidden");
    }, delay);
  };

  return (
    <motion.nav
      aria-label="Main navigation"
      id="mobile-navigation"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ delay, duration: 0.6 }}
    >
      <ul
        role="menubar"
        className="w-full md:w-auto text-lg flex flex-col justify-center items-center text-center md:flex-row md:gap-6 md:text-md xl:text-xl font-poppins text-light-text-primary dark:text-dark-text-primary bg-light-header-footer dark:bg-dark-header-footer md:bg-transparent rounded-b-md pb-2 md:pb-0 cursor-pointer"
      >
        {[
          { label: "About", id: "about" },
          { label: "Services", id: "services" },
          { label: "Locations", id: "locations" },
        ].map(({ label, id }) => (
          <li key={label} role="none">
            <button
              role="menuitem"
              type="button"
              onClick={() => handleNavClick(label, id)}
              className="w-full py-3 px-6 hover:text-light-text-primary-25 dark:hover:text-dark-text-primary-25 bg-transparent text-inherit text-left md:text-center cursor-pointer"
            >
              {label}
            </button>
          </li>
        ))}

        <li role="none" className="w-full px-2 flex justify-center">
          <Button
            role="menuitem"
            aria-label="Contact section"
            onClick={() => handleNavClick("Contact")}
          >
            Contact
          </Button>
        </li>
      </ul>
    </motion.nav>
  );
};

export default NavMenu;
