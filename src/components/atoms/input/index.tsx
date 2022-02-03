import { ChangeEvent, KeyboardEvent } from 'react';
import { useStyles } from './index.styles';

interface IProps {
  className?: string,
  value: string,
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void,
  handleKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void,
}

const Input = ({
  value = '',
  handleChange = () => {},
  handleKeyDown = () => {},
  className = '',
} : IProps) => {
  const classes = useStyles({});

  return (
    <input
      type="text"
      className={`${classes.input} ${className}`}
      value={value}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      onFocus={({ target }) => target.select()}
    />
  );
};

export default Input;
