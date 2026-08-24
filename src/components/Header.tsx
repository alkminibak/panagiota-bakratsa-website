import { NavLink } from "react-router";
import logo from "../assets/logo.png";
import Container from "./Container";

const Header = () => {
  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    [
      "text-base font-medium transition-colors",
      "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand",
      isActive ? "font-semibold text-brand" : "text-text hover:text-brand",
    ].join(" ");

  return (
    <header className="border-b-2 border-brand bg-background">
      <Container>
        <div className="flex items-end justify-between py-3">
          <NavLink
            to="/"
            aria-label="Αρχική - Παναγιώτα Μπακρατσά"
            className="flex items-end gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
          >
            <img src={logo} alt="" className="h-20 w-auto -mb-3" />

            <div className="flex flex-col pb-2">
              <span className="text-base font-semibold text-brand">
                Παναγιώτα Μπακρατσά
              </span>

              <span className="text-sm text-brand">
                Ψυχολόγος - Ψυχοθεραπεύτρια
              </span>
            </div>
          </NavLink>

          <nav
            aria-label="Κύρια πλοήγηση"
            className="flex items-center gap-6 pb-2"
          >
            <NavLink to="/about" className={navLinkClasses}>
              Βιογραφικό
            </NavLink>

            <NavLink to="/approach" className={navLinkClasses}>
              Θεραπευτική Προσέγγιση
            </NavLink>

            <NavLink to="/services" className={navLinkClasses}>
              Υπηρεσίες
            </NavLink>

            <NavLink to="/contact" className={navLinkClasses}>
              Επικοινωνία
            </NavLink>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
