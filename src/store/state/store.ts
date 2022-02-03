import { combineReducers, configureStore } from '@reduxjs/toolkit';
import generic from '../duck/generic/genericSlice';

const rootReducer = combineReducers({
  generic,
});

export const initializeStore = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof initializeStore.getState>;
export type AppDispatch = typeof initializeStore.dispatch;
