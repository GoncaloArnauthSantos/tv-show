import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../store/state/hooks';
import { selectSelectedShow } from '../../../store/duck/show/showSelector';
import showThunk from '../../../store/duck/show/showThunk';
import { useStyles } from './index.styles';

const Show = (): JSX.Element => {
  const classes = useStyles({});
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useAppDispatch();

  const currentShow = useAppSelector(selectSelectedShow);

  const { id: showId = '' } = params;

  useEffect(() => {
    if (showId) {
      dispatch(showThunk.searchShowById(showId));
    }
  }, [showId]);

  return (
    <div className={classes.container}>
      Name
      {currentShow?.name}
    </div>
  );
};

export default Show;
