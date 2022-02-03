import { IEpisode } from '../entities/IEpisode';
import { IEpisodeDTO } from '../dtos/IEpisodeDTO';
import ImageMapper from './ImageMapper';

const mapIEpisodeDTOToIEpisode = (episode: IEpisodeDTO): IEpisode => {
  const {
    id,
    name,
    summary,
    image,
  } = episode;

  return {
    id,
    name,
    description: summary,
    image: ImageMapper.mapIImageDTOToIImage(image),
  };
};

const mapIEpisodeListDTOToIEpisodeList = (shows = [] as IEpisodeDTO[]): IEpisode[] => (
  shows.map(mapIEpisodeDTOToIEpisode)
);

export default {
  mapIEpisodeDTOToIEpisode,
  mapIEpisodeListDTOToIEpisodeList,
};
