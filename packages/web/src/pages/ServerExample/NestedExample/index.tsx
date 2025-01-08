import classes from './NestedExample.module.css';
import Navbar from '../../../components/Navbar';

const NestedExample = () => {
  return (
    <div>
      <Navbar />
      <div className={classes.container}>
        <h1>Nested Example Page</h1>
        <p>This is an example page.</p>
      </div>
    </div>
  );
};

export default NestedExample;
