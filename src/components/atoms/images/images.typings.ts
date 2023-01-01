import { ImgHTMLAttributes } from "react";

export type ImageAspectRatio = "auto" | "square" | "video" | "4/3";

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  /**
   * The relative image path
   */
  src: string;

  /**
   * Image aspect ratio
   */
  ratio?: ImageAspectRatio;
}
