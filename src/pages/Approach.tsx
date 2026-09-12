import Container from "../components/Container";
import AnimatedLine from "../components/AnimatedLine";
import approachDetail from "../assets/approach-detail.jpg";
import approachFlowLine from "../assets/approach-divider.svg";

const Approach = () => {
  return (
    <main>
      <section className="bg-background py-12 md:py-14 xl:py-20">
        <Container>
          {/* Page title */}
          <div className="mx-auto max-w-5xl pl-8 md:pl-12 xl:mx-0 xl:max-w-none xl:pl-16">
            <h1 className="mb-6 text-[26px] font-medium text-brand md:mb-8 md:text-[30px] xl:mb-10 xl:text-4xl">
              Θεραπευτική Προσέγγιση
            </h1>
          </div>

          {/* Introduction */}
          <div className="mx-auto max-w-5xl pl-8 md:pl-12 xl:pl-0">
            <div className="max-w-4xl space-y-5 text-[15px] leading-[26px] text-text md:space-y-6 md:text-base md:leading-[30px] xl:text-lg xl:leading-9">
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
          <div
            aria-hidden="true"
            className="mx-auto mt-6 mb-4 max-w-5xl md:my-10 xl:my-12"
          >
            {/* Mobile divider */}
            <div className="relative h-[70px] w-full overflow-hidden md:hidden">
              <div className="absolute inset-y-0 left-8 right-6 overflow-hidden">
                <AnimatedLine
                  src={approachFlowLine}
                  duration={2000}
                  className="pointer-events-none absolute left-1/2 top-1/2 w-[600px] max-w-none -translate-x-1/2 -translate-y-1/2"
                />
              </div>
            </div>

            {/* Tablet / desktop divider */}
            <AnimatedLine
              src={approachFlowLine}
              duration={2000}
              className="pointer-events-none hidden md:mx-auto md:block md:w-[76%] md:max-w-none lg:w-[88%] xl:mx-0 xl:w-full xl:max-w-[900px]"
            />
          </div>

          {/* CBT process */}
          <div className="mx-auto max-w-5xl pl-8 md:pl-12 xl:pl-0">
            <div className="max-w-4xl text-[15px] leading-[26px] text-text md:text-base md:leading-[30px] xl:text-lg xl:leading-9">
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
          <div className="mx-auto mt-8 grid max-w-5xl gap-8 pl-8 md:mt-12 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-7 md:pl-12 lg:gap-10 xl:mt-16 xl:grid-cols-[0.7fr_1.3fr] xl:gap-12 xl:pl-0">
            <div className="mr-auto w-[250px] max-w-full md:w-full md:max-w-[230px] lg:max-w-[300px] xl:max-w-[320px]">
              <img
                src={approachDetail}
                alt=""
                className="h-[300px] w-full object-cover object-center md:h-auto"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="max-w-[550px] text-[15px] leading-[26px] text-text md:text-base md:leading-[30px] lg:-mt-30 xl:-mt-14 xl:text-lg xl:leading-9">
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
