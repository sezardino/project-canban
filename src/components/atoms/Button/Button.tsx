import { ButtonProps } from './props';
import cn from 'classnames';
import { Link, LinkProps } from 'react-router-dom';
import { HTMLProps } from 'react';

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    size = 'md',
    isFullWidth = false,
    isRounded,
    isOutlined = false,
    color = 'primary',
    children,
    ...rest
  } = props;

  const commonStyles =
    'inline-block font-medium text-xs leading-tight uppercase rounded shadow-md focus:outline-none focus:ring-0 transition duration-150 ease-in-out disabled:pointer-events-none disabled:opacity-60';

  const roundedStyles = 'rounded-full';

  const sizesStyles = {
    sm: 'px-4 py-1.5',
    md: 'px-6 py-2.5',
    lg: 'px-7 py-3',
  };

  const defaultOutlinedStyles = 'border-2 border-current bg-transparent hover:bg-black hover:bg-opacity-5';

  const outlinedStyles = {
    primary: 'text-primary-600',
    secondary: 'text-secondary-600',
    success: 'text-success-500',
    danger: 'text-danger-600',
    warning: 'text-warning-500',
    info: 'text-primary-400',
    light: 'text-tertiary-200',
    dark: 'text-tertiary-800',
  };

  const colorStyles = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:bg-primary-700 active:bg-primary-800',
    secondary: 'bg-secondary-600 text-white hover:bg-secondary-700 focus:bg-secondary-700 active:bg-secondary-800',
    success: 'bg-success-500 text-white hover:bg-success-600 focus:bg-success-600 active:bg-success-700',
    danger: 'bg-danger-600 text-white hover:bg-danger-700 focus:bg-danger-700 active:bg-danger-800',
    warning: 'bg-warning-500 text-white hover:bg-warning-600 focus:bg-warning-600 active:bg-warning-700',
    info: 'bg-primary-400 text-white hover:bg-primary-500 focus:bg-primary-500 active:bg-primary-600',
    light: 'bg-tertiary-200 text-tertiary-700 hover:bg-tertiary-300 focus:bg-tertiary-300 active:bg-tertiary-400',
    dark: 'bg-tertiary-800 text-white hover:bg-tertiary-900 focus:bg-tertiary-900 active:bg-tertiary-900',
  };

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
        [outlinedStyles[color]]: isOutlined,
        [defaultOutlinedStyles]: isOutlined,
        [colorStyles[color]]: !isOutlined,
        ['w-full']: isFullWidth,
        [roundedStyles]: isRounded,
      })}
    >
      {children}
    </button>
  );
};
