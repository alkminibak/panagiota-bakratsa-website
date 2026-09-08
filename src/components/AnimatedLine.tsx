import { useEffect, useLayoutEffect, useRef, useState } from "react";

type AnimatedLineProps = {
  src: string;
  className?: string;
  duration?: number;
  threshold?: number;
  reverse?: boolean;
  delay?: number;
};

const AnimatedLine = ({
  src,
  className = "",
  duration = 1200,
  threshold = 0.1,
  reverse = false,
  delay = 0,
}: AnimatedLineProps) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  const hasAnimatedRef = useRef(false);

  const [svgMarkup, setSvgMarkup] = useState("");
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;

    hasAnimatedRef.current = false;

    fetch(src)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Could not load SVG: ${src}`);
        }

        return response.text();
      })
      .then((svg) => {
        if (!cancelled) {
          setFailed(false);
          setSvgMarkup(svg);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setFailed(true);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [src]);

  useLayoutEffect(() => {
    const container = containerRef.current;

    if (!container || !svgMarkup) return;

    const svg = container.querySelector("svg");

    if (!svg) return;

    svg.style.display = "block";
    svg.style.width = "100%";
    svg.style.height = "auto";

    const lines = Array.from(
      container.querySelectorAll<SVGGeometryElement>(
        "path, line, polyline, polygon, circle, ellipse, rect",
      ),
    );

    if (lines.length === 0) return;

    // Το stroke κλιμακώνεται μαζί με το SVG.
    lines.forEach((line) => {
      line.removeAttribute("vector-effect");
      line.style.vectorEffect = "none";
    });

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      lines.forEach((line) => {
        line.style.strokeDasharray = "";
        line.style.strokeDashoffset = "";
        line.style.transition = "none";
      });

      return;
    }

    const lengths = lines.map((line) => line.getTotalLength());

    const totalLength = lengths.reduce((sum, length) => sum + length, 0);

    // Αρχικά η γραμμή είναι κρυμμένη.
    lines.forEach((line, index) => {
      const length = lengths[index];

      line.style.strokeDasharray = `${length}`;
      line.style.strokeDashoffset = reverse ? `${-length}` : `${length}`;

      line.style.transition = "none";
    });

    // Καταγράφεται πρώτα η κρυμμένη κατάσταση.
    void container.getBoundingClientRect();

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimatedRef.current) {
          return;
        }

        hasAnimatedRef.current = true;

        let currentDelay = delay;

        lines.forEach((line, index) => {
          const lineDuration =
            totalLength > 0
              ? duration * (lengths[index] / totalLength)
              : duration / lines.length;

          line.style.transition = `stroke-dashoffset ${lineDuration}ms linear ${currentDelay}ms`;
          line.style.strokeDashoffset = "0";

          currentDelay += lineDuration;
        });

        observer.disconnect();
      },
      {
        threshold,
        rootMargin: "0px 0px -35% 0px",
      },
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [svgMarkup, duration, threshold, reverse, delay]);

  // Fallback αν αποτύχει η φόρτωση του SVG.
  if (failed) {
    return <img src={src} alt="" aria-hidden="true" className={className} />;
  }

  return (
    <span
      ref={containerRef}
      aria-hidden="true"
      className={`block ${className}`}
      dangerouslySetInnerHTML={{ __html: svgMarkup }}
    />
  );
};

export default AnimatedLine;
