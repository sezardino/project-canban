import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Base/Button',
  component: Button,
  args: {
    color: 'primary',
    isFullWidth: false,
    isRounded: false,
    isOutlined: false,
    size: 'lg',
  },
  argTypes: {
    color: {
      name: 'color',
      default: 'primary',
      type: 'string',
      description: 'The color of the button',
      options: ['primary', 'danger', 'success', 'warning', 'info', 'light', 'dark'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      type: 'string',
      name: 'size',
      description: 'The size of the button',
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
    },
    isRounded: {
      name: 'isRounded',
      defaultValue: false,
      type: 'boolean',
      description: 'Whether the button is rounded',
    },
    isFullWidth: {
      name: 'isFullWidth',
      type: 'boolean',
      description: 'Whether the button is full width',
    },
    isOutlined: {
      name: 'isOutlined',
      type: 'boolean',
      description: 'Whether the button is outlined',
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>Button Component</Button>;

export const Default = Template.bind({});
Default.args = {};

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'md',
};

export const Large = Template.bind({});
Small.args = {
  size: 'lg',
};

export const WithFullWidth = Template.bind({});
WithFullWidth.args = {
  isFullWidth: true,
};

export const Outlined = Template.bind({});
Outlined.args = {
  isOutlined: true,
};

export const Rounded = Template.bind({});
Rounded.args = {
  isRounded: true,
};

export const OutlinedAndRounded = Template.bind({});
OutlinedAndRounded.args = {
  isRounded: true,
  isOutlined: true,
};
