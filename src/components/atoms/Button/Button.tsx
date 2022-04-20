import { ButtonProps } from './props';
import cn from 'classnames';
import { Link, LinkProps } from 'react-router-dom';
import { HTMLProps } from 'react';
import { fontColors, mainElementsStyles } from '@/common/consts';

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    size = 'md',
    isFullWidth = false,
    isRounded = false,
    isOutlined = false,
    color = 'primary',
    children,
    ...rest
  } = props;

  const commonStyles =
    'inline-flex items-center gap-1 font-medium text-xs leading-tight uppercase rounded shadow-md focus:outline-none focus:ring-0 transition duration-150 ease-in-out disabled:pointer-events-none disabled:opacity-60';

  const roundedStyles = 'rounded-full';

  const sizesStyles = {
    sm: 'px-4 py-1.5',
    md: 'px-6 py-2.5',
    lg: 'px-7 py-3',
  };

  const defaultOutlinedStyles = 'border-2 border-current bg-transparent hover:bg-black hover:bg-opacity-5';

  if ('to' in props) {
    const typedRest = rest as LinkProps;
    return (
      <Link {...typedRest} to={props.to}>
        {children}
      </Link>
    );
  }

  const typedRest = rest as HTMLProps<HTMLButtonElement>;

  return (
    <button
      {...typedRest}
      type={props.type ? props.type : 'button'}
      className={cn(commonStyles, sizesStyles[size], {
        [fontColors[color]]: isOutlined,
        [defaultOutlinedStyles]: isOutlined,
        [mainElementsStyles[color]]: !isOutlined,
        ['w-full']: isFullWidth,
        [roundedStyles]: isRounded,
      })}
    >
      {children}
    </button>
  );
};
