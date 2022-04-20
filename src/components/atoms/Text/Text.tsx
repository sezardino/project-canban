import { fontStyles, fontWeightStyles } from '@/common';
import cn from 'classnames';
import { TextProps } from './props';

export const Text: React.FC<TextProps> = (props) => {
  const { size = 'md', color = 'dark', weight = 'normal', className, children, ...rest } = props;

  const baseStyles = 'leading-light';

  const fontWeight = fontWeightStyles[weight];

  const fontSizes = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
  };

  const fontColor = fontStyles[color];

  return (
    <p {...rest} className={cn(baseStyles, fontSizes[size], fontColor, fontWeight, className)}>
      {children}
    </p>
  );
};
