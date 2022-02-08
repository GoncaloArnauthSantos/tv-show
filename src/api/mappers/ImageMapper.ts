import { IImageDTO } from '../dtos/IImageDTO';
import { IImage } from '../entities/IImage';

const defaultImage = (): IImage => ({ medium: '', original: '' });

const mapIImageDTOToIImage = (image: IImageDTO | null): IImage => {
  if (image) {
    const {
      medium = '',
      original = '',
    } = image;

    return {
      medium,
      original,
    };
  }

  return defaultImage();
};

export default {
  mapIImageDTOToIImage,
};
