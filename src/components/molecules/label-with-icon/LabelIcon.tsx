import { PropsWithChildren } from 'react';
import { LIB_COLORS } from '../../../lib/variables';
import { Icon } from '../../atoms/icons/Icon';
import { LabelIconProps } from './label-icons.typings';

export const LabelIcon = ({
  icon,
  color = LIB_COLORS.dark,
  iconColor = LIB_COLORS.gray,
  size = 24,
  iconType = 'default',
  offset = 1,
  iconPosition = 'left',
  children,
}: PropsWithChildren<LabelIconProps>) => {
  return (
    <div className="tw-flex tw-items-center">
      {iconPosition === 'left' && (
        <Icon name={icon} size={size} color={iconColor} type={iconType} />
      )}
      <div
        style={{
          color,
          fontSize: `${size}px`,
          ...(iconPosition === 'left'
            ? { marginLeft: `${offset * 3}px` }
            : { marginRight: `${offset * 3}px` }),
        }}
      >
        {children}
      </div>
      {iconPosition === 'right' && (
        <Icon name={icon} size={size} color={iconColor} type={iconType} />
      )}
    </div>
  );
};
