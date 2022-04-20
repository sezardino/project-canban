import { useEffect, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';

import { HTMLProps } from 'react';
import React from 'react';

export interface PortalProps extends HTMLProps<HTMLDivElement> {}

interface UsePortal {
  Portal: React.FC<PortalProps>;
}

export const usePortal = (containerId: string): UsePortal => {
  const portalWrapper = useRef(document.createElement('div'));
  portalWrapper.current.setAttribute('id', containerId);

  useEffect(() => {
    document.body.appendChild(portalWrapper.current);

    return () => {
      document.body.removeChild(portalWrapper.current);
    };
  }, []);

  const Portal: React.FC<PortalProps> = useCallback((props) => {
    const { children, className } = props;
    portalWrapper.current.setAttribute('class', className || '');

    return createPortal(children, portalWrapper.current);
  }, []);

  return { Portal };
};
