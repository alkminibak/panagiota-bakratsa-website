import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import Container from "./Container";

const services = [
  "Ατομική Ψυχοθεραπεία",
  "Συμβουλευτική Γονέων",
  "Αυτογνωσία / Προσωπική Ανάπτυξη",
];

const ServicesPreview = () => {
  return (
    <section className="bg-background py-20">
      <Container>
        <div className="flex items-center gap-8">
          <h2 className="shrink-0 text-3xl font-semibold text-brand">
            Υπηρεσίες
          </h2>

          <div aria-hidden="true" className="h-[2px] flex-1 bg-brand" />
        </div>

        <div className="mt-10 bg-brand/8 px-10 py-10">
          <div className="grid grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service}
                className="relative flex min-h-32 items-center px-4"
              >
                <h3 className="max-w-xs text-2xl font-medium leading-snug text-brand">
                  {service}
                </h3>

                {index !== services.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute right-0 top-1/2 h-10 w-[2px] -translate-y-1/2 bg-brand/30"
                  />
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-end">
            <Link
              to="/services"
              aria-label="Περισσότερα για τις υπηρεσίες"
              className="inline-flex items-center gap-2 font-medium text-brand transition-transform hover:translate-x-1 hover:text-brand/80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
            >
              Περισσότερα
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServicesPreview;
