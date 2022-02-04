import { createStyles, makeStyles } from '@material-ui/core/styles';

const defaultStyles = () => ({
  container: {
    border: '1px solid',
    width: '60vw',
    height: '600px',
    overflowY: 'scroll',
    margin: 'unset',
    padding: '20px 30px',
  },
}) as const;

const useStyles = makeStyles(() => createStyles(defaultStyles()));

export { useStyles };
