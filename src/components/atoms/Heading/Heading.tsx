import cn from 'classnames';
import { HeadingProps } from './props';
import { fontStyles } from '@/common';

export const Heading: React.FC<HeadingProps> = (props) => {
  const { type: HeadingLevel = 'h2', styledAs = HeadingLevel, color = 'dark', className, children, ...rest } = props;

  const defaultStyles = 'font-medium leading-tight';

  const styles = {
    h1: 'text-7xl',
    h2: 'text-6xl',
    h3: 'text-5xl',
    h4: 'text-4xl',
    h5: 'text-3xl',
    h6: 'text-2xl',
  };

  return (
    <HeadingLevel {...rest} className={cn(defaultStyles, styles[styledAs], fontStyles[color], className)}>
      {children}
    </HeadingLevel>
  );
};
