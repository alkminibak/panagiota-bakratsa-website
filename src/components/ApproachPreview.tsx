import Container from "./Container";
import HandDrawnLink from "./HandDrawnLink";

const ApproachPreview = () => {
  return (
    <section className="relative bg-surface pt-8 pb-10 md:pt-16 lg:pt-10 xl:pt-0">
      <Container>
        <div className="grid grid-cols-1 items-start lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-14">
          <div aria-hidden="true" className="hidden lg:block" />

          <div className="max-w-4xl pl-8 md:pl-12 lg:pl-0">
            <h2 className="mb-6 text-[26px] font-medium text-brand md:mb-8 md:text-[30px] xl:text-4xl">
              Θεραπευτική Προσέγγιση
            </h2>

            <div className="space-y-4 text-[15px] leading-[26px] text-text md:text-base md:leading-[30px] xl:text-lg xl:leading-8">
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
