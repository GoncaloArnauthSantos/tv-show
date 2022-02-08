import { IShow } from '../entities/IShow';
import { ISearchShowDTO, IShowDTO } from '../dtos/IShowDTO';
import ImageMapper from './ImageMapper';
import EpisodeMapper from './EpisodeMapper';
import { IImage } from '../entities/IImage';

const mapIShowDTOToIShow = (shows: IShowDTO): IShow => {
  const {
    id,
    name,
    genres,
    status,
    summary,
    image,
    _embedded,
  } = shows;

  return {
    id,
    name,
    genres,
    status,
    description: summary,
    image: image ? ImageMapper.mapIImageDTOToIImage(image) : {} as IImage,
    episodes: EpisodeMapper.mapIEpisodeListDTOToIEpisodeList(_embedded),
  };
};

const mapIShowListDTOToIShowList = (shows: IShowDTO[]): IShow[] => shows.map(mapIShowDTOToIShow);

const mapISearchShowListDTOToIShowList = (shows: ISearchShowDTO[]): IShow[] => (
  shows.map(({ show }) => mapIShowDTOToIShow(show))
);

export default {
  mapIShowDTOToIShow,
  mapIShowListDTOToIShowList,
  mapISearchShowListDTOToIShowList,
};
