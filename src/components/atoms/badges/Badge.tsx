import { PropsWithChildren } from "react";
import { BadgeProps } from "./badge.typings";
import { BADGE_POSITION_CSS } from "./badge.variables";

export const Badge = ({
  position = "br",
  children,
  offset = 2,
  className = "",
  value = "",
}: PropsWithChildren<BadgeProps>) => {
  const css = [
    "absolute rounded-full flex justify-center items-center",
    BADGE_POSITION_CSS[position],
    `lib-translate-${position}-${offset}`,
    className,
  ].join(" ");

  return (
    <div className="relative w-fit">
      {children}
      <div className={css}>{value}</div>
    </div>
  );
};
