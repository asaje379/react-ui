import { DividerProps } from "./dividers.typings";

export const Divider = ({
  direction = "horizontal",
  height = 1,
  offset = 1,
  type = "solid",
  color = "#A5A3A9",
}: DividerProps) => {
  const borderValue = `${type} ${height}px ${color}`;
  return (
    <div
      style={{
        ...(direction === "horizontal"
          ? { borderTop: borderValue }
          : { borderLeft: borderValue }),
        margin: `${direction === "horizontal" ? offset * 5 + "px" : "0"} ${
          direction === "vertical" ? offset * 5 + "px" : "0"
        }`,
      }}
    ></div>
  );
};
