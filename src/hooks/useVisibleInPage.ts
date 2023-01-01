import { MutableRefObject, useEffect, useRef, useState } from "react";
import { VisibleInPageArgs } from "./typings/visible-in-page.typings";

export function useVisibleInPage<P extends HTMLElement>({
  parent,
  threshold = 0,
}: VisibleInPageArgs<P>) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const callback: IntersectionObserverCallback = (
    entries: IntersectionObserverEntry[]
  ) => {
    for (const entry of entries) {
      setIsVisible(entry.isIntersecting);
    }
  };

  useEffect(() => {
    const options = {
      root: parent ? (parent as MutableRefObject<P | null>).current : document,
      rootMargin: "0px",
      threshold,
    };

    let observer = new IntersectionObserver(callback, options);
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, []);

  return { elementRef, isVisible };
}
