import { NavLink } from "react-router";
import logo from "../assets/logo.png";
import Container from "./Container";
import NavMarker from "./NavMarker";

const navItems = [
  {
    to: "/about",
    label: "Βιογραφικό",
  },
  {
    to: "/approach",
    label: "Θεραπευτική Προσέγγιση",
  },
  {
    to: "/services",
    label: "Υπηρεσίες",
  },
  {
    to: "/contact",
    label: "Επικοινωνία",
  },
];

const Header = () => {
  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    [
      "group flex items-center gap-1 text-lg font-medium transition-colors",
      "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand",
      isActive ? "font-semibold text-brand" : "text-text hover:text-brand",
    ].join(" ");

  return (
    <header className="border-b-[4px] border-brand bg-background">
      <Container>
        <div className="flex items-center justify-between py-1">
          <NavLink
            to="/"
            aria-label="Αρχική - Παναγιώτα Μπακρατσά"
            className="flex items-center gap-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
          >
            <img src={logo} alt="" className="h-28 w-auto -my-1" />

            <div className="flex flex-col justify-center gap-1">
              <span className="text-lg font-semibold text-brand">
                Παναγιώτα Μπακρατσά
              </span>

              <span className="text-sm text-brand">
                Ψυχολόγος - Ψυχοθεραπεύτρια
              </span>
            </div>
          </NavLink>

          <nav aria-label="Κύρια πλοήγηση" className="flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={navLinkClasses}>
                {({ isActive }) => (
                  <>
                    <NavMarker isActive={isActive} />
                    <span>{item.label}</span>
                  </>
                )}
              </NavLink>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
