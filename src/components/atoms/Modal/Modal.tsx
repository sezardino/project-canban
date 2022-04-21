/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { usePortal } from '@/hooks';
import cn from 'classnames';
import { ModalProps } from './props';

export const Modal: React.FC<ModalProps> = (props) => {
  const { isOpen, closeHandler, className, children, ...rest } = props;
  const { Portal } = usePortal('modals-root');

  const keyDownHandler = (evt: React.KeyboardEvent<HTMLDivElement>) => {
    if (evt.key === 'Escape') {
      closeHandler();
    }
  };

  return (
    <Portal>
      <div
        {...rest}
        className={cn(
          'fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 overflow-x-hidden overflow-y-auto flex items-center justify-center z-20',
          { hidden: !isOpen },
          className,
        )}
        aria-hidden={isOpen ? 'false' : 'true'}
        role="dialog"
        onClick={closeHandler}
        onKeyDown={keyDownHandler}
      >
        <div className="relative p-4 bg-white mx-auto rounded z-30 shadow-lg" onClick={(evt) => evt.stopPropagation()}>
          {children}
        </div>
      </div>
    </Portal>
  );
};
