import { IImageDTO } from './IImageDTO';
import { IEpisodeDTO } from './IEpisodeDTO';

export interface IShowDTO {
  id: number,
  name: string,
  genres: string[],
  status: string,
  summary: string,
  image: IImageDTO,
  _embedded?: IEpisodeDTO[],
}

export interface ISearchShowDTO {
  show: IShowDTO
}
