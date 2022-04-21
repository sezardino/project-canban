import { Text } from '@/components/atoms';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { CardProps } from './props';

export const Card: React.FC<CardProps> = (props) => {
  const { name, id, className, children, ...rest } = props;

  return (
    <Link
      {...rest}
      to={`?task=${id}`}
      className={cn(
        'grid gap-2 items-start shadow-md p-2 rounded-md outline-none bg-white bg-opacity-80 hover:bg-opacity-100',
        className,
      )}
    >
      <header>
        <Text size="lg" weight="medium">
          {name}
        </Text>
        <footer className="flex justify-between">
          <Text size="sm">{id}</Text>
        </footer>
      </header>
    </Link>
  );
};
