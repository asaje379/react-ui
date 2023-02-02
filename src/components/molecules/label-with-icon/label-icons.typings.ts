import { IconType } from '../../atoms/icons/icons.typings';

export interface LabelIconProps {
  /**
   * Icon's name
   */
  icon: string;

  /**
   * The text's color
   */
  color?: string;

  /**
   * The icon's color
   */
  iconColor?: string;

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
  iconPosition?: 'left' | 'right';
}
