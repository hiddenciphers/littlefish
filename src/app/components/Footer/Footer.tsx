import LittleFishLogo from "../Logo/Logo";
import { scrollToSection } from "@/utils/scrollToSection";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-light-header-footer dark:bg-dark-header-footer p-10 mt-30 w-full h-fit flex flex-col items-center gap-4"
      aria-labelledby="footer-heading"
    >
      <LittleFishLogo
        delay={0}
        onClick={() => scrollToSection("header")}
        aria-label="Back to top"
      />
      <p
        id="footer-heading"
        className="text-xs text-light-text-secondary text-center"
      >
        © World Class Web Solutions 2025
      </p>
    </footer>
  );
};

export default Footer;
