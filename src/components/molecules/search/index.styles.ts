import { createStyles, makeStyles } from '@material-ui/core/styles';

const defaultStyles = () => ({
  container: {
    display: 'flex',
    width: '100vw',
    height: '40px',
    justifyContent: 'center',
  },
  searchInput: {
    width: '30vw',
    fontSize: '21px',
    padding: '0 10px',
    border: '1px solid',
  },
  searchButton: {
    width: '5vw',
    minWidth: '50px',
    marginLeft: '10px',
    border: '1px solid',
    borderRadius: '12px',
  },
}) as const;

const useStyles = makeStyles(() => createStyles(defaultStyles()));

export { useStyles };
