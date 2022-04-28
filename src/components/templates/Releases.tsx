import { Heading, Text } from '@/components';

export const ReleasesTemplate = () => {
  return (
    <section className="container mx-auto mt-10">
      <Heading type="h1" styledAs="h1">
        Release Notes
      </Heading>
      <Text size="xl" className="mt-2">
        On this page you can find the release notes for the latest version of the application.
      </Text>
      <Heading type="h2" styledAs="h4" className="mt-10">
        For now is empty
      </Heading>
    </section>
  );
};
