import { ImageAspectRatio } from "./images.typings";

export const IMAGE_RATIO_CSS: Record<ImageAspectRatio, string> = {
  auto: "tw-aspect-auto",
  square: "tw-aspect-square",
  video: "tw-aspect-video",
  "4/3": "tw-aspect-[4/3]",
};
