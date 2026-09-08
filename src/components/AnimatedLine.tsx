import { useEffect, useLayoutEffect, useRef, useState } from "react";

type AnimatedLineProps = {
  src: string;
  className?: string;
  duration?: number;
  threshold?: number;
  reverse?: boolean;
};

const AnimatedLine = ({
  src,
  className = "",
  duration = 1200,
  threshold = 0.1,
  reverse = false,
}: AnimatedLineProps) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  const hasAnimatedRef = useRef(false);

  const [svgMarkup, setSvgMarkup] = useState("");
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;

    hasAnimatedRef.current = false;
    setFailed(false);

    fetch(src)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Could not load SVG: ${src}`);
        }

        return response.text();
      })
      .then((svg) => {
        if (!cancelled) {
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

    /*
      Κάνουμε το inline SVG να συμπεριφέρεται
      όπως το προηγούμενο <img>.
    */
    svg.style.display = "block";
    svg.style.width = "100%";
    svg.style.height = "auto";

    const lines = Array.from(
      container.querySelectorAll<SVGGeometryElement>(
        "path, line, polyline, polygon, circle, ellipse, rect",
      ),
    );

    if (lines.length === 0) return;

    /*
      Πολύ σημαντικό:
      αφαιρούμε το non-scaling-stroke μόνο από
      την inline animated εκδοχή.

      Έτσι το stroke κλιμακώνεται μαζί με το SVG,
      όπως γινόταν όταν το SVG ήταν <img>.
    */
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

    /*
      Αρχική κατάσταση:
      όλη η γραμμή είναι κρυμμένη.
    */
    lines.forEach((line, index) => {
      const length = lengths[index];

      line.style.strokeDasharray = `${length}`;
      line.style.strokeDashoffset = reverse ? `${-length}` : `${length}`;
      line.style.transition = "none";
    });

    /*
      Αναγκάζουμε τον browser να καταγράψει πρώτα
      την κρυμμένη κατάσταση πριν ξεκινήσει το animation.
    */
    void container.getBoundingClientRect();

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimatedRef.current) {
          return;
        }

        hasAnimatedRef.current = true;

        let delay = 0;

        lines.forEach((line, index) => {
          const lineDuration =
            totalLength > 0
              ? duration * (lengths[index] / totalLength)
              : duration / lines.length;

          line.style.transition = `
            stroke-dashoffset
            ${lineDuration}ms
            linear
            ${delay}ms
          `;

          line.style.strokeDashoffset = "0";

          delay += lineDuration;
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
  }, [svgMarkup, duration, threshold, reverse]);

  /*
    Αν για οποιονδήποτε λόγο αποτύχει
    το inline loading, εμφανίζουμε το SVG
    όπως πριν, ως κανονικό <img>.
  */
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
