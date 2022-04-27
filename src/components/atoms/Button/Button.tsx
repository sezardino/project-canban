import { HTMLProps } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import cn from 'classnames';

import { mainElIntStyles, fontStyles, linkIntStyles, mainElStyles } from '@/common';

import { ButtonProps } from './props';

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    size = 'md',
    isFullWidth = false,
    isLink = false,
    isRounded = false,
    isOutlined = false,
    color = 'primary',
    hasPadding = false,
    children,
    className,
    ...rest
  } = props;

  const commonButtonStyles =
    'inline-flex items-center gap-1 font-medium text-xs leading-tight uppercase rounded shadow-md focus:outline-none focus:ring-0 transition duration-300 ease-in-out disabled:pointer-events-none disabled:opacity-60';
  const defaultOutlinedStyles = 'border-2 border-current bg-transparent hover:bg-black hover:bg-opacity-5';

  const sizesStyles = {
    sm: 'px-4 py-1.5',
    md: 'px-6 py-2.5',
    lg: 'px-7 py-3',
  };

  const fonts = fontStyles[color];
  const interactionColors = isLink ? linkIntStyles[color] : mainElIntStyles[color];

  const buttonStyles = cn(sizesStyles[size], commonButtonStyles, {
    [mainElStyles[color]]: !isOutlined,
    [interactionColors]: !isOutlined,
    [defaultOutlinedStyles]: isOutlined,
    [fonts]: isOutlined,
    ['w-full']: isFullWidth,
    ['rounded-full']: isRounded,
  });
  const linkStyles = cn(fonts, {
    [sizesStyles[size]]: hasPadding,
  });
  const classes = cn(
    {
      [buttonStyles]: !isLink,
      [linkStyles]: isLink,
    },
    className,
  );

  if ('to' in props) {
    const typedRest = rest as LinkProps;
    return (
      <Link {...typedRest} to={props.to} className={classes}>
        {children}
      </Link>
    );
  }

  const typedRest = rest as HTMLProps<HTMLButtonElement>;

  return (
    <button {...typedRest} type={props.type ? props.type : 'button'} className={classes}>
      {children}
    </button>
  );
};
