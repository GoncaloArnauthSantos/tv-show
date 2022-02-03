import { useStyles } from './index.styles';

interface IProps {
  className?: string,
  handleClick: () => void
}

const Button = ({
  className = '',
  handleClick = () => {},
} : IProps): JSX.Element => {
  const classes = useStyles({});

  return (
    <button
      type="button"
      className={`${classes.button} ${className}`}
      onClick={handleClick}
    >
      click
    </button>
  );
};

export default Button;
