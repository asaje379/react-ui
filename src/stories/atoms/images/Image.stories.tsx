import { ComponentStory, ComponentMeta } from '@storybook/react';

import '../../../assets/scss/index.scss';
import { Image } from '../../../components/atoms/images/Image';

export default {
  title: 'atoms/images',
  component: Image,
  argTypes: {
    loading: {
      control: 'select',
      options: ['eagger', 'lazy'],
    },
    ratio: {
      control: 'select',
      options: ['auto', 'square', 'video', '4/3'],
    },
  },
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;
const MultipleImagesTemplate: ComponentStory<typeof Image> = (args) => (
  <div>
    <Image ratio="video" src="/src/assets/images/bg1.jpeg" width="100%" />
    <Image ratio="video" src="/src/assets/images/bg2.jpeg" width="100%" />
    <Image ratio="video" src="/src/assets/images/bg3.jpeg" width="100%" />
    <Image ratio="video" src="/src/assets/images/bg4.jpeg" width="100%" />
    <Image ratio="video" src="/src/assets/images/bg5.jpeg" width="100%" />
  </div>
);

export const BaseImage = Template.bind({});
BaseImage.args = {
  src: '/src/assets/images/cindy.png',
};

export const SquareImage = Template.bind({});
SquareImage.args = {
  ratio: 'square',
  src: '/src/assets/images/gladys.png',
};

export const VideoImage = Template.bind({});
VideoImage.args = {
  ratio: 'video',
  src: '/src/assets/images/mountains.png',
  width: '100%',
};

export const MultipleImage = MultipleImagesTemplate.bind({});
