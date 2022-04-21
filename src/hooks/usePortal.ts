import { useEffect, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';

import { HTMLProps } from 'react';
import React from 'react';

export interface PortalProps extends HTMLProps<HTMLDivElement> {}

interface UsePortal {
  Portal: React.FC<PortalProps>;
}

export const usePortal = (containerId: string): UsePortal => {
  const portalWrapper = useRef(document.getElementById(containerId) as HTMLDivElement);

  useEffect(() => {
    console.log(portalWrapper.current);
  });

  const Portal: React.FC<PortalProps> = useCallback((props) => {
    const { children } = props;

    return createPortal(children, portalWrapper.current);
  }, []);

  return { Portal };
};
