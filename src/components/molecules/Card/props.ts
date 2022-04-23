import { CardData } from '@/common';
import { LinkProps } from 'react-router-dom';

export interface CardProps extends Partial<LinkProps> {
  card: CardData;
}
