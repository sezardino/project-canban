import { Board } from '@/common';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppReducers } from '../../types';
import { fulfilledAction, pendingAction, rejectedAction } from '../helpers';
import * as asyncActions from './actionCreators';

interface DemoBoardsState {
  boards: Board[];
  isLoading: boolean;
  error: string | null;
  info: string | null;
}

const initialState: DemoBoardsState = {
  boards: [],
  isLoading: false,
  error: null,
  info: null,
};

const boardsSlice = createSlice({
  name: AppReducers.DEMO_BOARDS,
  initialState,
  reducers: {},
  extraReducers: {
    [asyncActions.getBoards.pending.type]: pendingAction,
    [asyncActions.getBoards.fulfilled.type]: (state, action: PayloadAction<Board[]>) => {
      state.boards = action.payload;
      fulfilledAction(state);
    },
    [asyncActions.getBoards.rejected.type]: rejectedAction,
    [asyncActions.addBoard.pending.type]: pendingAction,
    [asyncActions.addBoard.fulfilled.type]: (state, action: PayloadAction<Board>) => {
      state.boards.push(action.payload);
      state.info = `Board ${action.payload.label} added successfully`;
      state.isLoading = false;
    },
    [asyncActions.addBoard.rejected.type]: rejectedAction,
    [asyncActions.deleteBoard.pending.type]: (state) => {
      state.error = null;
    },
    [asyncActions.deleteBoard.fulfilled.type]: (state, action: PayloadAction<Board>) => {
      state.boards = state.boards.filter((board) => board.id !== action.payload.id);
      state.info = `Board ${action.payload.label} deleted successfully`;
    },
    [asyncActions.deleteBoard.rejected.type]: rejectedAction,
  },
});

export const demoBoardsReducer = boardsSlice.reducer;
export const demoBoardsAsyncActions = asyncActions;
export const demoBoardsActions = boardsSlice.actions;
