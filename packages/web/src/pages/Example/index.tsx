import classes from './Example.module.css';
import Message from '../../components/Message';
import Navbar from '../../components/Navbar';

const Example = () => {
  return (
    <div>
      <Navbar />
      <div className={classes.container}>
        <h1>Example Page</h1>
        <p>This is an example page.</p>
        <Message />
      </div>
    </div>
  );
};

export default Example;
