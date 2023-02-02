import { PropsWithChildren } from 'react';
import { BadgeProps } from './badge.typings';
import { BADGE_POSITION_CSS } from './badge.variables';

export const Badge = ({
  position = 'br',
  children,
  offset = 2,
  className = '',
  value = '',
}: PropsWithChildren<BadgeProps>) => {
  const css = [
    'tw-absolute tw-rounded-full tw-flex tw-justify-center tw-items-center',
    BADGE_POSITION_CSS[position],
    `lib-translate-${position}-${offset}`,
    className,
  ].join(' ');

  return (
    <div className="tw-relative tw-w-fit">
      {children}
      <div className={css}>{value}</div>
    </div>
  );
};
