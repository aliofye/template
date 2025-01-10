import { useParams } from 'react-router-dom';
import classes from './SlugExample.module.css';
import ExampleNavbar from '../../components/ExampleNavbar';

const SlugExample = () => {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div>
      <ExampleNavbar />
      <div className={classes.container}>
        <h1>Slug Example Page</h1>
        <p>
          This is an example page using slug:
          <span className="gradient"> {slug}</span>.
        </p>
        <p className="gradient fade-transition">
          Try to adjust the url from <code>/slugexample/slug</code> to{' '}
          <code>/slugexample/hello</code>
        </p>
      </div>
    </div>
  );
};

export default SlugExample;
