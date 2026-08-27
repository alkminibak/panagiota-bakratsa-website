import Container from "./Container";
import HandDrawnLink from "./HandDrawnLink";
import horizontalLoop from "../assets/horizontal-loop.svg";
import adultIcon from "../assets/adult-icon.png";
import adolescentIcon from "../assets/adolescent-icon.png";
import parentsIcon from "../assets/parents-icon.png";

const services = [
  {
    title: "Ατομική Ψυχοθεραπεία Ενηλίκων",
    description: "Κατανόηση, αλλαγή και προσωπική ανάπτυξη",
    icon: adultIcon,
    iconClassName: "h-20 w-20",
  },
  {
    title: "Ατομική Ψυχοθεραπεία Εφήβων",
    description: "Υποστήριξη στις προκλήσεις της εφηβείας",
    icon: adolescentIcon,
    iconClassName: "h-20 w-20",
  },
  {
    title: "Συμβουλευτική Γονέων",
    description: "Σύνδεση, επικοινωνία και στήριξη",
    icon: parentsIcon,
    iconClassName: "h-20 w-20 scale-120 translate-y-1.5",
  },
];

const ServicesPreview = () => {
  return (
    <section className="bg-background">
      <Container>
        {/* Section title */}
        <div className="mb-4 flex items-center gap-6 pl-16">
          <h2 className="text-4xl font-medium text-brand">Υπηρεσίες</h2>

          <img
            src={horizontalLoop}
            alt=""
            aria-hidden="true"
            className="pointer-events-none w-[600px]"
          />
        </div>

        {/* Services */}
        <div className="bg-brand/8 px-10 py-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex min-h-[270px] flex-col items-center bg-background px-8 py-8 text-center"
              >
                {/* Icon */}
                <div className="mb-4 flex h-20 items-center justify-center">
                  <img
                    src={service.icon}
                    alt=""
                    aria-hidden="true"
                    className={`${service.iconClassName} object-contain`}
                  />
                </div>

                {/* Title */}
                <div className="mb-3 flex h-16 items-center justify-center">
                  <h3 className="max-w-xs text-2xl font-medium leading-snug text-brand">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="max-w-xs text-base leading-relaxed text-brand/80">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Services link */}
          <div className="mt-8 flex justify-end">
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
