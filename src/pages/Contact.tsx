import { Mail, MapPin, Phone } from "lucide-react";
import Container from "../components/Container";

const Contact = () => {
  return (
    <main>
      <section className="bg-background py-12 md:py-14 xl:py-20">
        <Container>
          {/* Page title */}
          <div className="pl-8 md:pl-12 xl:pl-16">
            <h1 className="mb-6 text-[26px] font-medium text-brand md:mb-8 md:text-[30px] xl:mb-10 xl:text-4xl">
              Επικοινωνία
            </h1>
          </div>

          {/* Contact content */}
          <div className="pl-8 md:pl-12 xl:pl-16">
            <div className="grid max-w-6xl grid-cols-1 items-start gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-4 xl:gap-10">
              {/* Contact details */}
              <div className="max-w-md">
                <p className="text-[15px] leading-[26px] text-text md:text-base md:leading-[26px] xl:text-lg xl:leading-9">
                  Για πληροφορίες ή για να προγραμματίσετε ένα ραντεβού,
                  μπορείτε να επικοινωνήσετε τηλεφωνικά ή μέσω email.
                </p>

                <address className="mt-5 space-y-3 not-italic text-[15px] leading-[26px] text-text md:mt-5 md:space-y-3 md:text-base md:leading-[26px] xl:mt-10 xl:space-y-7 xl:text-lg">
                  {/* Address */}
                  <div className="flex items-start gap-3 md:gap-4">
                    <MapPin
                      aria-hidden="true"
                      className="mt-1 h-5 w-5 shrink-0 text-brand md:h-[22px] md:w-[22px] xl:h-6 xl:w-6"
                      strokeWidth={1.7}
                    />

                    <div>
                      <p>Μητροπόλεως 8Β</p>
                      <p>Καβάλα 654 03</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-3 md:gap-4">
                    <Phone
                      aria-hidden="true"
                      className="h-5 w-5 shrink-0 text-brand md:h-[22px] md:w-[22px] xl:h-6 xl:w-6"
                      strokeWidth={1.7}
                    />

                    <a
                      href="tel:+306943412722"
                      className="transition-colors hover:text-brand"
                    >
                      694 341 2722
                    </a>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-3 md:gap-4">
                    <Mail
                      aria-hidden="true"
                      className="h-5 w-5 shrink-0 text-brand md:h-[22px] md:w-[22px] xl:h-6 xl:w-6"
                      strokeWidth={1.7}
                    />

                    <a
                      href="mailto:g.bakratsa@gmail.com"
                      className="break-all transition-colors hover:text-brand md:break-normal"
                    >
                      g.bakratsa@gmail.com
                    </a>
                  </div>
                </address>

                <p className="mt-6 text-sm leading-6 text-text md:mt-8 md:text-[14px] md:leading-6 xl:mt-10 xl:text-base xl:leading-8">
                  Οι συνεδρίες πραγματοποιούνται διά ζώσης στην Καβάλα, καθώς
                  και διαδικτυακά.
                </p>
              </div>

              {/* Google Map */}
              <div className="w-full max-w-[620px] md:translate-y-2">
                <iframe
                  title="Τοποθεσία γραφείου Παναγιώτας Μπακρατσά"
                  src="https://www.google.com/maps?q=Μητροπόλεως+8Β,+Καβάλα+654+03&output=embed"
                  className="h-[300px] w-full border-0 md:h-[360px] lg:h-[420px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Contact;
