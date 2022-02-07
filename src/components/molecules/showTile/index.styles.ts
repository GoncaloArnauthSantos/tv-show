import { createStyles, makeStyles } from '@material-ui/core/styles';

const defaultStyles = () => ({
  container: {
    display: 'flex',
    minWidth: '250px',
    border: '5px solid',
    margin: '0 10px',
    borderRadius: '30px',

    '&:hover': {
      border: '5px solid gray',
    },
    '&:active': {
      background: 'lightgray',
    },
  },
  tile: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    background: 'unset',
    border: 'none',
    padding: '10px',
    cursor: 'pointer',
  },
  image: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginTop: '20px',
  },
  name: {
    display: 'flex',
    marginLeft: '10px',
    fontSize: '21px',
    width: '100%',
  },
}) as const;

const useStyles = makeStyles(() => createStyles(defaultStyles()));

export { useStyles };
