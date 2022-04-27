/* eslint-disable react/no-unescaped-entities */
import { Heading, Text } from '@/components';

import { ReactComponent as SceneIllustration } from '@/assets/ilustrations/scene/scene-1.svg';

export const Home: React.FC = () => {
  return (
    <section className="container mx-auto flex gap-2 items-center">
      <div className="py-40">
        <Heading type="h1" styledAs="h2">
          Project Canban
        </Heading>
        <Text size="xl" className="mt-5">
          This project created for education and does't have any commercial purpose
        </Text>
      </div>
      <SceneIllustration />
    </section>
  );
};
