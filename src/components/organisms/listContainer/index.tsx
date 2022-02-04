import { IShow } from '../../../api/entities/IShow';
import { useStyles } from './index.styles';

interface IProps {
  list: IShow[],
}

const ListContainer = ({ list = [] as IShow[] } : IProps): JSX.Element => {
  const classes = useStyles({});

  return (
    <ul className={classes.container}>
      {list.map(({ id, name }): JSX.Element => <li key={id}>{name}</li>)}
    </ul>
  );
};

export default ListContainer;
