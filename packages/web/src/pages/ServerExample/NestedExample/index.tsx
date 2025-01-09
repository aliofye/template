import classes from './NestedExample.module.css';
import Navbar from '../../../components/Navbar';

const NestedExample = () => {
  return (
    <div>
      <Navbar />
      <div className={classes.container}>
        <h1>Nested Example Page</h1>
        <p className="gradient fade-transition">
          Look at the address bar. You can nest routes by putting a page inside
          of another page in <code>src/pages</code>
        </p>
      </div>
    </div>
  );
};

export default NestedExample;
