import { createStyles, makeStyles } from '@material-ui/core/styles';

const defaultStyles = () => ({
  container: {
    display: 'flex',
    width: '70vw',
    overflowX: 'scroll',
    margin: 'unset',
    padding: '20px 0',
  },
}) as const;

const useStyles = makeStyles(() => createStyles(defaultStyles()));

export { useStyles };
