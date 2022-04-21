import { fontStyles } from '@/common';
import cn from 'classnames';
import { SpinnerProps } from './props';

export const Spinner: React.FC<SpinnerProps> = (props) => {
  const { color = 'primary', size = 'md', type = 'spin', className, ...rest } = props;

  const sizes = {
    sm: 'h-6 w-6',
    md: 'h-8 w-8',
    lg: 'h-10 w-10',
    xl: 'h-12 w-12',
  };

  const currentSize = sizes[size];

  const commonStyles = cn(currentSize, 'inline-block rounded-full');
  const spinStyles = cn(commonStyles, 'border-r-transparent border-solid border-current animate-spin border-4');
  const growStyles = cn(commonStyles, 'bg-current animate-ping');
  const circleStyles = cn(commonStyles, 'bg-current');

  const circleJSX = (
    <>
      <span className={cn(circleStyles, 'mr-2 animate-bounce')}></span>
      <span className={cn(circleStyles, 'mr-2 animate-bounce-200')}></span>
      <span className={cn(circleStyles, 'animate-bounce-400')}></span>
    </>
  );

  return (
    <div {...rest} className={cn('flex', fontStyles[color], className)} role="status">
      {type === 'circle' ? (
        circleJSX
      ) : (
        <span className={cn({ [spinStyles]: type === 'spin', [growStyles]: type === 'grow' })} />
      )}
      <span className="sr-only">Loading...</span>
    </div>
  );
};
