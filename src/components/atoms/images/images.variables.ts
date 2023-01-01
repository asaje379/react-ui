import { ImageAspectRatio } from "./images.typings";

export const IMAGE_RATIO_CSS: Record<ImageAspectRatio, string> = {
  auto: "aspect-auto",
  square: "aspect-square",
  video: "aspect-video",
  "4/3": "aspect-[4/3]",
};
