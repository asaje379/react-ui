export interface CarouselProps {
  /**
   * List of carousel images
   */
  imgs: string[];

  /**
   * animation duration in seconds
   */
  animationDuration: number;

  /**
   * Width of the images
   */
  width: number;

  /**
   * Height of the images in pixel
   */
  height: number;

  /**
   * The images width units
   */
  widthUnit: 'px' | 'vw' | '%' | string;
}
