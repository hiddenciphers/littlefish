// src/app/components/Sections/Sections.tsx
import Section from "./Section/Section";
import AboutSection from "./About/AboutSection";
import ServicesSection from "./Products/ServicesSection";
import TestimonialsSection from "./Testimonials/TestimonialsSection";

interface SectionsProps {
  isHidden: boolean;
}

const Sections = ({ isHidden }: SectionsProps) => {
  if (isHidden) return null;

  return (
    <>
      <Section
        id="about"
        heading="ABOUT"
        headingId="section-heading-about"
        subheading="Everything you need in a modern accounting firm."
      >
        <AboutSection />
      </Section>

      <Section
        id="services"
        heading="SERVICES"
        headingId="section-heading-services"
        subheading="Everything as simple as possible."
      >
        <ServicesSection />
      </Section>

      <Section
        id="testimonials"
        heading="NOT SURE YET?"
        headingId="section-heading-testimonials"
        subheading="Our team of friendly professionals are already making clients lives simpler."
      >
        <TestimonialsSection />
      </Section>
    </>
  );
};

export default Sections;
