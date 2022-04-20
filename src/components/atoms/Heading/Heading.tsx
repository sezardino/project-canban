import cn from 'classnames';
import { HeadingProps } from './props';
import { fontColors } from '@/common/consts';

export const Heading: React.FC<HeadingProps> = (props) => {
  const { type: Type = 'h2', styledAs = Type, color = 'dark', className, ...rest } = props;

  const defaultStyles = 'font-medium leading-tight';

  const styles = {
    h1: 'text-7xl',
    h2: 'text-6xl',
    h3: 'text-5xl',
    h4: 'text-4xl',
    h5: 'text-3xl',
    h6: 'text-2xl',
  };

  return <Type {...rest} className={cn(defaultStyles, styles[styledAs], fontColors[color], className)}></Type>;
};
