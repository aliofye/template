import reactLogo from '/react.svg';
import viteLogo from '/vite.svg';
import bunLogo from '/bun.svg';
import honoLogo from '/hono.svg';
import lefthookLogo from '/lefthook.svg';
import classes from './index.module.css';
import classNames from '../helpers/classNames';

import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className={classes.container}>
      <Navbar />
      <div className={classes.logoContainer}>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className={classNames(classes.logo)}
            alt="React logo"
          />
        </a>
        <a href="https://vite.dev" target="_blank">
          <img
            src={viteLogo}
            className={classNames(classes.logo, classes.vite)}
            alt="Vite logo"
          />
        </a>
        <a href="https://bun.sh" target="_blank">
          <img
            src={bunLogo}
            className={classNames(classes.logo, classes.bun)}
            alt="Bun logo"
          />
        </a>
        <a href="https://hono.dev" target="_blank">
          <img
            src={honoLogo}
            className={classNames(classes.logo, classes.hono)}
            alt="Hono logo"
          />
        </a>
        <a href="https://evilmartians.com/opensource/lefthook" target="_blank">
          <img
            src={lefthookLogo}
            className={classNames(classes.logo, classes.lefthook)}
            alt="Lefthook logo"
          />
        </a>
      </div>
      <h1> = ❤️</h1>
      <p>
        Edit <code>src/pages/index.tsx</code> and save to test HMR
      </p>
      <p className={classes.readTheDocs}>
        Click on any of the logos to read their documentation
      </p>
    </div>
  );
};

export default Home;
