import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Textarea } from './Textarea';

export default {
  title: 'Base/Textarea',
  component: Textarea,
  args: {
    label: 'Type Something Nice',
  },
  argTypes: {
    label: {
      name: 'label',
      default: 'Type Something Nice',
      type: 'string',
      description: 'The label of the textarea',
    },
  },
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => <Textarea {...args}></Textarea>;

export const Default = Template.bind({});
Default.args = {};
