import { PropsWithChildren } from "react";
import { Icon } from "../../atoms/icons/Icon";
import { LabelIconProps } from "./label-icons.typings";

export const LabelIcon = ({
  icon,
  color = "#000",
  size = 24,
  iconType = "default",
  offset = 1,
  iconPosition = "left",
  children,
}: PropsWithChildren<LabelIconProps>) => {
  return (
    <div className="flex items-center">
      {iconPosition === "left" && (
        <Icon name={icon} size={size} color={color} type={iconType} />
      )}
      <div
        style={{
          color,
          fontSize: `${size}px`,
          ...(iconPosition === "left"
            ? { marginLeft: `${offset * 3}px` }
            : { marginRight: `${offset * 3}px` }),
        }}
      >
        {children}
      </div>
      {iconPosition === "right" && (
        <Icon name={icon} size={size} color={color} type={iconType} />
      )}
    </div>
  );
};
