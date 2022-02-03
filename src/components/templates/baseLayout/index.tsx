import React from 'react';
import { useAppSelector } from '../../../store/state/hooks';
import { selectLoading } from '../../../store/duck/generic/genericSelector';
import Loader from '../../atoms/loader';

interface IProps {
  children: JSX.Element;
}

const BaseLayout = ({ children }: IProps): JSX.Element => {
  const loading = useAppSelector(selectLoading);

  return (
    <>
      {loading && <Loader /> }
      {children}
    </>

  );
};

export default BaseLayout;
