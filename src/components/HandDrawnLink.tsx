import type { ReactNode } from "react";
import { Link } from "react-router";

type HandDrawnLinkProps = {
  to: string;
  children: ReactNode;
  ariaLabel?: string;
  className?: string;
};

const HandDrawnLink = ({
  to,
  children,
  ariaLabel,
  className = "",
}: HandDrawnLinkProps) => {
  return (
    <Link
      to={to}
      aria-label={ariaLabel}
      className={`group inline-block w-fit text-base font-medium text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand ${className}`}
    >
      <span className="relative inline-block pb-3">
        <span className="block">{children}</span>

        <svg
          aria-hidden="true"
          viewBox="0 0 180 14"
          preserveAspectRatio="none"
          className="pointer-events-none absolute bottom-0 left-0 h-3 w-full"
          fill="none"
        >
          <path
            d="M0 7 C42 2 82 11 118 7 C143 4 163 5 180 6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            pathLength="1"
            className="[stroke-dasharray:1] [stroke-dashoffset:1] transition-[stroke-dashoffset] duration-500 ease-out group-hover:[stroke-dashoffset:0] group-focus-visible:[stroke-dashoffset:0]"
          />
        </svg>
      </span>
    </Link>
  );
};

export default HandDrawnLink;
