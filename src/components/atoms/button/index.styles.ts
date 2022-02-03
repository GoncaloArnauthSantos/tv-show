import { createStyles, makeStyles } from '@material-ui/core/styles';

const defaultStyles = () => ({
  button: {
  },
}) as const;

const useStyles = makeStyles(() => createStyles(defaultStyles()));

export { useStyles };
