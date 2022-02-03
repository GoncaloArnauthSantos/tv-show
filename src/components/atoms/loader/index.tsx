import { useStyles } from './index.styles';

const Loader = () => {
  const classes = useStyles({});

  return (
    <div className={classes.loader}>
      <div className={classes.loaderAnimation} />
    </div>
  );
};

export default Loader;
