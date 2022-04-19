import { TooltipProps } from './props';
import cn from 'classnames';

export const Tooltip: React.FC<TooltipProps> = (props) => {
  const { label, position = 'top', noInteraction = false, children, className, ...rest } = props;

  const positionStyles = {
    top: '-top-1 -translate-y-full left-1/2 -translate-x-1/2',
    right: '-right-1 translate-x-full top-1/2 -translate-y-1/2',
    bottom: '-bottom-1 translate-y-full left-1/2 -translate-x-1/2',
    left: '-left-1 -translate-x-full top-1/2 -translate-y-1/2',
  };

  const interactionClasses = `
    invisible
    group-hover:visible
    group-focus:visible
    group-focus-within:visible`;

  return (
    <span {...rest} className={cn('inline-flex relative group', className)}>
      {children}
      <small
        className={cn(
          `
          inline-flex
          text-sm text-white
          w-max
          p-2
          rounded
          absolute
          bg-gray-700`,
          {
            [`${positionStyles[position]}`]: true,
            [`${interactionClasses}`]: !noInteraction,
            ['animate-pulse']: noInteraction,
          },
        )}
      >
        {label}
      </small>
    </span>
  );
};
