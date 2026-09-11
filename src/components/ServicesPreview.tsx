import Container from "./Container";
import HandDrawnLink from "./HandDrawnLink";
import horizontalLoop from "../assets/horizontal-loop.svg";
import adultIcon from "../assets/adult-icon.png";
import adolescentIcon from "../assets/adolescent-icon.png";
import parentsIcon from "../assets/parents-icon.png";
import AnimatedLine from "./AnimatedLine";

const services = [
  {
    title: "Ατομική Ψυχοθεραπεία Ενηλίκων",
    description: "Κατανόηση, αλλαγή και προσωπική ανάπτυξη",
    icon: adultIcon,
    iconClassName: "h-14 w-14 md:h-16 md:w-16 xl:h-20 xl:w-20",
  },
  {
    title: "Ατομική Ψυχοθεραπεία Εφήβων",
    description: "Υποστήριξη στις προκλήσεις της εφηβείας",
    icon: adolescentIcon,
    iconClassName: "h-14 w-14 md:h-16 md:w-16 xl:h-20 xl:w-20",
  },
  {
    title: "Συμβουλευτική Γονέων",
    description: "Σύνδεση, επικοινωνία και στήριξη",
    icon: parentsIcon,
    iconClassName:
      "h-14 w-14 scale-120 translate-y-1 md:h-16 md:w-16 xl:h-20 xl:w-20 xl:translate-y-1.5",
  },
];

const ServicesPreview = () => {
  return (
    <section className="bg-background pt-4 md:pt-6 xl:pt-0">
      <Container>
        {/* Section title */}
        <div className="mb-6 flex items-center gap-3 pl-8 md:mb-4 md:gap-5 md:pl-12 xl:gap-6 xl:pl-16">
          <h2 className="shrink-0 text-[26px] font-medium text-brand md:text-[30px] xl:text-4xl">
            Υπηρεσίες
          </h2>

          {/* Mobile: cropped version of the same line */}
          <div
            aria-hidden="true"
            className="relative h-12 w-[185px] overflow-hidden md:hidden"
          >
            <AnimatedLine
              src={horizontalLoop}
              duration={1200}
              className="pointer-events-none absolute -left-[126px] -top-1 w-[340px] max-w-none"
            />
          </div>

          {/* Tablet / desktop: full line */}
          <AnimatedLine
            src={horizontalLoop}
            duration={1200}
            className="pointer-events-none hidden min-w-0 flex-1 max-w-[600px] md:block"
          />
        </div>

        {/* Services */}
        <div className="mx-8 bg-brand/8 px-4 py-6 md:mx-0 md:px-6 md:py-8 lg:px-8 xl:px-10 xl:py-10">
          <div className="grid grid-cols-1 gap-5 md:gap-6 lg:grid-cols-3 lg:gap-6 xl:gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="mx-2 flex min-h-[200px] flex-col items-center bg-background px-5 py-5 text-center md:mx-0 md:min-h-[235px] md:px-8 md:py-7 xl:min-h-[270px] xl:py-8"
              >
                {/* Icon */}
                <div className="mb-3 flex h-14 items-center justify-center md:h-16 xl:mb-4 xl:h-20">
                  <img
                    src={service.icon}
                    alt=""
                    aria-hidden="true"
                    className={`${service.iconClassName} object-contain`}
                  />
                </div>

                {/* Title */}
                <div className="mb-2 flex min-h-14 items-center justify-center xl:mb-3 xl:h-16">
                  <h3 className="max-w-xs text-[18px] font-medium leading-snug text-brand md:text-[22px] xl:text-2xl">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="max-w-xs text-sm italic leading-6 text-brand/80 md:text-base md:leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Services link */}
          <div className="mt-6 mr-2 flex justify-end md:mr-0 xl:mt-8">
            <HandDrawnLink
              to="/services"
              ariaLabel="Περισσότερα για τις υπηρεσίες"
            >
              Δείτε περισσότερα
            </HandDrawnLink>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServicesPreview;
