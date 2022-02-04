import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Search from '../../molecules/search';
import { useStyles } from './index.styles';
import ListContainer from '../../organisms/listContainer';
import showThunk from '../../../store/duck/show/showThunk';
import { useAppSelector } from '../../../store/state/hooks';
import { selectSearchedList } from '../../../store/duck/show/showSelector';

const Home = (): JSX.Element => {
  const classes = useStyles({});
  const dispatch = useDispatch();

  const [input, setInput] = useState<string>('');
  const searchedList = useAppSelector(selectSearchedList);

  useEffect(() => {
    dispatch(showThunk.searchShowByName());
  }, []);

  const onSearchInputSearch = async () => {
    dispatch(showThunk.searchShowByName(input));
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
                <ListContainer list={searchedList} />
              </div>
            ) : null
        }
    </div>
  );
};

export default Home;
