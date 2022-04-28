import { ErrorTemplate } from '@/components';

export const NotFound = () => {
  return <ErrorTemplate status={404} description="page not found" />;
};

export default NotFound;
