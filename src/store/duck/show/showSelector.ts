import { RootState } from '../../state/store';
import { IShow } from '../../../api/entities/IShow';
import { IEpisode } from '../../../api/entities/IEpisode';

export const selectSelectedShow = ({ show: { selectedShow = {} as IShow } }: RootState): IShow => selectedShow;

export const selectEpisodeList = ({ show: { episodeList = [] as IEpisode[] } }: RootState): IEpisode[] => episodeList;

export const selectSearchedList = ({ show: { searchedList = [] as IShow[] } }: RootState): IShow[] => searchedList;
