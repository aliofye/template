import { useParams } from 'react-router-dom';
import classes from './SlugExample.module.css';
import Navbar from '../../components/Navbar';

const Example = () => {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div>
      <Navbar />
      <div className={classes.container}>
        <h1>Slug Example Page</h1>
        <p>This is an example page using slug: {slug}.</p>
      </div>
    </div>
  );
};

export default Example;
