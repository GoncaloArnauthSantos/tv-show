import { createStyles, makeStyles } from '@material-ui/core/styles';

const defaultStyles = () => ({
  imageContainer: {},
  image: {
    borderRadius: '25px',
  },
}) as const;

const useStyles = makeStyles(() => createStyles(defaultStyles()));

export { useStyles };
