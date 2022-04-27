import { Board, Card, Column } from '@/common';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppReducers } from '../../types';
import * as asyncActions from './actionCreators';

interface DemoBoardState {
  currentBoard: Board | null;
  cards: Card[];
  columns: Column[];
  isLoading: boolean;
  error: string | null;
  info: string | null;
}

const initialState: DemoBoardState = {
  currentBoard: {} as Board,
  cards: [],
  columns: [],
  isLoading: false,
  error: null,
  info: null,
};

const boardSlice = createSlice({
  name: AppReducers.DEMO_BOARD,
  initialState,
  reducers: {
    setCurrentBoard: (state, action: PayloadAction<Board | null>) => {
      state.currentBoard = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setInfo: (state, action: PayloadAction<string>) => {
      state.info = action.payload;
    },
    setCards: (state, action: PayloadAction<Card[]>) => {
      state.cards = action.payload;
    },
    setColumns: (state, action: PayloadAction<Column[]>) => {
      state.columns = action.payload;
    },
    addCard: (state, action: PayloadAction<Card>) => {
      state.cards.push(action.payload);
    },
    addColumn: (state, action: PayloadAction<Column>) => {
      state.columns.push(action.payload);
    },
    updateCard: (state, action: PayloadAction<Card>) => {
      const index = state.cards.findIndex((card) => card.id === action.payload.id);
      state.cards[index] = action.payload;
    },
  },
  extraReducers: {},
});

export const demoBoardReducer = boardSlice.reducer;
export const demoBoardActions = boardSlice.actions;
export const demoBoardAsyncActions = asyncActions;
