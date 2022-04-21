import { Task } from '@/common';
import { LinkProps } from 'react-router-dom';

export type CardProps = Partial<LinkProps> & Pick<Task, 'id' | 'name'>;
