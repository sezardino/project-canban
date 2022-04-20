import { Toast } from '@/common';
import { useContext } from 'react';
import { UIContext } from './context';

interface UseUI {
  toasts: Toast[];
  addToast: (toast: Toast) => void;
}

export const useUI = (): UseUI => {
  const { toasts, setToasts } = useContext(UIContext);

  const addToast = (toast: Toast): void => {
    setToasts((prevToasts) => [...prevToasts, toast]);
    removeToast(toast);
  };

  const removeToast = (toast: Toast, delay = 4000): void => {
    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter((t) => t !== toast));
    }, delay);
  };

  return { toasts, addToast };
};
