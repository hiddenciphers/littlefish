import Button from "../Button/Button";

interface CTAProps {
  onEnquire: () => void;
  isHidden: boolean;
}

const CTA = ({ onEnquire, isHidden }: CTAProps) => {
  if (isHidden) return null;

  return (
    <section
      id="CTA"
      aria-labelledby="cta-heading"
      className="flex flex-col items-center text-center gap-6 mt-10 mb-6"
    >
      <h3
        id="cta-heading"
        className="font-poppins font-bold w-80 md:w-200 flex flex-col leading-10 text-light-text-primary dark:text-dark-text-primary text-xl md:text-3xl"
      >
        Start Your Own Accounting Franchise with LittleFish - Simplify Your
        Future Today!
      </h3>

      <div className="w-full flex justify-center">
        <div className="w-40">
          <Button
            color="green"
            onClick={onEnquire}
            aria-label="Enquire about joining the team"
          >
            Enquire Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
