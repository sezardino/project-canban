import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Input } from './Input';

export default {
  title: 'Base/Input',
  component: Input,
  args: {
    label: 'Type Something Nice',
    placeholder: 'Type Something Nice',
  },
  argTypes: {
    label: {
      name: 'label',
      default: 'Type Something Nice',
      type: 'string',
      description: 'The label of the Input',
    },
    helperText: {
      name: 'helperText',
      default: '',
      type: 'string',
      description: 'The helper text of the Input',
    },
    size: {
      type: 'string',
      name: 'size',
      description: 'The size of the input',
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args}></Input>;

export const DefaultMedium = Template.bind({});
DefaultMedium.args = {};

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
};

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const WithHelperText = Template.bind({});
WithHelperText.args = {
  helperText: 'helper text',
};
