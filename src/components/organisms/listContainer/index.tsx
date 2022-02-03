interface IProps {
  list: string[],
}

const ListContainer = ({ list = [] } : IProps): JSX.Element => (
  <ul>
    {list.map((item = ''): JSX.Element => <div>cenas</div>)}
  </ul>

);

export default ListContainer;
