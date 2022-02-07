import { createStyles, makeStyles } from '@material-ui/core/styles';

const defaultStyles = () => ({
  button: {
    fontFamily: 'sans-serif',
    fontSize: '18px',
    cursor: 'pointer',
    border: '1px solid',

    '&:active': {
      fontWeight: 'bold',
      border: '2px solid',
    },
  },
}) as const;

const useStyles = makeStyles(() => createStyles(defaultStyles()));

export { useStyles };
