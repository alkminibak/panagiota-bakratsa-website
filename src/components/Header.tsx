import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router";
import logo from "../assets/logo.png";
import Container from "./Container";
import NavMarker from "./NavMarker";
import EspaBadge from "./EspaBadge";

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

const SHOW_ESPA_BADGE = false;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const desktopNavLinkClasses = ({ isActive }: { isActive: boolean }) =>
    [
      "group flex items-center gap-1 text-base font-medium transition-colors xl:text-lg",
      "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand",
      isActive ? "font-semibold text-brand" : "text-text hover:text-brand",
    ].join(" ");

  const mobileNavLinkClasses = ({ isActive }: { isActive: boolean }) =>
    [
      "group flex items-center gap-1 text-base font-medium transition-colors",
      "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand",
      isActive ? "font-semibold text-brand" : "text-text hover:text-brand",
    ].join(" ");

  return (
    <header className="border-b-[4px] border-brand bg-background">
      <Container>
        <div className="relative flex items-center justify-between py-2 xl:py-1">
          <NavLink
            to="/"
            aria-label="Αρχική - Παναγιώτα Μπακρατσά"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand xl:gap-4"
          >
            <img src={logo} alt="" className="h-20 w-auto -my-1 xl:h-28" />

            <div className="flex flex-col justify-center gap-1">
              <span className="text-base font-semibold text-brand xl:text-lg">
                Παναγιώτα Μπακρατσά
              </span>

              <span className="text-xs text-brand xl:text-sm">
                Ψυχολόγος - Ψυχοθεραπεύτρια
              </span>
            </div>
          </NavLink>

          {SHOW_ESPA_BADGE && (
            <div className="absolute left-[340px] top-1/2 z-10 hidden -translate-y-1/2 xl:block">
              <EspaBadge />
            </div>
          )}

          {/* Desktop / landscape tablet navigation */}
          <nav
            aria-label="Κύρια πλοήγηση"
            className="hidden items-center gap-4 lg:flex xl:gap-8"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={desktopNavLinkClasses}
              >
                {({ isActive }) => (
                  <>
                    <NavMarker isActive={isActive} />
                    <span>{item.label}</span>
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Mobile / portrait tablet menu button */}
          <button
            type="button"
            aria-label={isMenuOpen ? "Κλείσιμο μενού" : "Άνοιγμα μενού"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="flex h-11 w-11 shrink-0 items-center justify-center text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand lg:hidden"
          >
            {isMenuOpen ? (
              <X aria-hidden="true" className="h-7 w-7" strokeWidth={1.7} />
            ) : (
              <Menu aria-hidden="true" className="h-7 w-7" strokeWidth={1.7} />
            )}
          </button>
        </div>

        {/* Mobile / portrait tablet navigation */}
        {isMenuOpen && (
          <nav
            id="mobile-navigation"
            aria-label="Κύρια πλοήγηση"
            className="border-t border-brand/20 py-4 lg:hidden"
          >
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={mobileNavLinkClasses}
                >
                  {({ isActive }) => (
                    <>
                      <NavMarker isActive={isActive} />
                      <span>{item.label}</span>
                    </>
                  )}
                </NavLink>
              ))}
            </div>
          </nav>
        )}
      </Container>
    </header>
  );
};

export default Header;
