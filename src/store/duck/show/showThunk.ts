import { AppDispatch } from '../../state/store';
import { hideLoading, setError, showLoading } from '../generic/genericSlice';
import SearchService from '../../../api/services/SearchService';
import { setSearchedList } from './showSlice';
import { ErrorHandler } from '../../../api/ResponseHandler';

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

export default { searchShowByName };
