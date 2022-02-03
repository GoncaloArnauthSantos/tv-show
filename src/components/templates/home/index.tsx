import React, { useEffect, useState } from 'react';
import Search from '../../molecules/search';
import { useStyles } from './index.styles';
import ListContainer from '../../organisms/listContainer';

const Home = (): JSX.Element => {
  const classes = useStyles({});
  const [input, setInput] = useState<string>('');

  useEffect(() => {
    // TODO service for more recent or something like that
  }, []);

  const onSearchInputSearch = () => {
    // TODO call service with input
    console.log(input);
  };

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.searchContainer}>
          <Search input={input} handleChange={setInput} handleSearch={onSearchInputSearch} />
        </div>
        <div className={classes.listContainer}>
          <ListContainer list={['cenas', 'cenas2']} />
        </div>
      </div>
    </div>
  );
};

export default Home;
