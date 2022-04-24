import { CardData, Column } from '@/common';

export type ChangeCardColumnPayload = Pick<CardData, 'id' | 'column'>;
export type ChangeCardOrderPayload = Pick<CardData, 'id' | 'order'>;
export type ChangeCardTitlePayload = Pick<CardData, 'id' | 'title'>;

export type AddCardPayload = Pick<CardData, 'title'>;

export type ChangeColumnLabelPayload = Pick<Column, 'id' | 'label'>;
