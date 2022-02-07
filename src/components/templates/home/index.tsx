import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Search from '../../molecules/search';
import { useStyles } from './index.styles';
import ListContainer from '../../organisms/listContainer';
import showThunk from '../../../store/duck/show/showThunk';
import { useAppDispatch, useAppSelector } from '../../../store/state/hooks';
import { selectSearchedList } from '../../../store/duck/show/showSelector';
import Constants from '../../../utils/constants';

const { ROUTES: { SHOW_ROUTE = '' } } = Constants;

const Home = (): JSX.Element => {
  const classes = useStyles({});
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [input, setInput] = useState<string>('');
  const searchedList = useAppSelector(selectSearchedList);

  useEffect(() => {
    dispatch(showThunk.searchShowByName());
  }, []);

  const onSearchInputSearch = async () => {
    dispatch(showThunk.searchShowByName(input));
  };

  const onShowClick = (id: number) => {
    navigate(`${SHOW_ROUTE}${id}`);
  };

  return (
    <div className={classes.content}>
      <div className={`${classes.searchContainer} ${searchedList.length ? classes.searchContainerAnimation : ''}`}>
        <Search input={input} handleChange={setInput} handleSearch={onSearchInputSearch} />
      </div>
      {
          searchedList.length
            ? (
              <div className={classes.listContainer}>
                <ListContainer list={searchedList} handleItemClick={onShowClick} />
              </div>
            ) : null
        }
    </div>
  );
};

export default Home;
