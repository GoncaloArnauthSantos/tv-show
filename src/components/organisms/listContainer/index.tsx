import { IShow } from '../../../api/entities/IShow';

interface IProps {
  list: IShow[],
}

const ListContainer = ({ list = [] as IShow[] } : IProps): JSX.Element => (
  <ul>
    {list.map(({ id, name }): JSX.Element => <li key={id}>{name}</li>)}
  </ul>

);

export default ListContainer;
