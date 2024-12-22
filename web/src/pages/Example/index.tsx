import classes from './Example.module.css';
import ExampleComponent from '../../components/ExampleComponent';

const Example = () => {
  return (
    <div className={classes.container}>
      <h1>Example Page</h1>
      <p>This is an example page.</p>
      <ExampleComponent />
    </div>
  );
};

export default Example;
