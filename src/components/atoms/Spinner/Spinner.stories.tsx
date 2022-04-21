import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Spinner } from './Spinner';

export default {
  title: 'Base/Spinner',
  component: Spinner,
  args: {
    color: 'primary',
  },
  argTypes: {
    color: {
      name: 'color',
      defaultValue: 'primary',
      description: 'The color of the spinner',
      type: 'string',
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
      control: {
        type: 'select',
      },
    },
    size: {
      name: 'size',
      defaultValue: 'md',
      description: 'The size of the spinner',
      type: 'string',
      options: ['sm', 'md', 'lg', 'xl'],
      control: {
        type: 'select',
      },
    },
    type: {
      name: 'type',
      defaultValue: 'spin',
      description: 'The type of the spinner',
      type: 'string',
      options: ['spin', 'grow', 'circle'],
      control: {
        type: 'select',
      },
    },
  },
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => (
  <div className="flex gap-6 justify-center items-center">
    <Spinner {...args} size="sm" />
    <Spinner {...args} size="md" />
    <Spinner {...args} size="lg" />
    <Spinner {...args} size="xl" />
  </div>
);

export const Default = Template.bind({});
Default.args = {};

export const Circles = Template.bind({});
Circles.args = {
  type: 'circle',
};

export const Grow = Template.bind({});
Grow.args = {
  type: 'grow',
};
