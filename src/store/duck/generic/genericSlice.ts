import { createSlice } from '@reduxjs/toolkit';

export interface IGenericState {
  isLoading: boolean;
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
  },
});

export const { showLoading, hideLoading } = genericSlice.actions;

export default genericSlice.reducer;
