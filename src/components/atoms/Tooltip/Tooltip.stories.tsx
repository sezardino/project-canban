import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Tooltip } from './Tooltip';

export default {
  title: 'Base/Tooltip',
  component: Tooltip,
  args: {
    label: 'Tooltip Content',
    position: 'top',
    noInteraction: false,
  },
  argTypes: {
    label: {
      name: 'label',
      default: '',
      type: 'string',
      description: 'Content of the tooltip',
    },
    position: {
      name: 'position',
      type: 'string',
      description: 'Position of the tooltip',
      options: ['top', 'left', 'bottom', 'right'],
      control: {
        type: 'inline-radio',
      },
    },
    noInteraction: {
      name: 'noInteraction',
      type: 'boolean',
      description: 'Whether the tooltip should be shown on hover',
    },
    isActive: {
      name: 'isActive',
      type: 'boolean',
      description: 'tooltip visibility',
    },
  },
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <div className="w-full flex flex-col gap-9 items-center py-10">
    <Tooltip {...args}>
      <h1 className="text-xl inline-block text-center">Hover me</h1>
    </Tooltip>
    <Tooltip {...args}>
      <p className="text-xl inline-block text-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima similique quasi aliquid debitis, enim aliquam
        quia atque ducimus quos doloribus unde alias deserunt porro recusandae maxime! Nihil, obcaecati autem sint
        inventore similique aperiam eos, asperiores, optio unde sequi a corporis excepturi cumque quidem pariatur esse.
        Rerum esse aliquid consectetur minima nostrum quasi deleniti, facere accusamus totam nisi, consequatur
        asperiores ducimus iste voluptates autem id illo minus a debitis! Veniam sed porro doloremque cupiditate
        accusamus eos alias, qui cumque beatae sequi quam quibusdam et culpa. Quas molestiae harum doloremque amet odit
        exercitationem, nam ullam! Veritatis esse, alias odio fuga quos facilis.
      </p>
    </Tooltip>
  </div>
);

export const PositionedOnTop = Template.bind({});
PositionedOnTop.args = {};

export const PositionedOnLeft = Template.bind({});
PositionedOnLeft.args = {
  position: 'left',
};

export const PositionedOnRight = Template.bind({});
PositionedOnRight.args = {
  position: 'right',
};

export const PositionedOnBottom = Template.bind({});
PositionedOnBottom.args = {
  position: 'bottom',
};

export const NoInteraction = Template.bind({});
NoInteraction.args = {
  noInteraction: true,
};
