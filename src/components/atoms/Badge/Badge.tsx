import { BadgeProps } from './props';
import cn from 'classnames';
import { mainElementsStyles } from '@/common/consts';

export const Badge: React.FC<BadgeProps> = (props) => {
  const { color = 'primary', isPill = false, className, children, ...rest } = props;

  return (
    <small
      {...rest}
      className={cn(
        'inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold rounded',
        mainElementsStyles[color],
        { ['rounded-full']: isPill },
        className,
      )}
    >
      {children}
    </small>
  );
};
