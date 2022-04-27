import { combineReducers } from '@reduxjs/toolkit';
import { demoBoardReducer, demoBoardsReducer } from './reducers';

export const rootState = combineReducers({
  demoBoard: demoBoardReducer,
  demoBoards: demoBoardsReducer,
});

export type RootState = ReturnType<typeof rootState>;
