import { Card, CardData, Column } from '@/common';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppReducers } from '../types';
import {
  AddCardPayload,
  ChangeCardColumnPayload,
  ChangeCardOrderPayload,
  ChangeCardTitlePayload,
  ChangeColumnLabelPayload,
} from './types';

interface DemoState {
  cards: Card[];
  columns: Column[];
  isLoading: boolean;
  error: string;
}

const initialState: DemoState = {
  cards: [],
  columns: [],
  isLoading: false,
  error: '',
};

const demoSlice = createSlice({
  name: AppReducers.DEMO,
  initialState,
  reducers: {
    setCards: (state, action: PayloadAction<CardData[]>) => {
      state.cards = action.payload;
    },
    setColumns: (state, action: PayloadAction<Column[]>) => {
      state.columns = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    addCard: (state, action: PayloadAction<AddCardPayload>) => {
      const { title } = action.payload;
      const idNumber = [...state.cards][state.cards.length - 1].id + 1;
      const firstCol = state.columns[0];
      const cardsInFirstCol = state.cards.filter((card) => card.column === firstCol.id);
      const order = cardsInFirstCol[cardsInFirstCol.length - 1].order + 1;

      const newCard = {
        title,
        order,
        column: firstCol.id,
        id: idNumber.toString(),
      };

      state.cards.push(newCard);
    },
    changeCardColumn: (state, action: PayloadAction<ChangeCardColumnPayload>) => {
      const { id, column } = action.payload;
      const card = state.cards.find((c) => c.id === id);
      if (!card) {
        return;
      }
      card.column = column;
    },
    changeCardOrder: (state, action: PayloadAction<ChangeCardOrderPayload>) => {
      const { id, order } = action.payload;
      const card = state.cards.find((c) => c.id === id);
      if (!card) {
        return;
      }
      card.order = order;
    },
    changeCardTitle: (state, action: PayloadAction<ChangeCardTitlePayload>) => {
      const { id, title } = action.payload;
      const card = state.cards.find((c) => c.id === id);
      if (!card) {
        return;
      }
      card.title = title;
    },
    addColumn: (state, action: PayloadAction<Column>) => {
      state.columns.push(action.payload);
    },
    changeColumnLabel: (state, action: PayloadAction<ChangeColumnLabelPayload>) => {
      const { id, label } = action.payload;
      const column = state.columns.find((c) => c.id === id);
      if (!column) {
        return;
      }
      column.label = label;
    },
  },
  extraReducers: {},
});

export const demoReducer = demoSlice.reducer;
export const demoActions = demoSlice.actions;
