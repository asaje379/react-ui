import {
  LabelAlignment,
  LabelSize,
  LabelTitleDescription,
} from "./labels.typings";

export const LABEL_CSS: Record<LabelSize, LabelTitleDescription> = {
  small: {
    title: "text-base",
    description: "text-xs",
  },
  medium: {
    title: "text-xl",
    description: "text-sm",
  },
  large: {
    title: "text-2xl",
    description: "text-base",
  },
  "x-large": {
    title: "text-3xl",
    description: "text-lg",
  },
  huge: {
    title: "text-4xl",
    description: "text-xl",
  },
};

export const LABEL_CSS_ALIGNMENT: Record<LabelAlignment, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
  justify: "text-justify",
};

export const LABEL_CSS_OFFSET: Record<number, string> = {
  0: "",
  1: "pt-1",
  2: "pt-2",
  3: "pt-3",
  4: "pt-4",
  5: "pt-5",
};
