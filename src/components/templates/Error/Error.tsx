import { Text } from '@/components';
import { ErrorTemplateProps } from './props';

export const ErrorTemplate: React.FC<ErrorTemplateProps> = (props) => {
  return (
    <section className="container mx-auto h-screen flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-bold text-9xl">{props.status}</h1>
        <Text size="xl" color="secondary" className="mt-4">
          {props.description}
        </Text>
      </div>
    </section>
  );
};
