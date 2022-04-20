import cn from 'classnames';
import { BadgeProps } from './props';
import { mainElStyles } from '@/common';

export const Badge: React.FC<BadgeProps> = (props) => {
  const { color = 'primary', isPill = false, className, children, ...rest } = props;

  return (
    <small
      {...rest}
      className={cn(
        'inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold rounded',
        mainElStyles[color],
        { ['rounded-full']: isPill },
        className,
      )}
    >
      {children}
    </small>
  );
};
