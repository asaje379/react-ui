import { MutableRefObject } from "react";

export interface VisibleInPageArgs<Parent extends HTMLElement> {
  /**
   * A ref to the parent container used as viewport
   */
  parent?: MutableRefObject<Parent | null> | HTMLElement;

  /**
   * A number or an array of numbers which indicate at what percentage of the target's visibility the observer's callback should be executed
   */
  threshold?: number | number[];
}
