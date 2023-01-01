import { ComponentStory, ComponentMeta } from "@storybook/react";

import "../../../assets/scss/index.scss";
import { Badge } from "../../../components/atoms/badges/Badge";
import { Icon } from "../../../components/atoms/icons/Icon";
import { Image } from "../../../components/atoms/images/Image";

export default {
  title: "atoms/badges",
  component: Badge,
  argTypes: {
    position: {
      control: "select",
      options: ["bl", "br", "tl", "tr"],
    },
  },
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => (
  <Badge {...args}>
    <div className="rounded-full px-2 py-1 bg-[green] text-white">ABC</div>
  </Badge>
);

const ImageTemplate: ComponentStory<typeof Badge> = (args) => (
  <Badge {...args}>
    <Image src="/src/assets/images/cindy.png" />
  </Badge>
);

export const DefaultBadge = Template.bind({});
DefaultBadge.args = {
  position: "br",
  value: 1,
  offset: 2,
  className: "px-2 py-0 bg-[blue] text-white text-sm",
};

export const IconBadge = Template.bind({});
IconBadge.args = {
  position: "tl",
  value: <Icon size={16} color="blue" name="check_circle" />,
};

export const EmptyBadge = Template.bind({});
EmptyBadge.args = {
  position: "bl",
  className: "w-[10px] h-[10px] bg-[red] rounded",
  value: <div></div>,
};

export const ImageBadge = ImageTemplate.bind({});
ImageBadge.args = {
  position: "tr",
  offset: 5,
  className: "w-[16px] h-[16px] bg-[red] rounded-full",
  value: <div></div>,
};

export const ImageIconBadge = ImageTemplate.bind({});
ImageIconBadge.args = {
  position: "br",
  offset: 5,
  value: <Icon size={24} color="blue" name="check_circle" />,
};
