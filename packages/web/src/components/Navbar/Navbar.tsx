import { Link } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav>
      <div className={classes.navLinks}>
        <Link to="/">Home</Link>
        <Link to="/example">Example</Link>
        <Link to="/examples/slug">Slug Example</Link>
        <Link to="/non-existing-slug">Invalid Route</Link>
        <Link to="/docs">Docs</Link>
      </div>
    </nav>
  );
};

export default Navbar;
