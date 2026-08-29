import Container from "../components/Container";
import approachDetail from "../assets/approach-detail.jpg";
import approachFlowLine from "../assets/approach-divider.svg";

const Approach = () => {
  return (
    <main>
      <section className="bg-background py-20">
        <Container>
          {/* Page title */}
          <div className="lg:pl-16">
            <h1 className="mb-10 text-4xl font-medium text-brand">
              Θεραπευτική Προσέγγιση
            </h1>
          </div>

          {/* Introduction */}
          <div className="mx-auto max-w-5xl">
            <div className="max-w-4xl space-y-6 text-lg leading-9 text-text">
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
          </div>

          {/* Decorative line */}
          <div aria-hidden="true" className="mx-auto my-12 max-w-5xl">
            <img
              src={approachFlowLine}
              alt=""
              className="pointer-events-none w-full max-w-[900px]"
            />
          </div>

          {/* CBT process */}
          <div className="mx-auto max-w-5xl">
            <div className="max-w-4xl text-lg leading-9 text-text">
              <p>
                Η Γνωσιακή Συμπεριφορική Ψυχοθεραπεία βοηθά το άτομο να
                αναγνωρίζει και να αξιολογεί αυτούς τους τρόπους σκέψης και να
                αναζητά νέους, πιο λειτουργικούς τρόπους σκέψης και συμπεριφοράς
                απέναντι στις δυσκολίες που αντιμετωπίζει. Στο πλαίσιο αυτό
                αξιοποιούνται διαφορετικές θεραπευτικές τεχνικές και
                παρεμβάσεις, προσαρμοσμένες στις ανάγκες του κάθε ατόμου.
                Απώτερος στόχος είναι το ίδιο το άτομο να γίνει σταδιακά
                «θεραπευτής του εαυτού του» , αξιοποιώντας τις δεξιότητες που
                αποκτά κατά τη διάρκεια της θεραπείας, ώστε να μπορεί να
                διαχειρίζεται με μεγαλύτερη αυτονομία και μελλοντικές δυσκολίες.
              </p>
            </div>
          </div>

          {/* Therapeutic relationship */}
          <div className="mx-auto mt-16 grid max-w-5xl gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <div className="mx-auto w-full max-w-[320px] lg:mx-0">
              <img
                src={approachDetail}
                alt=""
                className="h-auto w-full"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="max-w-[550px] -mt-14 text-lg leading-9 text-text">
              <p>
                Σημαντικό μέρος της θεραπείας αποτελεί η θεραπευτική σχέση.
                Θεραπευτής και θεραπευόμενος δουλεύουν συνεργατικά και
                διαμορφώνουν από κοινού τους θεραπευτικούς στόχους. Μέσα σε ένα
                κλίμα γνησιότητας, αποδοχής και ενσυναίσθησης, ο θεραπευτής
                προσφέρει έναν ασφαλή χώρο, στον οποίο το άτομο μπορεί να
                εκφραστεί ελεύθερα, να εξερευνήσει τις δυσκολίες του και να
                εργαστεί προς τις αλλαγές που επιθυμεί.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Approach;
