import { ComponentStory, ComponentMeta } from "@storybook/react";

import "../../../assets/scss/index.scss";
import { Label } from "../../../components/atoms/labels/Label";

export default {
  title: "atoms/label",
  component: Label,
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => (
  <Label {...args}>Cyndy Lillibridge</Label>
);

const PostTemplate: ComponentStory<typeof Label> = (args) => (
  <Label {...args}>368</Label>
);

const FollowersTemplate: ComponentStory<typeof Label> = (args) => (
  <Label {...args}>184.3K</Label>
);

export const BaseLabel = Template.bind({});
BaseLabel.args = {
  description: "Torrance, CA, United States",
};

export const PostsLabel = PostTemplate.bind({});
PostsLabel.args = {
  description: "Posts",
};

export const FollowersLabel = FollowersTemplate.bind({});
FollowersLabel.args = {
  description: "Followers",
};
