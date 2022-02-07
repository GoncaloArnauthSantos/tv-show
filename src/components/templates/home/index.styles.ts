import { createStyles, makeStyles } from '@material-ui/core/styles';

const defaultStyles = () => ({
  content: {
    display: 'flex',
    flexDirection: 'column',
  },
  searchContainer: {
    marginTop: '400px',
    transform: 'scale(1)',
    transition: 'margin-top 1000ms',
  },
  searchContainerAnimation: {
    marginTop: '100px',
    transform: 'scale(1)',
    transition: 'margin-top 1000ms',
  },
  listContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '100px',

    '& li': {
      listStyleType: 'none',
    },
  },
}) as const;

const useStyles = makeStyles(() => createStyles(defaultStyles()));

export { useStyles };
