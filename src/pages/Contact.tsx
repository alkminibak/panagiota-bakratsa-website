import { Mail, MapPin, Phone } from "lucide-react";
import Container from "../components/Container";

const Contact = () => {
  return (
    <main>
      <section className="bg-background py-20">
        <Container>
          {/* Page title */}
          <div className="lg:pl-16">
            <h1 className="mb-10 text-4xl font-medium text-brand">
              Επικοινωνία
            </h1>
          </div>

          {/* Contact content */}
          <div className="lg:pl-16">
            <div className="grid max-w-6xl grid-cols-[0.85fr_1.15fr] gap-10 items-start">
              {/* Contact details */}
              <div className="max-w-md">
                <p className="text-lg leading-9 text-text">
                  Για πληροφορίες ή για να προγραμματίσετε ένα ραντεβού,
                  μπορείτε να επικοινωνήσετε τηλεφωνικά ή μέσω email.
                </p>

                <address className="mt-10 space-y-7 not-italic text-lg text-text">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <MapPin
                      aria-hidden="true"
                      className="mt-1 h-6 w-6 shrink-0 text-brand"
                      strokeWidth={1.7}
                    />

                    <div>
                      <p>Μητροπόλεως 8Β</p>
                      <p>Καβάλα 654 03</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-4">
                    <Phone
                      aria-hidden="true"
                      className="h-6 w-6 shrink-0 text-brand"
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
                  <div className="flex items-center gap-4">
                    <Mail
                      aria-hidden="true"
                      className="h-6 w-6 shrink-0 text-brand"
                      strokeWidth={1.7}
                    />

                    <a
                      href="mailto:g.bakratsa@gmail.com"
                      className="transition-colors hover:text-brand"
                    >
                      g.bakratsa@gmail.com
                    </a>
                  </div>
                </address>

                <p className="mt-10 text-base leading-8 text-text">
                  Οι συνεδρίες πραγματοποιούνται διά ζώσης στην Καβάλα, καθώς
                  και διαδικτυακά.
                </p>
              </div>

              {/* Google Map */}
              <div className="w-full max-w-[620px] translate-y-2">
                <iframe
                  title="Τοποθεσία γραφείου Παναγιώτας Μπακρατσά"
                  src="https://www.google.com/maps?q=Μητροπόλεως+8Β,+Καβάλα+654+03&output=embed"
                  className="h-[420px] w-full border-0"
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
