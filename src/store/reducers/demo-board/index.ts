import { Board, Card, Column } from '@/common';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppReducers } from '../../types';
import { fulfilledAction, pendingAction, rejectedAction } from '../helpers';
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
  reducers: {},
  extraReducers: {
    [asyncActions.getBoard.pending.type]: pendingAction,
    [asyncActions.getBoard.fulfilled.type]: (state, action: PayloadAction<Board>) => {
      state.currentBoard = action.payload;
      fulfilledAction(state);
    },
    [asyncActions.getBoard.rejected.type]: rejectedAction,
    [asyncActions.getColumns.pending.type]: pendingAction,
    [asyncActions.getColumns.fulfilled.type]: (state, action: PayloadAction<Column[]>) => {
      state.columns = action.payload;
      fulfilledAction(state);
    },
    [asyncActions.getColumns.rejected.type]: rejectedAction,
    [asyncActions.getCards.pending.type]: pendingAction,
    [asyncActions.getCards.fulfilled.type]: (state, action: PayloadAction<Card[]>) => {
      state.cards = action.payload;
      fulfilledAction(state);
    },
    [asyncActions.getCards.rejected.type]: rejectedAction,
    [asyncActions.addColumn.pending.type]: pendingAction,
    [asyncActions.addColumn.fulfilled.type]: (state, action: PayloadAction<Column>) => {
      state.columns.push(action.payload);
      fulfilledAction(state);
    },
    [asyncActions.addColumn.rejected.type]: rejectedAction,
    [asyncActions.addCard.pending.type]: pendingAction,
    [asyncActions.addCard.fulfilled.type]: (state, action: PayloadAction<Card>) => {
      state.cards.push(action.payload);
      fulfilledAction(state);
    },
    [asyncActions.addCard.rejected.type]: rejectedAction,
    [asyncActions.updateCard.pending.type]: pendingAction,
    [asyncActions.updateCard.fulfilled.type]: (state, action: PayloadAction<Card>) => {
      const index = state.cards.findIndex((card) => card.id === action.payload.id);
      state.cards[index] = action.payload;
      fulfilledAction(state);
    },
    [asyncActions.updateCard.rejected.type]: rejectedAction,
  },
});

export const demoBoardReducer = boardSlice.reducer;
export const demoBoardActions = boardSlice.actions;
export const demoBoardAsyncActions = asyncActions;
