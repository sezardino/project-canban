import { Heading, Text } from '@/components';

export const NotFound = () => {
  return (
    <div className="container mx-auto text-center">
      <Heading type="h1">404</Heading>
      <Text className="mt-4">Page not found</Text>
    </div>
  );
};

export default NotFound;
