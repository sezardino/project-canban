import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Badge } from './Badge';

export default {
  title: 'Base/Badge',
  component: Badge,
  args: {
    color: 'primary',
    isPill: false,
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
    isPill: {
      name: 'isPill',
      type: 'boolean',
      description: 'Whether the Badge is pill',
    },
  },
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => (
  <>
    <h1 className="text-9xl">
      Lol <Badge {...args}>lol</Badge>
    </h1>
    <h2 className="text-7xl">
      Lol <Badge {...args}>lol</Badge>
    </h2>
    <h3 className="text-5xl">
      Lol <Badge {...args}>lol</Badge>
    </h3>
    <h4 className="text-3xl">
      Lol <Badge {...args}>lol</Badge>
    </h4>
    <h5 className="text-xl">
      Lol <Badge {...args}>lol</Badge>
    </h5>
  </>
);

export const Default = Template.bind({});
Default.args = {};

export const Pill = Template.bind({});
Pill.args = {
  isPill: true,
};
