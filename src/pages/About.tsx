import Container from "../components/Container";
import AnimatedLine from "../components/AnimatedLine";
import biographyOffice from "../assets/biography-office.jpg";
import aboutDivider from "../assets/about-divider.svg";

const About = () => {
  return (
    <main>
      <section className="bg-background py-12 md:py-14 xl:py-20">
        <Container>
          {/* Top section */}
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.15fr)_minmax(260px,0.85fr)] md:items-start md:gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12 xl:gap-14">
            {/* Text */}
            <div className="pl-8 md:pl-12 xl:pl-16">
              <h1 className="mb-6 text-[26px] font-medium text-brand md:mb-8 md:text-[30px] xl:mb-10 xl:text-4xl">
                Βιογραφικό
              </h1>

              <div className="max-w-2xl space-y-5 text-[15px] leading-[26px] text-text md:space-y-6 md:text-base md:leading-[30px] xl:text-lg xl:leading-9">
                <p>
                  Η Παναγιώτα Μπακρατσά ζει και εργάζεται ως ψυχολόγος στην
                  Καβάλα. Είναι απόφοιτη του Τμήματος Ψυχολογίας του
                  Αριστοτελείου Πανεπιστημίου Θεσσαλονίκης. Η θεραπευτική της
                  προσέγγιση είναι η Γνωσιακή Συμπεριφορική Θεραπεία.
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
            <div className="mx-auto w-[78%] max-w-[440px] md:mx-0 md:mt-20 md:w-full md:max-w-[330px] md:justify-self-end lg:mt-0 lg:max-w-[360px] xl:max-w-[420px]">
              <img
                src={biographyOffice}
                alt="Γωνιά του ιδιωτικού γραφείου με το γραφείο εργασίας και αναρτημένους τίτλους σπουδών"
                className="h-[300px] w-full object-cover object-[center_80%] md:h-auto md:object-center"
                decoding="async"
              />
            </div>
          </div>

          {/* Divider */}
          <div
            aria-hidden="true"
            className="mx-auto mt-6 mb-4 max-w-5xl md:mt-8 md:mb-10 xl:-my-4 xl:mb-8"
          >
            {/* Mobile divider */}
            <div className="relative h-[70px] w-full overflow-hidden md:hidden">
              <div className="absolute inset-y-0 left-8 right-6 overflow-hidden">
                <AnimatedLine
                  src={aboutDivider}
                  duration={1800}
                  className="pointer-events-none absolute -left-[48px] top-1/2 w-[500px] max-w-none -translate-y-1/2"
                />
              </div>
            </div>

            {/* Tablet / desktop divider */}
            <AnimatedLine
              src={aboutDivider}
              duration={1800}
              className="pointer-events-none hidden md:block md:w-[74%] md:max-w-none md:mx-auto lg:w-[86%] xl:w-full xl:max-w-[920px]"
            />
          </div>

          {/* Bottom text */}
          <div className="mx-auto max-w-5xl pl-8 md:pl-12 xl:pl-16">
            <div className="max-w-4xl space-y-5 text-[15px] leading-[26px] text-text md:space-y-6 md:text-base md:leading-[30px] xl:text-lg xl:leading-9">
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
                Τα τελευταία χρόνια εργάζεται με εφήβους και ενήλικες, καθώς και
                με γονείς στο πλαίσιο συμβουλευτικής. Διατηρεί το ιδιωτικό της
                γραφείο στο κέντρο της Καβάλας, παρέχοντας υπηρεσίες
                ψυχοθεραπείας τόσο διά ζώσης όσο και διαδικτυακά.
              </p>
            </div>

            {/* Licence */}
            <div className="mt-10 max-w-4xl border-l-[4px] border-brand pl-4 md:mt-12 md:pl-6">
              <p className="text-sm leading-6 text-text md:text-base md:leading-7">
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
