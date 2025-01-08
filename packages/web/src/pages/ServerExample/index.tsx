import classes from './ServerExample.module.css';
import Message from '../../components/HelloWorld';
import Navbar from '../../components/Navbar';

const Example = () => {
  return (
    <div>
      <Navbar />
      <div className={classes.container}>
        <h1>Server Example Page</h1>
        <p>This is an example page.</p>
        <Message />
      </div>
    </div>
  );
};

export default Example;
