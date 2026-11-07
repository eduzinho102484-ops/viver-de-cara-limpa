import { useEffect, useRef } from "react";

let observer;

function getObserver() {
  if (observer || typeof IntersectionObserver === "undefined") return observer;

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
  );
  return observer;
}

export default function Reveal({ as: Element = "div", className = "", children, ...props }) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      node.classList.add("is-visible");
      return undefined;
    }

    const sharedObserver = getObserver();
    if (!sharedObserver) {
      node.classList.add("is-visible");
      return undefined;
    }

    document.body.dataset.motionReady = "true";
    sharedObserver.observe(node);

    return () => {
      sharedObserver.unobserve(node);
    };
  }, []);

  return (
    <Element
      {...props}
      ref={ref}
      className={`motion-reveal ${className}`.trim()}
    >
      {children}
    </Element>
  );
}
