import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router";
import logoFooter from "../assets/logo-footer.png";
import Container from "./Container";

const Footer = () => {
  const linkClasses =
    "text-on-brand/80 transition-colors hover:text-on-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-on-brand";

  return (
    <footer className="bg-brand text-on-brand">
      <Container>
        <div className="grid grid-cols-[1fr_1.25fr_1fr] items-start gap-12 py-5">
          {/* Brand */}
          <div className="flex items-center gap-3 pt-9">
            <img src={logoFooter} alt="" className="h-12 w-auto" />

            <div>
              <p className="font-semibold">Παναγιώτα Μπακρατσά</p>

              <p className="mt-1 text-sm text-on-brand/80">
                Ψυχολόγος - Ψυχοθεραπεύτρια
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h2 className="font-semibold">Πλοήγηση</h2>

            <nav aria-label="Πλοήγηση υποσέλιδου" className="mt-3">
              <div className="grid grid-cols-[auto_auto] justify-start gap-x-10 gap-y-1.5">
                <Link to="/" className={linkClasses}>
                  Αρχική
                </Link>

                <Link to="/services" className={linkClasses}>
                  Υπηρεσίες
                </Link>

                <Link to="/about" className={linkClasses}>
                  Βιογραφικό
                </Link>

                <Link to="/contact" className={linkClasses}>
                  Επικοινωνία
                </Link>

                <Link to="/approach" className={linkClasses}>
                  Θεραπευτική Προσέγγιση
                </Link>
              </div>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h2 className="font-semibold">Επικοινωνία</h2>

            <address className="mt-3 space-y-2.5 not-italic text-on-brand/80">
              <div className="flex items-center gap-3">
                <MapPin
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0"
                  strokeWidth={1.8}
                />

                <p>Μητροπόλεως 8Β, Καβάλα 654 03</p>
              </div>

              <div className="flex items-center gap-3">
                <Phone
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0"
                  strokeWidth={1.8}
                />

                <a href="tel:+306943412722" className={linkClasses}>
                  694 341 2722
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0"
                  strokeWidth={1.8}
                />

                <a href="mailto:g.bakratsa@gmail.com" className={linkClasses}>
                  g.bakratsa@gmail.com
                </a>
              </div>
            </address>
          </div>
        </div>

        <div className="border-t border-on-brand/30 py-3">
          <p className="text-sm text-on-brand/70">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
