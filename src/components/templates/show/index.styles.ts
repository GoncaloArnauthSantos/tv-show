import { createStyles, makeStyles } from '@material-ui/core/styles';

const defaultStyles = () => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
}) as const;

const useStyles = makeStyles(() => createStyles(defaultStyles()));

export { useStyles };
