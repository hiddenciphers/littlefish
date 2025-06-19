"use client";

import { useState, useEffect } from "react";
import LittleFishLogo from "../Logo/Logo";
import MenuIcon from "../Menu/Menu";
import NavMenu from "../Menu/NavMenu";
import LocationsModal from "../Modals/Locations/LocationsModal";
import { motion, AnimatePresence } from "framer-motion";
import { useOverlayStore } from "@/store/overlayStore";
import { scrollToSection } from "@/utils/scrollToSection";

interface HeaderProps {
  onOpenContact: () => void;
}

const Header = ({ onOpenContact }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLocations, setShowLocations] = useState(false);
  const { setOverlayActive } = useOverlayStore();

  useEffect(() => {
    setOverlayActive(isOpen || showLocations);
  }, [isOpen, showLocations, setOverlayActive]);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <header
      id="header"
      aria-label="Site header and main navigation"
      className="h-fit p-5 md:px-10 w-full flex flex-col gap-2 justify-between items-center text-light-text-primary bg-light-header-footer dark:bg-dark-header-footer dark:text-dark-text-primary"
    >
      <div className="w-full flex flex-row justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <LittleFishLogo
            delay={1.2}
            onClick={() => scrollToSection("footer")}
            ariaLabel="Go to bottom of page"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="md:hidden"
        >
          <MenuIcon onClick={toggleDropdown} isOpen={isOpen} />
        </motion.div>

        <div className="hidden md:flex">
          <NavMenu
            delay={1.5}
            isOpen={isOpen}
            onSelect={() => setIsOpen(false)}
            onOpenLocations={() => {
              setShowLocations(true);
              setIsOpen(false);
            }}
            onOpenContact={() => {
              onOpenContact();
              setIsOpen(false);
            }}
          />
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
            className="fixed inset-0 top-[72px] z-40 bg-light-header-footer/30 dark:bg-dark-header-footer/30 backdrop-blur-md md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <NavMenu
              delay={0}
              isOpen={isOpen}
              onSelect={() => setIsOpen(false)}
              onOpenLocations={() => {
                setShowLocations(true);
                setIsOpen(false);
              }}
              onOpenContact={() => {
                onOpenContact();
                setIsOpen(false);
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {showLocations && (
        <LocationsModal
          isOpen={showLocations}
          onClose={() => setShowLocations(false)}
        />
      )}
    </header>
  );
};

export default Header;
