import biographyDetail from "../assets/biography-detail.jpg";
import cornerContinuous from "../assets/corner.svg";
import photoToApproachLine from "../assets/photo-to-approach-line.svg";

export default function BiographyPreview() {
  return (
    <section className="pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-[1.15fr_0.85fr] items-start gap-12">
          {/* Text side */}
          <div className="relative">
            <img
              src={cornerContinuous}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -top-12 left-1 w-40"
            />

            <div className="max-w-[520px] pl-16 pt-2">
              <h2 className="mb-8 text-4xl font-medium text-brand">
                Βιογραφικό
              </h2>

              <div className="space-y-6 text-lg leading-9 text-text">
                <p>
                  Η Παναγιώτα Μπακρατσά ζει και εργάζεται ως ψυχολόγος στην
                  Καβάλα. Είναι απόφοιτη του Τμήματος Ψυχολογίας του
                  Αριστοτελείου Πανεπιστημίου Θεσσαλονίκης. Μετά την ολοκλήρωση
                  των σπουδών της, εμπλούτισε την επαγγελματική της κατάρτιση
                  μέσα από πρακτική άσκηση, εργασιακή εμπειρία και συνεχή
                  εκπαίδευση.
                </p>

                <p>
                  Σήμερα εργάζεται ψυχοθεραπευτικά στο ιδιωτικό της γραφείο στην
                  Καβάλα, παρέχοντας ατομική ψυχοθεραπεία σε εφήβους και
                  ενήλικες, καθώς και συμβουλευτική γονέων, τόσο δια ζώσης όσο
                  και διαδικτυακά. Η θεραπευτική της δουλειά βασίζεται στη
                  Γνωσιακή Συμπεριφορική Προσέγγιση.
                </p>
              </div>

              <a
                href="/about"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-brand transition-transform duration-200 hover:translate-x-1"
              >
                Περισσότερα
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* Image side */}
          <div className="relative -translate-x-4 w-[380px]">
            <img
              src={biographyDetail}
              alt="Λεπτομέρεια από τον χώρο του γραφείου"
              className="h-auto w-full object-cover"
            />

            <img
              src={photoToApproachLine}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-37 -right-24 z-20 w-[520px] max-w-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
