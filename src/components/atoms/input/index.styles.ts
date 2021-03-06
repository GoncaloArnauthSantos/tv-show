import { createStyles, makeStyles } from '@material-ui/core/styles';

const defaultStyles = () => ({
  input: {
    fontFamily: 'sans-serif',
    outline: 'unset',
  },
}) as const;

const useStyles = makeStyles(() => createStyles(defaultStyles()));

export { useStyles };
