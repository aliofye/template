import classes from './ServerExample.module.css';
import Example from '../../components/Example';
import ExampleNavbar from '../../components/ExampleNavbar';

const ServerExample = () => {
  return (
    <div>
      <ExampleNavbar />
      <div className={classes.container}>
        <h1>Server Example Page</h1>
        <p>This is an example page.</p>
        <Example />
      </div>
    </div>
  );
};

export default ServerExample;
