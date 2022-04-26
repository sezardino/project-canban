import { combineReducers } from '@reduxjs/toolkit';
import { demoBoardReducer, demoBoardsReducer } from './reducers';

export const rootState = combineReducers({
  demoBoards: demoBoardsReducer,
});

export type RootState = ReturnType<typeof rootState>;
