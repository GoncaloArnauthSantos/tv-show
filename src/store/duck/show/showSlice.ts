import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IShow } from '../../../api/entities/IShow';
import { IEpisode } from '../../../api/entities/IEpisode';

export interface IShowState {
  selectedShow: IShow;
  episodeList: IEpisode[];
  searchedList: IShow[];
}

const initialState: IShowState = {
  selectedShow: {} as IShow,
  episodeList: [] as IEpisode[],
  searchedList: [] as IShow[],
};

const showSlice = createSlice({
  name: 'show',
  initialState,
  reducers: {
    setSelectedShow: (state, { payload }: PayloadAction<IShow>) => ({
      ...state,
      selectedShow: payload,
    }),
    setEpisodeList: (state, { payload }: PayloadAction<IEpisode[]>) => ({
      ...state,
      episodeList: payload,
    }),
    setSearchedList: (state, { payload }: PayloadAction<IShow[]>) => ({
      ...state,
      searchedList: payload,
    }),
  },
});

export const { setSelectedShow, setEpisodeList, setSearchedList } = showSlice.actions;

export default showSlice.reducer;
