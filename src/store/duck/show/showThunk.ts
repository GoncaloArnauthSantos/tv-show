import { AppDispatch } from '../../state/store';
import { hideLoading, setError, showLoading } from '../generic/genericSlice';
import SearchService from '../../../api/services/SearchService';
import { setEpisodeList, setSearchedList, setSelectedShow } from './showSlice';
import { ErrorHandler } from '../../../api/ResponseHandler';
import { IEpisode } from '../../../api/entities/IEpisode';

const searchShowByName = (name = '') => async (dispatch: AppDispatch) => {
  dispatch(showLoading());

  try {
    const shows = await SearchService.searchShowByName(name);
    dispatch(setSearchedList(shows));
  } catch (e) {
    const error = await ErrorHandler(e);
    dispatch(setError(error));
  } finally {
    dispatch(hideLoading());
  }
};
const searchShowById = (id = '') => async (dispatch: AppDispatch) => {
  dispatch(showLoading());

  try {
    const show = await SearchService.searchShowById(id);
    const { episodes = [] as IEpisode[], ...currentShow } = show;

    dispatch(setSelectedShow(currentShow));
    dispatch(setEpisodeList(episodes));
  } catch (e) {
    const error = await ErrorHandler(e);
    dispatch(setError(error));
  } finally {
    dispatch(hideLoading());
  }
};

export default { searchShowByName, searchShowById };
