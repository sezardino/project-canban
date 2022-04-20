import { Toast } from '@/components/molecules';
import { useUI } from '@/context';
import { usePortal } from '@/hooks';
import cn from 'classnames';
import { ToastsWrapperProps } from './props';

export const ToastsWrapper: React.FC<ToastsWrapperProps> = (props) => {
  const { className, ...rest } = props;
  const { Portal } = usePortal('toasts');
  const { toasts } = useUI();

  return (
    <Portal {...rest} className={cn('grid content-start gap-4 z-10', className)}>
      {toasts.map((toast, index) => (
        <Toast key={index} {...toast} className="animate-show" />
      ))}
    </Portal>
  );
};
