import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { PortalProps } from './Portal.props';

export const Portal: React.FC<PortalProps> = (props) => {
  const { children, containerId } = props;
  const [container] = useState(document.createElement('div'));

  container.setAttribute('id', containerId);

  useEffect(() => {
    document.body.appendChild(container);

    return () => {
      document.body.removeChild(container);
    };
  }, []);

  return createPortal(children, container);
};
