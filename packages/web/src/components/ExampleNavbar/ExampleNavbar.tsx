import { Link } from 'react-router-dom';
import linkIcon from '../../assets/link.svg';
import classes from './ExampleNavbar.module.css';

const ExampleNavbar = () => {
  return (
    <nav className={classes.navLinks}>
      <Link to="/">Home</Link>
      <Link to="/examples/server-example">ServerExample</Link>
      <Link to="/examples/nested-example">NestedExample</Link>
      <Link to="/examples/slug-example/slug">SlugExample</Link>
      <Link to="/non-existing-slug">InvalidRoute</Link>
      <Link to="/docs">Architecture</Link>
      {import.meta.env.DEV && (
        <a
          href={`${import.meta.env.PUBLIC_WEB_API_URL}/docs`}
          target="_blank"
          rel="noreferrer"
        >
          Docs
          <img src={linkIcon} alt="Link Icon" className={classes.linkIcon} />
        </a>
      )}
    </nav>
  );
};

export default ExampleNavbar;
