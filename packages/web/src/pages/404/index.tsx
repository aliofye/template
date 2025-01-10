import classes from './404.module.css';
import ExampleNavbar from '../../components/ExampleNavbar';

const NotFound = () => {
  return (
    <div>
      <ExampleNavbar />
      <div className={classes.container}>
        <h1 className="gradient">404</h1>
        <p>The page you are looking for does not exist.</p>
      </div>
    </div>
  );
};

export default NotFound;
