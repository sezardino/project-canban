import { Toast } from '@/common';
import React, { useState } from 'react';
import { UIContext } from './context';

interface Props {
  children: React.ReactNode;
}

export const UIProvider: React.FC<Props> = (props) => {
  const { children } = props;
  const [toasts, setToasts] = useState<Toast[]>([]);

  return <UIContext.Provider value={{ toasts, setToasts }}>{children}</UIContext.Provider>;
};
