import Container from "./Container";
import HandDrawnLink from "./HandDrawnLink";

const ApproachPreview = () => {
  return (
    <section className="relative bg-surface pb-10">
      <Container>
        <div className="grid grid-cols-[220px_minmax(0,1fr)] items-start gap-14">
          <div aria-hidden="true" />

          <div className="max-w-4xl">
            <h2 className="mb-8 text-4xl font-medium text-brand">
              Θεραπευτική Προσέγγιση
            </h2>

            <div className="space-y-4 text-lg leading-8 text-text">
              <p>
                Η Γνωσιακή Συμπεριφορική Ψυχοθεραπεία αποτελεί μια επιστημονικά
                τεκμηριωμένη μορφή ψυχοθεραπείας. Η αποτελεσματικότητά της έχει
                αποδειχθεί σε ένα ευρύ φάσμα ψυχολογικών δυσκολιών, όπως το
                άγχος, οι δυσκολίες που σχετίζονται με τη διάθεση, τα διατροφικά
                προβλήματα και το πένθος.
              </p>

              <p>
                Βασίζεται στην αντίληψη ότι ο τρόπος με τον οποίο ένα άτομο
                αντιλαμβάνεται και ερμηνεύει όσα συμβαίνουν στη ζωή του
                επηρεάζει τα συναισθήματα και τη συμπεριφορά του. Μέσα από αυτή
                τη σύνδεση, συγκεκριμένοι τρόποι σκέψης και συμπεριφοράς μπορεί
                να συμβάλλουν στη δημιουργία ή στη διατήρηση των ψυχολογικών
                δυσκολιών που αντιμετωπίζει.
              </p>
            </div>

            <HandDrawnLink
              to="/approach"
              ariaLabel="Περισσότερα για τη θεραπευτική προσέγγιση"
              className="mt-8"
            >
              Δείτε περισσότερα
            </HandDrawnLink>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ApproachPreview;
