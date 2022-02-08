import { IEpisode } from '../entities/IEpisode';
import { IEpisodeDTO } from '../dtos/IEpisodeDTO';
import ImageMapper from './ImageMapper';
import { IEmbeddedDTO } from '../dtos/IShowDTO';

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

const mapIEpisodeListDTOToIEpisodeList = ({ episodes = [] as IEpisodeDTO[] } = {} as IEmbeddedDTO): IEpisode[] => (
  episodes.map(mapIEpisodeDTOToIEpisode));

export default {
  mapIEpisodeDTOToIEpisode,
  mapIEpisodeListDTOToIEpisodeList,
};
