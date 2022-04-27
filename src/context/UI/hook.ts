import { Toast, ToastTypes } from '@/common';
import { useContext } from 'react';
import { UIContext } from './context';

interface UseUI {
  toasts: Toast[];
  addToast: (toast: Toast) => void;
  addErrorToast: (message: string) => void;
  addSuccessToast: (message: string) => void;
  addWarningToast: (message: string) => void;
  addInfoToast: (message: string) => void;
}

export const useUI = (): UseUI => {
  const { toasts, setToasts } = useContext(UIContext);

  const addToast = (toast: Toast): void => {
    setToasts((prevToasts) => [...prevToasts, toast]);
    removeToast(toast);
  };

  const addErrorToast = (message: string): void => addToast({ type: ToastTypes.ERROR, message });
  const addSuccessToast = (message: string): void => addToast({ type: ToastTypes.SUCCESS, message });
  const addWarningToast = (message: string): void => addToast({ type: ToastTypes.WARNING, message });
  const addInfoToast = (message: string): void => addToast({ type: ToastTypes.INFO, message });

  const removeToast = (toast: Toast, delay = 4000): void => {
    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter((t) => t !== toast));
    }, delay);
  };

  return { toasts, addToast, addErrorToast, addSuccessToast, addWarningToast, addInfoToast };
};
