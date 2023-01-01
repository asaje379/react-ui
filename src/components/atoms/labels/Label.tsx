import { PropsWithChildren } from "react";
import { LabelProps } from "./labels.typings";
import {
  LABEL_CSS,
  LABEL_CSS_ALIGNMENT,
  LABEL_CSS_OFFSET,
} from "./labels.variables";

export const Label = ({
  children,
  description,
  size = "medium",
  align = "left",
  offset = 0,
}: PropsWithChildren<LabelProps>) => {
  const childrenCss = [
    "text-dark font-bold",
    LABEL_CSS[size].title,
    LABEL_CSS_ALIGNMENT[align],
  ].join(" ");

  const descriptionCss = [
    "text-gray font-semibold",
    LABEL_CSS[size].description,
    LABEL_CSS_ALIGNMENT[align],
    LABEL_CSS_OFFSET[offset],
  ].join(" ");

  return (
    <div className="w-fit">
      <div className={childrenCss}>{children}</div>
      <div className={descriptionCss}>{description}</div>
    </div>
  );
};
