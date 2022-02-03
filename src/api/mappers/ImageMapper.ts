import { IImageDTO } from '../dtos/IImageDTO';
import { IImage } from '../entities/IImage';

const mapIImageDTOToIImage = (image: IImageDTO): IImage => {
  const {
    medium = '',
    original = '',
  } = image;

  return {
    medium,
    original,
  };
};

export default {
  mapIImageDTOToIImage,
};
