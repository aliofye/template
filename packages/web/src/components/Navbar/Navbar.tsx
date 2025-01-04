import { Link } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav>
      <div className={classes.navLinks}>
        <Link to="/">Home</Link>
        <Link to="/example">ServerExample</Link>
        <Link to="/example/nestedexample">NestedExample</Link>
        <Link to="/examples/slug">SlugExample</Link>
        <Link to="/non-existing-slug">InvalidRoute</Link>
        <Link to="/docs">Docs</Link>
      </div>
    </nav>
  );
};

export default Navbar;
