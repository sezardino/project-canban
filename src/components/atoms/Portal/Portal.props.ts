import { HTMLProps } from 'react';

export interface PortalProps extends HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  containerId: string;
}
