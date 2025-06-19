"use client";

import { useEffect, useState, useCallback } from "react";
import { X, Briefcase, Handshake } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../../Button/Button";
import LittleFishLogo from "../../Logo/Logo";
import { useOverlayStore } from "@/store/overlayStore";
import { scrollToSection } from "@/utils/scrollToSection";

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactFormModal({
  isOpen,
  onClose,
}: ContactFormModalProps) {
  const { setOverlayActive } = useOverlayStore();
  const [isFranchisee, setIsFranchisee] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [form, setForm] = useState({ fullName: "", email: "", phone: "" });

  useEffect(() => {
    setOverlayActive(isOpen);
    return () => setOverlayActive(false);
  }, [isOpen, setOverlayActive]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleClose = useCallback(() => {
    onClose();
    setOverlayActive(false);
    setTimeout(() => scrollToSection("header"), 0);
    setSubmissionSuccess(false);
  }, [onClose, setOverlayActive]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const enquiryType = isFranchisee ? "Franchisee" : "Accountant";

    try {
      const response = await fetch("https://formspree.io/f/mkgbzzpq", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: form.fullName,
          email: form.email,
          phone: form.phone,
          enquiryType,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmissionSuccess(true);
      } else {
        console.error("Formspree error:", result);
      }
    } catch (error) {
      console.error("Submission failed:", error);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="contactModal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-light-header-footer/30 dark:bg-dark-header-footer/30 flex items-center justify-center backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
        >
          <div className="relative bg-modal-background rounded-xl shadow-xl p-6 w-full mx-2 md:w-120 h-110 flex flex-col items-center text-center gap-5">
            <button
              onClick={handleClose}
              aria-label="Close contact form"
              className="absolute top-4 right-4 text-dark-card-background hover:text-dark-input-stroke dark:text-dark-text-primary dark:hover:text-dark-text-primary-25 cursor-pointer"
            >
              <X size={24} />
            </button>

            <h2
              id="contact-modal-title"
              className="text-xl md:text-1xl font-medium font-inter text-og-blue"
            >
              CONTACT
            </h2>

            <AnimatePresence mode="wait">
              {submissionSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center justify-center gap-8 mt-14 pointer-events-none"
                  aria-live="polite"
                >
                  <LittleFishLogo height={110} loop />
                  <p className="text-xl font-inter font-semibold text-dark-text-primary">
                    We&apos;ll be in contact shortly.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="w-full flex flex-col gap-4 dark:text-dark-text-primary"
                  aria-describedby="contact-form-description"
                >
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    placeholder="Full Name"
                    value={form.fullName}
                    onChange={handleChange}
                    required
                    aria-label="Full name"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-og-green bg-dark-text-primary dark:bg-dark-card-background dark:border-gray-600"
                  />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    aria-label="Email address"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-og-green bg-dark-text-primary dark:bg-dark-card-background dark:border-gray-600"
                  />
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="Phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    aria-label="Phone number"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-og-green bg-dark-text-primary dark:bg-dark-card-background dark:border-gray-600"
                  />

                  {/* Nature of Enquiry */}
                  <fieldset>
                    <legend className="sr-only">Nature of Enquiry</legend>
                    <div className="flex flex-col gap-3">
                      <label className="text-sm font-medium text-center text-light-text-primary dark:text-dark-text-primary">
                        Nature of Enquiry
                      </label>
                      <div
                        className="flex items-center justify-center gap-10"
                        role="radiogroup"
                      >
                        {/* Accountant */}
                        <div className="flex flex-col gap-1 items-center justify-end h-20">
                          <motion.div
                            whileTap={{ scale: 0.9 }}
                            whileHover={{ scale: 1.05 }}
                            animate={{ scale: isFranchisee ? 0.8 : 1 }}
                            className={`w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 mb-1 ${
                              !isFranchisee
                                ? "bg-og-blue text-white"
                                : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                            }`}
                            onClick={() => setIsFranchisee(false)}
                            role="radio"
                            aria-checked={!isFranchisee}
                            aria-label="Accountant"
                            tabIndex={0}
                          >
                            <Briefcase size={20} />
                          </motion.div>
                          <span className="text-sm font-light leading-none">
                            Accountant
                          </span>
                        </div>

                        {/* Toggle */}
                        <label className="relative inline-flex items-center -mt-3 cursor-pointer">
                          <span className="sr-only">
                            Toggle between Accountant and Franchisee
                          </span>
                          <input
                            type="checkbox"
                            name="enquiryType"
                            checked={isFranchisee}
                            value={isFranchisee ? "Franchisee" : "Accountant"}
                            onChange={() => setIsFranchisee((prev) => !prev)}
                            className="sr-only peer"
                          />
                          <div className="w-12 h-6 bg-gray-300 rounded-full relative transition-all duration-300">
                            <div
                              className={`absolute top-1 left-1 w-4 h-4 rounded-full transition-transform duration-300 ${
                                isFranchisee ? "bg-og-red" : "bg-og-yellow"
                              }`}
                              style={{
                                transform: isFranchisee
                                  ? "translateX(24px)"
                                  : "translateX(0px)",
                              }}
                            />
                          </div>
                        </label>

                        {/* Franchisee */}
                        <div className="flex flex-col gap-1 items-center justify-end h-20">
                          <motion.div
                            whileTap={{ scale: 0.9 }}
                            whileHover={{ scale: 1.05 }}
                            animate={{ scale: isFranchisee ? 1 : 0.8 }}
                            className={`w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 mb-1 ${
                              isFranchisee
                                ? "bg-og-blue text-white"
                                : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                            }`}
                            onClick={() => setIsFranchisee(true)}
                            role="radio"
                            aria-checked={isFranchisee}
                            aria-label="Franchisee"
                            tabIndex={0}
                          >
                            <Handshake size={20} />
                          </motion.div>
                          <span className="text-sm font-light leading-none">
                            Franchisee
                          </span>
                        </div>
                      </div>
                    </div>
                  </fieldset>

                  <Button type="submit" color="green">
                    Submit
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
