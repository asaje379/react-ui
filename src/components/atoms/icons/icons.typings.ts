export type IconType = "default" | "outlined" | "two-tone" | "round" | "sharp";

export interface IconProps {
  /**
   * The name of google icon you want to use
   */
  name: string;

  /**
   * The size of the icon
   */
  size?: number;

  /**
   * The type of the icon you want to use
   */
  type?: IconType;

  /**
   * The color of the icon
   */
  color?: string;
}
