import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Heading } from './Heading';

export default {
  title: 'Base/Heading',
  component: Heading,
  args: {
    type: 'h2',
    styledAs: undefined,
    color: 'dark',
  },
  argTypes: {
    type: {
      name: 'type',
      default: 'h2',
      type: 'string',
      description: 'The heading type',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: {
        type: 'inline-radio',
      },
    },
    styledAs: {
      name: 'styledAs',
      default: 'h2',
      type: 'string',
      description: 'The heading styling type',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: {
        type: 'inline-radio',
      },
    },
    color: {
      name: 'color',
      default: 'h2',
      type: 'string',
      description: 'The color of the button',
      options: ['primary', 'danger', 'success', 'warning', 'info', 'light', 'dark'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <>
    <Heading {...args}>Title</Heading>
  </>
);

export const Default = Template.bind({});
Default.args = {};

export const H1 = Template.bind({});
H1.args = {
  type: 'h1',
};

export const H3 = Template.bind({});
H3.args = {
  type: 'h3',
};

export const H4 = Template.bind({});
H4.args = {
  type: 'h4',
};

export const H5 = Template.bind({});
H5.args = {
  type: 'h5',
};

export const H6 = Template.bind({});
H6.args = {
  type: 'h6',
};

export const H6WithH1Styles = Template.bind({});
H6WithH1Styles.args = {
  type: 'h6',
  styledAs: 'h1',
};

export const HeadingWithAnotherColor = Template.bind({});
HeadingWithAnotherColor.args = {
  color: 'light',
};
