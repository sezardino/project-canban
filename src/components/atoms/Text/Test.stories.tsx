import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Text } from './Text';

export default {
  title: 'Base/Text',
  component: Text,
  args: {
    size: 'md',
    color: 'dark',
    weight: 'normal',
  },
  argTypes: {
    color: {
      name: 'color',
      default: 'dark',
      type: 'string',
      description: 'The color of the text',
      options: ['primary', 'danger', 'success', 'warning', 'info', 'light', 'dark'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      type: 'string',
      name: 'size',
      description: 'The size of the button',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: {
        type: 'inline-radio',
      },
    },
    weight: {
      type: 'string',
      name: 'weight',
      description: 'The size of the button',
      options: ['light', 'normal', 'medium', 'semibold', 'bold'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => (
  <div className="flex flex-col gap-5">
    <Text {...args}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non dolor minus qui error. Aliquid nisi ab sunt cum est
      quisquam at corrupti expedita ratione iste.
    </Text>
    <Text {...args}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. At minima nulla deleniti atque aspernatur reiciendis
      obcaecati incidunt recusandae inventore maxime ullam molestiae provident, a necessitatibus alias amet commodi
      expedita accusamus quaerat quas. Vitae porro ab id corrupti voluptatem! Fuga, totam? Suscipit ipsa perferendis
      dolorum quod voluptas cupiditate reprehenderit dolore enim?
    </Text>
    <Text {...args}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. At minima nulla deleniti atque aspernatur reiciendis
      obcaecati incidunt recusandae inventore maxime ullam molestiae provident, a necessitatibus alias amet commodi
      expedita accusamus quaerat quas. Vitae porro ab id corrupti voluptatem! Fuga, totam? Suscipit ipsa perferendis
      dolorum quod voluptas cupiditate reprehenderit dolore enim?
    </Text>
    <Text {...args}>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex quas, in ipsa ut officiis adipisci! Eligendi optio
      pariatur dolores dicta deserunt ea mollitia aperiam temporibus? Consequuntur, magni ipsa a necessitatibus
      architecto maxime porro veniam quidem beatae magnam cupiditate, aliquid, voluptatum adipisci corporis est esse
      quisquam voluptas sapiente accusantium enim! Sed odio necessitatibus vero minima eligendi eos reprehenderit quam
      eveniet nobis? Est eligendi deleniti, quis consequatur, ex hic unde alias sed, sit eius eum animi aliquid!
    </Text>
    <Text {...args}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, tempora eum. Consectetur labore accusamus molestias
      sequi doloribus repudiandae aliquid ratione minus at quia. Culpa veritatis fugit eius tempore facere ducimus,
      iste, neque obcaecati enim eaque placeat quo nam magni ratione, temporibus a unde sunt. Itaque nihil laborum
      mollitia excepturi eveniet perspiciatis deserunt alias fugiat sapiente expedita veritatis, iusto vero cum
      blanditiis, corrupti quidem iure? Quibusdam veritatis corrupti minus commodi voluptatem incidunt, earum, accusamus
      inventore facilis consectetur, sequi mollitia vitae ab consequuntur. Ut ex minus quas, repudiandae placeat nulla
      quia natus debitis perferendis sapiente eum, quaerat quae dolorem, beatae pariatur! Suscipit?
    </Text>
    <Text {...args}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque illum atque laboriosam reprehenderit corrupti
      ratione alias aliquam commodi vero sint labore unde expedita fuga amet possimus debitis ex soluta, modi eos autem
      totam repellendus excepturi. Expedita, sed fuga illum est aut iste necessitatibus vero ipsum, id impedit, eaque
      veritatis ad? Harum, eos, quam eius qui iure dolore iste tempora tenetur eligendi quod labore provident, earum
      ratione! Esse assumenda repellendus omnis libero ut illo voluptate atque amet consectetur laboriosam, delectus
      architecto adipisci optio nemo aut soluta quas deleniti velit perferendis, animi, debitis odio nisi facilis
      facere. Distinctio iste non quos temporibus nihil esse fugiat ullam delectus maiores id, aut tenetur aperiam
      nostrum quisquam sit laboriosam quis voluptate! Reprehenderit perferendis, inventore aliquam enim, nisi a
      doloribus nemo ex dolores commodi suscipit culpa esse in, ut placeat nam illum quidem sunt earum excepturi vero
      numquam dolor neque! Voluptatum beatae numquam vitae eum rerum.
    </Text>
  </div>
);

export const Default = Template.bind({});
Default.args = {};

export const WithAnotherWeight = Template.bind({});
WithAnotherWeight.args = {
  weight: 'medium',
};

export const WithAnotherSize = Template.bind({});
WithAnotherSize.args = {
  size: 'xl',
};

export const WithAnotherColor = Template.bind({});
WithAnotherColor.args = {
  color: 'danger',
};
