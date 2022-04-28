import { Text } from '@/components';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { CardProps } from './props';

export const Card: React.FC<CardProps> = (props) => {
  const { card, className, ...rest } = props;

  return (
    <Link
      {...rest}
      to={`?task=${card.id}`}
      className={cn(
        'grid gap-2 items-start shadow-md p-2 rounded-md outline-none bg-white bg-opacity-80 hover:bg-opacity-100',
        className,
      )}
    >
      <header>
        <Text size="lg" weight="medium">
          {card.title}
        </Text>
        <footer className="flex justify-between">
          <Text size="sm">{card.id}</Text>
        </footer>
      </header>
    </Link>
  );
};
