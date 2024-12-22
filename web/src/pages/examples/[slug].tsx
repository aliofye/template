import { useParams } from 'react-router-dom';
import classes from './Examples.module.css';
import Navbar from '../../components/Navbar';

const Example = () => {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className={classes.container}>
      <Navbar />
      <h1>Example Page</h1>
      <p>This is an example page using slug: {slug}.</p>
    </div>
  );
};

export default Example;
