import { createStyles, makeStyles } from '@material-ui/core/styles';

const defaultStyles = () => ({
  loader: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    opacity: 0.8,
    display: 'flex',
    alignItems: 'center',
    zIndex: 100,
  },
  '@keyframes rotation': {
    to: {
      '-webkit-transform': 'rotate(360deg)',
    },
  },
  loaderAnimation: {
    position: 'relative',
    margin: 'auto auto',
    width: '50px',
    height: '50px',
    border: '10px solid black',
    borderRadius: '50%',
    borderTopColor: 'gray',
    animation: '$rotation 1s ease-in-out infinite',
  },
} as const);

const useStyles = makeStyles(() => createStyles(defaultStyles()));

export { useStyles };
