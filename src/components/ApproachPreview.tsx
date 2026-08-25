import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import Container from "./Container";

const ApproachPreview = () => {
  return (
    <section className="bg-surface py-20">
      <Container>
        <div className="grid grid-cols-[minmax(180px,0.7fr)_minmax(0,1.6fr)] items-start gap-14">
          <div aria-hidden="true" className="pt-5">
            <div className="h-[2px] w-full bg-brand" />
          </div>

          <div className="relative max-w-3xl">
            <h2 className="text-3xl font-semibold text-brand">
              Θεραπευτική Προσέγγιση
            </h2>

            <div className="mt-6 space-y-4 text-lg leading-8 text-text">
              <p>
                Η θεραπευτική διαδικασία βασίζεται στη συνεργασία θεραπευτή και
                θεραπευόμενου, με στόχο την καλύτερη κατανόηση των σκέψεων, των
                συναισθημάτων και των συμπεριφορών που συνδέονται με τις
                δυσκολίες της καθημερινότητας.
              </p>

              <p>
                Η προσέγγιση προσαρμόζεται στις προσωπικές ανάγκες και στους
                στόχους του κάθε ανθρώπου, με σεβασμό στον δικό του ρυθμό και
                στη μοναδικότητα της εμπειρίας του.
              </p>
            </div>

            <Link
              to="/approach"
              aria-label="Περισσότερα για τη θεραπευτική προσέγγιση"
              className="mt-7 inline-flex items-center gap-2 font-medium text-brand transition-transform hover:translate-x-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
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

export default ApproachPreview;
