import { IImageDTO } from './IImageDTO';

export interface IEpisodeDTO {
  id: number,
  name: string,
  summary: string,
  image: IImageDTO
}
