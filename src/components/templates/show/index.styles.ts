import { createStyles, makeStyles } from '@material-ui/core/styles';

const defaultStyles = () => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  header: {},
  backButton: {},
  showInfoContainer: {},
  episodesContainer: {},
}) as const;

const useStyles = makeStyles(() => createStyles(defaultStyles()));

export { useStyles };
