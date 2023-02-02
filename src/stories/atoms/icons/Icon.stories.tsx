import { ComponentStory, ComponentMeta } from '@storybook/react';

import '../../../assets/scss/index.scss';
import { Icon } from '../../../components/atoms/icons/Icon';

export default {
  title: 'atoms/icons',
  component: Icon,
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'outlined', 'two-tone', 'round', 'sharp'],
    },
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const SearchIcon = Template.bind({});
SearchIcon.args = {
  name: 'search',
};

export const AddIcon = Template.bind({});
AddIcon.args = {
  name: 'add',
};
