import biographyDetail from "../assets/biography-detail.jpg";
import cornerContinuous from "../assets/corner.svg";
import photoToApproachLine from "../assets/photo-to-approach-line.svg";
import HandDrawnLink from "./HandDrawnLink";
import AnimatedLine from "./AnimatedLine";

export default function BiographyPreview() {
  return (
    <section className="pt-10 pb-10 md:pt-14 xl:pt-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 xl:gap-12">
          {/* Text side */}
          <div className="relative">
            <img
              src={cornerContinuous}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -top-5 left-0 w-28 md:-top-8 md:left-1 md:w-32 xl:-top-12 xl:w-40"
            />

            <div className="max-w-[620px] pl-8 pt-2 md:pl-12 lg:max-w-[520px] lg:pl-8 xl:pl-16">
              <h2 className="mb-6 text-[26px] font-medium text-brand md:mb-8 md:text-[30px] xl:text-4xl">
                Βιογραφικό
              </h2>

              <div className="space-y-5 text-[15px] leading-[26px] text-text md:space-y-6 md:text-base md:leading-[30px] xl:text-lg xl:leading-9">
                <p>
                  Η Παναγιώτα Μπακρατσά ζει και εργάζεται ως ψυχολόγος στην
                  Καβάλα. Είναι απόφοιτη του Τμήματος Ψυχολογίας του
                  Αριστοτελείου Πανεπιστημίου Θεσσαλονίκης. Η θεραπευτική της
                  προσέγγιση είναι η Γνωσιακή Συμπεριφορική Θεραπεία.
                </p>

                <p>
                  Τα τελευταία χρόνια εργάζεται με εφήβους και ενήλικες, καθώς
                  και με γονείς στο πλαίσιο συμβουλευτικής. Διατηρεί το ιδιωτικό
                  της γραφείο στο κέντρο της Καβάλας, παρέχοντας υπηρεσίες
                  ψυχοθεραπείας τόσο διά ζώσης όσο και διαδικτυακά.
                </p>
              </div>

              <HandDrawnLink
                to="/about"
                ariaLabel="Περισσότερα για το βιογραφικό"
                className="mt-8"
              >
                Δείτε περισσότερα
              </HandDrawnLink>
            </div>
          </div>

          {/* Image side */}
          <div className="relative ml-8 mr-auto w-[252px] max-w-[calc(100%_-_2rem)] md:mx-auto md:w-full md:max-w-[340px] lg:ml-0 lg:mr-0 lg:w-[350px] lg:-translate-x-2 xl:w-[380px] xl:-translate-x-4">
            <img
              src={biographyDetail}
              alt="Λεπτομέρεια από τον χώρο του γραφείου"
              className="h-auto w-full object-cover"
            />

            <AnimatedLine
              src={photoToApproachLine}
              duration={1200}
              className="pointer-events-none absolute -bottom-12 -right-12 z-20 w-[325px] max-w-none md:-bottom-20 md:-right-14 md:w-[390px] lg:-bottom-16 lg:-right-14 lg:w-[440px] xl:-bottom-24 xl:-right-24 xl:w-[520px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
