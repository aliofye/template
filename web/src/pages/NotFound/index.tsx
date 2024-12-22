import classes from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={classes.container}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFound;
