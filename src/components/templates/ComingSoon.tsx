import { Button, Heading } from '@/components';
import { ReactComponent as Logo } from '@/assets/logo-full.svg';

export const ComingSoonTemplate = () => {
  return (
    <div className="container mx-auto h-full text-center py-40">
      <Logo width="250" height="250" className="mx-auto" />
      <Heading type="h1">New Things Coming Soon</Heading>
      <div className="mt-10 flex gap-2 justify-center">
        <Button to={'/release'} isOutlined color="dark" size="lg">
          Stay tuned for updates
        </Button>
        <Button to={'/demo'} isOutlined color="dark" size="lg">
          Try the demo for now
        </Button>
      </div>
    </div>
  );
};
