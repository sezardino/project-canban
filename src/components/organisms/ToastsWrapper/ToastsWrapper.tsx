import { Portal } from '@/components/atoms';
import { Toast } from '@/components/molecules';
import { useUI } from '@/context';
import cn from 'classnames';
import { ToastsWrapperProps } from './props';

export const ToastsWrapper: React.FC<ToastsWrapperProps> = (props) => {
  const { className, ...rest } = props;
  const { toasts } = useUI();

  return (
    <Portal containerId="toasts" className={className}>
      <div {...rest} className={cn('grid gap-4 z-10')}>
        {toasts.map((toast, index) => (
          <Toast key={index} {...toast} className="animate-show" />
        ))}
      </div>
    </Portal>
  );
};
