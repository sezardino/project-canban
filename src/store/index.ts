/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { demoReducer, demoActions } from './reducers';

const rootReducer = combineReducers({
  demoReducer,
});

export const storeActions = {
  demoActions,
};

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
export * from './hooks';
