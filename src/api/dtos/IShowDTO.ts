import { IImageDTO } from './IImageDTO';
import { IEpisodeDTO } from './IEpisodeDTO';

export interface IShowDTO {
  id: number,
  name: string,
  genres: string[],
  status: string,
  summary: string,
  image: IImageDTO,
  _embedded?: IEmbeddedDTO,
}

export interface ISearchShowDTO {
  show: IShowDTO
}

export interface IEmbeddedDTO {
  episodes: IEpisodeDTO[];
}
