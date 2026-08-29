import Container from "../components/Container";
import biographyOffice from "../assets/biography-office.jpg";
import aboutDivider from "../assets/about-divider.svg";

const About = () => {
  return (
    <main>
      <section className="bg-background py-20">
        <Container>
          {/* Intro */}
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            {/* Text */}
            <div className="lg:pl-16">
              <h1 className="mb-10 text-4xl font-medium text-brand">
                Βιογραφικό
              </h1>

              <div className="max-w-2xl space-y-6 text-lg leading-9 text-text">
                <p>
                  Η Παναγιώτα Μπακρατσά ζει και εργάζεται ως ψυχολόγος στην
                  Καβάλα. Είναι απόφοιτη του Τμήματος Ψυχολογίας του
                  Αριστοτελείου Πανεπιστημίου Θεσσαλονίκης. Η θεραπευτική της
                  προσέγγιση είναι η Γνωσιακή Συμπεριφορική θεραπεία.
                </p>

                <p>
                  Στις προπτυχιακές της σπουδές ασχολήθηκε με την Οργανωσιακή
                  και Εργασιακή Ψυχολογία, τόσο μέσω της πτυχιακής της εργασίας
                  όσο και της πρακτικής της άσκησης. Το ενδιαφέρον της
                  επικεντρώθηκε σε ζητήματα εργασιακής ευημερίας και στη σύνδεση
                  του εργασιακού περιβάλλοντος με την ψυχική ευεξία και τη
                  συνολική λειτουργικότητα του ατόμου.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="mx-auto w-full max-w-[400px] lg:mx-0 lg:justify-self-center lg:mr-10">
              <img
                src={biographyOffice}
                alt="Γωνιά του ιδιωτικού γραφείου με το γραφείο εργασίας και αναρτημένους τίτλους σπουδών"
                className="h-auto w-full"
                decoding="async"
              />
            </div>
          </div>

          {/* Decorative divider */}
          <div aria-hidden="true" className="mx-auto -my-4 mb-8 max-w-5xl">
            <img
              src={aboutDivider}
              alt=""
              className="pointer-events-none w-full max-w-[920px]"
            />
          </div>

          {/* Main biography */}
          <div className="mx-auto max-w-5xl">
            <div className="max-w-4xl space-y-6 text-lg leading-9 text-text">
              <p>
                Έχει αποκτήσει επαγγελματική και εθελοντική εμπειρία στην Ελλάδα
                και στο εξωτερικό. Έχει εργαστεί σε διαφορετικά πλαίσια με
                παιδιά, ενήλικες, ηλικιωμένους και άτομα με αναπηρία.
              </p>

              <p>
                Έχει εκπαιδευτεί στη Γνωσιακή Συμπεριφορική Ψυχοθεραπεία στην
                Ελληνική Εταιρεία Έρευνας Συμπεριφοράς. Συνεχίζει να εμπλουτίζει
                την επαγγελματική της κατάρτιση μέσα από εκπαιδεύσεις και
                σεμινάρια σε θέματα θεραπευτικών τεχνικών και παρεμβάσεων,
                συναισθηματικών και συμπεριφορικών δυσκολιών, καθώς και
                ζητημάτων φύλου και ταυτότητας.
              </p>

              <p>
                Τα τελευταία χρόνια εργάζεται θεραπευτικά με εφήβους και
                ενήλικες, καθώς και με γονείς στο πλαίσιο συμβουλευτικής.
                Διατηρεί ιδιωτικό γραφείο στην Καβάλα, παρέχοντας υπηρεσίες
                ψυχοθεραπείας τόσο διά ζώσης όσο και διαδικτυακά.
              </p>
            </div>

            {/* Professional licence */}
            <div className="mt-12 max-w-4xl border-l-[4px] border-brand pl-6">
              <p className="text-base leading-7 text-text">
                Κατέχει άδεια ασκήσεως επαγγέλματος ψυχολόγου με
                Αριθ.Πρωτ.ΔΔΥΚΜ/Μ.Ε.Θ. 853309 (24024).
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default About;
