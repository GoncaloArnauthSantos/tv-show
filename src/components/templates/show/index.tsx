import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../store/state/hooks';
import { selectEpisodeList, selectSelectedShow } from '../../../store/duck/show/showSelector';
import showThunk from '../../../store/duck/show/showThunk';
import { useStyles } from './index.styles';
import Button from '../../atoms/button';
import ListContainer from '../../organisms/listContainer';
import Constants from '../../../utils/constants';

const { ROUTES: { EPISODE_ROUTE } } = Constants;

const Show = (): JSX.Element => {
  const classes = useStyles({});
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useAppDispatch();

  const currentShow = useAppSelector(selectSelectedShow);
  const currentEpisodeList = useAppSelector(selectEpisodeList);

  const { id: showId = '' } = params;

  useEffect(() => {
    if (showId) {
      dispatch(showThunk.searchShowById(showId));
    }
  }, [showId]);

  const {
    name = '',
  } = currentShow;

  const onEpisodeClick = (id: number) => {
    navigate(`${EPISODE_ROUTE}${id}`);
  };

  const onBackClick = () => {
    if (name) {
      navigate(`/?show=${name}`);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <Button className={classes.backButton} handleClick={onBackClick} />
      </div>
      <div className={classes.showInfoContainer}>
        {currentShow?.name}
      </div>
      {
        currentEpisodeList.length ? (
          <div className={classes.episodesContainer}>
            <ListContainer list={currentEpisodeList} handleItemClick={onEpisodeClick} />
          </div>
        ) : null
      }
    </div>
  );
};

export default Show;
