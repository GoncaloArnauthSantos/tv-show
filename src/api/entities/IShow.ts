import { IEpisode } from './IEpisode';
import { IImage } from './IImage';

export interface IShow {
  id: number,
  name?: string,
  genres?: string[],
  status?: string,
  description?: string,
  image?: IImage,
  episodes?: IEpisode[],
}
