import { IconType } from "../../atoms/icons/icons.typings";
import { LabelSize } from "../../atoms/labels/labels.typings";

export interface LabelIconProps {
  /**
   * Icon's name
   */
  icon: string;

  /**
   * Text color
   */
  color?: string;

  /**
   * The type of the icon
   */
  iconType?: IconType;

  /**
   * The icon's size
   */
  size?: number;

  /**
   * The space between the icon and the label
   */
  offset?: number;

  /**
   * CSS class
   */
  className?: string;

  /**
   * The position of the icon
   */
  iconPosition?: "left" | "right";
}
