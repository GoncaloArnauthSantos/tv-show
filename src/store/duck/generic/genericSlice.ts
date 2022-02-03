import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IError } from '../../../api/entities/IError';

export interface IGenericState {
  isLoading: boolean;
  error?: IError;
}

const initialState: IGenericState = {
  isLoading: false,
};

const genericSlice = createSlice({
  name: 'generic',
  initialState,
  reducers: {
    showLoading: (state) => ({
      ...state,
      isLoading: true,
    }),
    hideLoading: (state) => ({
      ...state,
      isLoading: false,
    }),
    setError: (state, { payload }: PayloadAction<IError>) => ({
      ...state,
      error: payload,
    }),
    cleanError: (state) => ({
      ...state,
      error: undefined,
    }),
  },
});

export const {
  showLoading,
  hideLoading,
  setError,
  cleanError,
} = genericSlice.actions;

export default genericSlice.reducer;
