import { IShow } from '../entities/IShow';
import { ResponseHandler } from '../ResponseHandler';
import ShowMapper from '../mappers/ShowMapper';

export default class SearchService {
  static searchShowByName = async (name = ''): Promise<IShow[]> => {
    const res = await fetch(`https://api.tvmaze.com/search/shows?q=${name}`);
    return ShowMapper.mapISearchShowListDTOToIShowList(await ResponseHandler(res));
  }

  static searchShowById = async (id = ''): Promise<IShow> => {
    const res = await fetch(`https://api.tvmaze.com/shows/${id}?embed=episodes`);

    return ShowMapper.mapIShowDTOToIShow(await ResponseHandler(res));
  }
}
