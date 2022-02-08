import { IShow } from '../../../api/entities/IShow';
import { useStyles } from './index.styles';
import { IImage } from '../../../api/entities/IImage';
import Image from '../../atoms/image';
import { IEpisode } from '../../../api/entities/IEpisode';

interface IProps {
  tile: IShow | IEpisode,
  handleClick: (id: number) => void,
}

const Tile = ({ tile = {} as IShow | IEpisode, handleClick = () => {} }: IProps): JSX.Element => {
  const classes = useStyles({});

  const {
    id,
    image = {} as IImage,
    name = '',
  } = tile;

  return (
    <li className={classes.container}>
      <button type="button" className={classes.tile} onClick={() => handleClick(id)}>
        <div className={classes.image}>
          <Image image={image} key={id} />
        </div>
        <div className={classes.info}>
          <div className={classes.name}>{name}</div>
        </div>
      </button>
    </li>
  );
};

export default Tile;
