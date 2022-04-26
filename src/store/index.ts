/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { RootState, rootState } from './rootReducer';
import { demoBoardsActions, demoBoardsAsyncActions } from './reducers';

export const store = configureStore({
  reducer: rootState,
});

export const asyncActions = {
  ...demoBoardsAsyncActions,
};

export const appActions = {
  ...demoBoardsActions,
};

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;
