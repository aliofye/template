import classes from './Example.module.css';
import ExampleComponent from '../../components/ExampleComponent';
import Navbar from '../../components/Navbar';

const Example = () => {
  return (
    <div className={classes.container}>
      <Navbar />
      <h1>Example Page</h1>
      <p>This is an example page.</p>
      <ExampleComponent />
    </div>
  );
};

export default Example;
