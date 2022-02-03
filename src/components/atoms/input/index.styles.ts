import { createStyles, makeStyles } from '@material-ui/core/styles';

const defaultStyles = () => ({
  input: {
  },
}) as const;

const useStyles = makeStyles(() => createStyles(defaultStyles()));

export { useStyles };
