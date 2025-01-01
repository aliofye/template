import classes from './Example.module.css';
import Message from '../../components/Message';
import Navbar from '../../components/Navbar';

const Example = () => {
  return (
    <div className={classes.container}>
      <Navbar />
      <h1>Example Page</h1>
      <p>This is an example page.</p>
      <Message />
    </div>
  );
};

export default Example;
