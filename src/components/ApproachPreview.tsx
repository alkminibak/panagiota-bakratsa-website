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
                Η Γνωσιακή Συμπεριφορική Ψυχοθεραπεία αποτελεί μια επιστημονικά
                τεκμηριωμένη μορφή ψυχοθεραπείας. Η αποτελεσματικότητά της έχει
                αποδειχθεί σε ένα ευρύ φάσμα ψυχολογικών δυσκολιών, όπως το
                άγχος, οι δυσκολίες που σχετίζονται με τη διάθεση, τα διατροφικά
                προβλήματα και το πένθος.
              </p>

              <p>
                Βασίζεται στην αντίληψη ότι ο τρόπος με τον οποίο ένα άτομο
                σκέφτεται επηρεάζει τα συναισθήματα και τη συμπεριφορά του. Μέσα
                από αυτή τη σύνδεση, συγκεκριμένα μοτίβα σκέψης και συμπεριφοράς
                μπορεί να συμβάλλουν στη δημιουργία ή στη διατήρηση των
                δυσκολιών που αντιμετωπίζει.
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
