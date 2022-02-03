import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'react';
import { AppDispatch, RootState } from './store';

export const useAppDispatch = (): Dispatch<AppDispatch> => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
