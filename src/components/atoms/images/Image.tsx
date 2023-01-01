import { useEffect, useState } from "react";
import { useVisibleInPage } from "../../../hooks/useVisibleInPage";
import { ImageProps } from "./images.typings";
import { IMAGE_RATIO_CSS } from "./images.variables";

export const Image = ({
  src = "",
  alt,
  loading = "lazy",
  ratio = "auto",
  ...props
}: ImageProps) => {
  const [uri, setUri] = useState("");
  const css = [IMAGE_RATIO_CSS[ratio], props.className].join(" ");

  const { elementRef: imgRef, isVisible } = useVisibleInPage({});

  useEffect(() => {
    if (isVisible) {
      import(/* @vite-ignore */ src).then((m) => {
        setUri(m.default);
      });
    }
  }, [isVisible]);

  return (
    <img
      ref={imgRef}
      src={uri}
      alt={alt}
      className={css}
      loading={loading}
      {...props}
    />
  );
};
