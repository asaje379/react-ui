import { LabelHTMLAttributes } from 'react';

export type LabelSize = 'small' | 'medium' | 'large' | 'x-large' | 'huge';
export type LabelAlignment = 'left' | 'center' | 'right' | 'justify';

export interface LabelTitleDescription {
  title: string;
  description: string;
}

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  /**
   * A description for the label
   */
  description?: string;

  /**
   * The label's size
   */
  size?: LabelSize;

  /**
   * Text alignment
   */
  align?: LabelAlignment;

  /**
   * The space between the label and its description
   */
  offset?: number;
}
