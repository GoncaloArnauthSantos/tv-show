import { IShow } from '../../../api/entities/IShow';
import { useStyles } from './index.styles';
import ShowTile from '../../molecules/showTile';

interface IProps {
  list: IShow[],
  handleItemClick: (id: number) => void,
}

const ListContainer = ({ list = [] as IShow[], handleItemClick = () => {} } : IProps): JSX.Element => {
  const classes = useStyles({});

  return (
    <ul className={classes.container}>
      {list.map(({ id, ...show }): JSX.Element => (
        <ShowTile key={id} show={{ id, ...show }} handleClick={handleItemClick} />
      ))}
    </ul>
  );
};

export default ListContainer;
