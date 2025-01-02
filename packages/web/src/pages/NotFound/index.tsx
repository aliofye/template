import classes from './NotFound.module.css';
import Navbar from '../../components/Navbar';

const NotFound = () => {
  return (
    <div>
      <Navbar />
      <div className={classes.container}>
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
      </div>
    </div>
  );
};

export default NotFound;
