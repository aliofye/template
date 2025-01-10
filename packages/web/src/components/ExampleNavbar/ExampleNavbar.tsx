import { Link } from 'react-router-dom';
import classes from './ExampleNavbar.module.css';

const ExampleNavbar = () => {
  return (
    <nav className={classes.navLinks}>
      <Link to="/">Home</Link>
      <Link to="/server-example">ServerExample</Link>
      <Link to="/server-example/nested-example">NestedExample</Link>
      <Link to="/slug-example/slug">SlugExample</Link>
      <Link to="/non-existing-slug">InvalidRoute</Link>
      <Link to="/docs">Docs</Link>
    </nav>
  );
};

export default ExampleNavbar;
