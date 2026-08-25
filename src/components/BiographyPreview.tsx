import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import biographyImage from "../assets/biography-detail.jpg";
import Container from "./Container";

const BiographyPreview = () => {
  return (
    <section className="bg-background py-20">
      <Container>
        <div className="grid grid-cols-[minmax(0,1fr)_280px] items-center gap-20">
          <div className="relative pl-8">
            <span
              aria-hidden="true"
              className="absolute left-0 top-0 h-24 w-[2px] bg-brand"
            />

            <span
              aria-hidden="true"
              className="absolute left-0 top-0 h-[2px] w-20 bg-brand"
            />

            <h2 className="pt-8 text-3xl font-semibold text-brand">
              Βιογραφικό
            </h2>

            <div className="mt-6 max-w-3xl space-y-4 text-lg leading-8 text-text">
              <p>
                Η Παναγιώτα Μπακρατσά είναι Ψυχολόγος - Ψυχοθεραπεύτρια και
                παρέχει υπηρεσίες ψυχοθεραπείας και συμβουλευτικής σε ενήλικες
                και γονείς.
              </p>

              <p>
                Η επαγγελματική της πορεία και η συνεχής εκπαίδευσή της έχουν ως
                στόχο τη δημιουργία ενός ασφαλούς και υποστηρικτικού
                θεραπευτικού πλαισίου, προσαρμοσμένου στις ανάγκες κάθε
                ανθρώπου.
              </p>
            </div>

            <Link
              to="/about"
              aria-label="Περισσότερα για το βιογραφικό"
              className="mt-7 inline-flex items-center gap-2 font-medium text-brand transition-transform hover:translate-x-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
            >
              Περισσότερα
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -left-6 top-6 -bottom-6 -right-16 border-b-2 border-l-2 border-brand"
            >
              <span className="absolute -right-[2px] top-full h-24 w-[2px] bg-brand" />
            </div>

            <img
              src={biographyImage}
              alt="Λεπτομέρεια από το ψυχολογικό γραφείο με φυτό και επαγγελματική κάρτα"
              className="relative aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BiographyPreview;
