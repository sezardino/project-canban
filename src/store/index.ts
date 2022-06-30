/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { RootState, rootState } from './rootReducer';
import { demoBoardAsyncActions, demoBoardsActions, demoBoardsAsyncActions, demoBoardActions } from './reducers';

export const store = configureStore({
  reducer: rootState,
});

export const asyncActions = {
  ...demoBoardsAsyncActions,
  ...demoBoardAsyncActions,
};

export const appActions = {
  ...demoBoardsActions,
  ...demoBoardActions,
};

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;
