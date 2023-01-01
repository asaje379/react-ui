import { IconProps } from "./icons.typings";
import { ICON_TYPES_CSS } from "./icons.variables";

export const Icon = ({
  name,
  size = 24,
  type = "default",
  color = "#000",
}: IconProps) => {
  const className = ICON_TYPES_CSS[type];
  const style = { fontSize: `${size}px`, color };

  return (
    <span className={className} style={style}>
      {name}
    </span>
  );
};
