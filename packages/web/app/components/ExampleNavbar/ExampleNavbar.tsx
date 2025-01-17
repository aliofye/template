import { NavLink } from 'react-router';
import linkIcon from '@/web/assets/link.svg';
import classes from './ExampleNavbar.module.css';

const ExampleNavbar = () => {
  return (
    <nav className={classes.navLinks}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/examples/server">ServerExample</NavLink>
      <NavLink to="/examples/nested">NestedExample</NavLink>
      <NavLink to="/examples/slug">SlugExample</NavLink>
      <NavLink to="/non-existing-route">InvalidRoute</NavLink>
      <NavLink to="/architecture">Architecture</NavLink>
      {import.meta.env.DEV && (
        <a
          href={`${import.meta.env.PUBLIC_WEB_API_URL}/v1/docs`}
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
