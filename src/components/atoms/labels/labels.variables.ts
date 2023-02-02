import {
  LabelAlignment,
  LabelSize,
  LabelTitleDescription,
} from './labels.typings';

export const LABEL_CSS: Record<LabelSize, LabelTitleDescription> = {
  small: {
    title: 'tw-text-base',
    description: 'tw-text-xs',
  },
  medium: {
    title: 'tw-text-xl',
    description: 'tw-text-sm',
  },
  large: {
    title: 'tw-text-2xl',
    description: 'tw-text-base',
  },
  'x-large': {
    title: 'tw-text-3xl',
    description: 'tw-text-lg',
  },
  huge: {
    title: 'tw-text-4xl',
    description: 'tw-text-xl',
  },
};

export const LABEL_CSS_ALIGNMENT: Record<LabelAlignment, string> = {
  left: 'tw-text-left',
  center: 'tw-text-center',
  right: 'tw-text-right',
  justify: 'tw-text-justify',
};

export const LABEL_CSS_OFFSET: Record<number, string> = {
  0: '',
  1: 'tw-pt-1',
  2: 'tw-pt-2',
  3: 'tw-pt-3',
  4: 'tw-pt-4',
  5: 'tw-pt-5',
};
