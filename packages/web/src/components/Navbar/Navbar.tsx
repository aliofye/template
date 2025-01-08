import { Link } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav>
      <div className={classes.navLinks}>
        <Link to="/">Home</Link>
        <Link to="/serverexample">ServerExample</Link>
        <Link to="/serverexample/nestedexample">NestedExample</Link>
        <Link to="/slugexample/slug">SlugExample</Link>
        <Link to="/non-existing-slug">InvalidRoute</Link>
        <Link to="/docs">Docs</Link>
      </div>
    </nav>
  );
};

export default Navbar;
