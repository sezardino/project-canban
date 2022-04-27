import { Board } from '@/common';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppReducers } from '../../types';
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
  reducers: {
    setBoards: (state, action: PayloadAction<Board[]>) => {
      state.boards = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    deleteBoard: (state, action: PayloadAction<Board>) => {
      state.boards = state.boards.filter((board) => board.id !== action.payload.id);
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setInfo: (state, action: PayloadAction<string | null>) => {
      state.info = action.payload;
    },
  },
  extraReducers: {
    [asyncActions.getBoards.pending.type]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [asyncActions.getBoards.fulfilled.type]: (state, action: PayloadAction<Board[]>) => {
      state.boards = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [asyncActions.getBoards.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const demoBoardsReducer = boardsSlice.reducer;
export const demoBoardsAsyncActions = asyncActions;
export const demoBoardsActions = boardsSlice.actions;
