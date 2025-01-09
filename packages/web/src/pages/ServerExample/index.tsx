import classes from './ServerExample.module.css';
import HelloWorld from '../../components/HelloWorld';
import Navbar from '../../components/Navbar';

const ServerExample = () => {
  return (
    <div>
      <Navbar />
      <div className={classes.container}>
        <h1>Server Example Page</h1>
        <p>This is an example page.</p>
        <HelloWorld />
      </div>
    </div>
  );
};

export default ServerExample;
