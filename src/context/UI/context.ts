import { Toast } from '@/common';
import { createContext } from 'react';

interface ToastContextData {
  toasts: Toast[];
  setToasts: React.Dispatch<React.SetStateAction<Toast[]>>;
}

export const UIContext = createContext<ToastContextData>({} as ToastContextData);
