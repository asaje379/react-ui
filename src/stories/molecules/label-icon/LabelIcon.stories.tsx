import { ComponentStory, ComponentMeta } from "@storybook/react";

import "../../../assets/scss/index.scss";
import { LabelIcon } from "../../../components/molecules/label-with-icon/LabelIcon";

export default {
  title: "molecules/label-icon",
  component: LabelIcon,
} as ComponentMeta<typeof LabelIcon>;

const Template: ComponentStory<typeof LabelIcon> = (args) => (
  <LabelIcon {...args}>Home</LabelIcon>
);

export const BaseLabelIcon = Template.bind({});
BaseLabelIcon.args = {
  icon: "home",
  color: "blue",
  offset: 3,
  size: 20,
};
