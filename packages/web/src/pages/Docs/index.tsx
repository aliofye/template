import classNames from '@web/lib/utils/classNames';

import classes from './Docs.module.css';

import reactLogo from '../../assets/react.svg';
import viteLogo from '../../assets/vite.svg';
import bunLogo from '../../assets/bun.svg';
import honoLogo from '../../assets/hono.svg';
import lefthookLogo from '../../assets/lefthook.svg';
import dockerLogo from '../../assets/docker.svg';

import ExampleNavbar from '../../components/ExampleNavbar';

const Docs = () => {
  return (
    <div>
      <ExampleNavbar />
      <div className="container">
        <section>
          <div className={classes.logoContainer}>
            <a href="https://evilmartians.com/opensource/lefthook" target="_blank">
              <img
                src={lefthookLogo}
                className={classNames(classes.logo, classes.lefthook)}
                alt="Lefthook logo"
              />
            </a>
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
            <a href="https://hono.dev" target="_blank">
              <img
                src={honoLogo}
                className={classNames(classes.logo, classes.hono)}
                alt="Hono logo"
              />
            </a>
            <a href="https://bun.sh" target="_blank">
              <img
                src={bunLogo}
                className={classNames(classes.logo, classes.bun)}
                alt="Bun logo"
              />
            </a>
            <a href="https://docs.docker.com/" target="_blank">
              <img
                src={dockerLogo}
                className={classNames(classes.logo, classes.docker)}
                alt="Docker logo"
              />
            </a>
          </div>
          <h1> = ❤️</h1>
          <p className={classes.readTheDocs}>
            Click on any of the logos to read their documentation
          </p>
        </section>
        <section></section>
      </div>
    </div>
  );
};

export default Docs;
