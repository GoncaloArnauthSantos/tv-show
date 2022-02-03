import { useEffect } from 'react';
import Input from '../../atoms/input';
import { useStyles } from './index.styles';
import Button from '../../atoms/button';
import useDebounce from '../../../utils/hooks/useDebounce';

interface IProps {
  input: string,
  handleChange: (value: string) => void,
  handleSearch: () => void
}

const Search = ({
  input = '',
  handleChange = () => {},
  handleSearch = () => {},
} : IProps): JSX.Element => {
  const classes = useStyles({});
  const debouncedValue = useDebounce({ value: input });

  useEffect(() => {
    if (debouncedValue) {
      handleSearch();
    }
  }, [debouncedValue]);

  const handleEnterKey = (key = '') => {
    if (key === 'Enter') {
      handleSearch();
    }
  };

  const handleInputChange = (value = '') => {
    handleChange(value);
  };

  return (
    <div className={classes.container}>
      <Input
        className={classes.searchInput}
        value={input}
        handleChange={({ target: { value = '' } = {} }) => handleInputChange(value)}
        handleKeyDown={({ key = '' }) => handleEnterKey(key)}
      />
      <Button className={classes.searchButton} handleClick={handleSearch} />
    </div>
  );
};

export default Search;
