import { combineReducers, configureStore } from '@reduxjs/toolkit';
import generic from '../duck/generic/genericSlice';
import show from '../duck/show/showSlice';

const rootReducer = combineReducers({
  generic,
  show,
});

export const initializeStore = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof initializeStore.getState>;
export type AppDispatch = typeof initializeStore.dispatch;
