type NavMarkerProps = {
  isActive?: boolean;
};

const NavMarker = ({ isActive = false }: NavMarkerProps) => {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      fill="none"
      className="h-7 w-7 shrink-0 text-brand"
    >
      <path
        d="M5 22.5C8 25 13.5 24.8 17 21.7C20.2 18.9 20.3 14.2 17.4 11.2C14.8 8.5 10.5 8.7 8.5 11.4C6.7 13.8 7.7 17.2 10.5 18.7C13.7 20.4 18.4 18.7 20.8 15.2C23 12.1 23.3 8.6 22.1 5.8"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength="1"
        className={
          isActive
            ? "[stroke-dasharray:1] [stroke-dashoffset:0]"
            : "[stroke-dasharray:1] [stroke-dashoffset:1] transition-[stroke-dashoffset] duration-[400ms] ease-out group-hover:[stroke-dashoffset:0] group-focus-visible:[stroke-dashoffset:0]"
        }
      />
    </svg>
  );
};

export default NavMarker;
