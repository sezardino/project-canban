import { Portal } from '@/components/atoms';
import { Toast } from '@/components/molecules';
import { useUI } from '@/context';
import cn from 'classnames';
import { ToastsWrapperProps } from './props';

export const ToastsWrapper: React.FC<ToastsWrapperProps> = (props) => {
  const { className, ...rest } = props;
  const { toasts } = useUI();

  return (
    <Portal {...rest} containerId="toasts" className={cn('grid content-start gap-4 z-10', className)}>
      {toasts.map((toast, index) => (
        <Toast key={index} {...toast} className="animate-show" />
      ))}
    </Portal>
  );
};
