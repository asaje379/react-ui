import { ReactNode } from "react";

export type BadgePosition = "tl" | "tr" | "bl" | "br";

export interface BadgeProps {
  /**
   * Position of the badge : tl for top-left, tr for top-right...
   */
  position: BadgePosition;

  /**
   * The badge children. `value` can be string, number or even `Icon`
   */
  value?: ReactNode;

  /**
   * The space between the badge and base element
   */
  offset?: number;

  /**
   * The badge css classname (for setting padding for example)
   */
  className?: string;
}
