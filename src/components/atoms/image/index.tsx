import { useStyles } from './index.styles';
import { IImage } from '../../../api/entities/IImage';

interface IProps {
  image: IImage,
  height?: number | string,
  width?: number | string,
  alt?: string,
}

const Image = ({
  image = {} as IImage,
  height = 300,
  width = 215,
  alt = '',
} : IProps) => {
  const classes = useStyles({});

  return (
    <div className={classes.imageContainer}>
      <img src={image.medium} alt={alt} height={height} width={width} className={classes.image} />
    </div>
  );
};

export default Image;
