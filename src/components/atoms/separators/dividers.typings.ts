export type BorderType =
  | "solid"
  | "dotted"
  | "dashed"
  | "groove"
  | "ridge"
  | "inset"
  | "outset";

export type DividerDirection = "vertical" | "horizontal";

export interface DividerProps {
  /**
   * The height of the divider
   */
  height?: number;

  /**
   * The size of space around the divider
   */
  offset?: number;

  /**
   * The direction of the divider : horizontal or vertical
   */
  direction?: DividerDirection;

  /**
   * The style of the divider
   */
  type?: BorderType;

  /**
   * The divider color
   */
  color?: string;
}
