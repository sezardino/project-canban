import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { PortalProps } from './Portal.props';

export const Portal: React.FC<PortalProps> = (props) => {
  const { children, containerId, className } = props;
  const [container] = useState(document.createElement('div'));

  container.setAttribute('id', containerId);

  if (className) {
    container.setAttribute('class', className);
  }

  useEffect(() => {
    document.body.appendChild(container);

    return () => {
      document.body.removeChild(container);
    };
  }, []);

  return createPortal(children, container);
};
