import { IShow } from '../../../api/entities/IShow';
import { useStyles } from './index.styles';
import { IEpisode } from '../../../api/entities/IEpisode';
import Tile from '../../molecules/tile';

interface IProps {
  list: IShow[] | IEpisode[],
  handleItemClick: (id: number) => void,
}

const ListContainer = ({ list = [] as IShow[] | IEpisode[], handleItemClick = () => {} } : IProps): JSX.Element => {
  const classes = useStyles({});

  return (
    <ul className={classes.container}>
      {list.map(({ id, ...tile }): JSX.Element => (
        <Tile key={id} tile={{ id, ...tile }} handleClick={handleItemClick} />
      ))}
    </ul>
  );
};

export default ListContainer;
