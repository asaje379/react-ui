import { ComponentStory, ComponentMeta } from "@storybook/react";

import "../../../assets/scss/index.scss";
import { Divider } from "../../../components";

export default {
  title: "atoms/dividers",
  component: Divider,
} as ComponentMeta<typeof Divider>;

const HTemplate: ComponentStory<typeof Divider> = (args) => (
  <Divider {...args} />
);
const VTemplate: ComponentStory<typeof Divider> = (args) => (
  <div className="flex">
    <div className="h-[100px] w-[100px] p-3 bg-[red]">A</div>
    <Divider {...args} />
    <div className="h-[100px] w-[100px] p-3 bg-[blue]">B</div>
    <Divider {...args} />
    <div className="h-[100px] w-[100px] p-3 bg-[orange]">C</div>
    <Divider {...args} />
    <div className="h-[100px] w-[100px] p-3 bg-[green]">D</div>
  </div>
);

export const VerticalDivider = HTemplate.bind({});
VerticalDivider.args = {
  direction: "horizontal",
  height: 2,
  offset: 3,
  type: "solid",
};

export const HorizontalDivider = VTemplate.bind({});
HorizontalDivider.args = {
  direction: "vertical",
  color: "#333",
  height: 1,
  offset: 4,
  type: "dotted",
};
