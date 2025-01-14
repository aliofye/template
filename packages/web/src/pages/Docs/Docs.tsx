import bunLogo from '@/web/assets/bun.svg';
import dockerLogo from '@/web/assets/docker.svg';
import drizzleLogo from '@/web/assets/drizzle.svg';
import honoLogo from '@/web/assets/hono.svg';
import reactLogo from '@/web/assets/react.svg';
import viteLogo from '@/web/assets/vite.svg';
import ExampleNavbar from '@/web/components/ExampleNavbar';
import classNames from '@/web/lib/utils/classNames';

import Markdown from './Docs.mdx';
import classes from './Docs.module.css';

const Docs = () => {
  return (
    <div>
      <ExampleNavbar />
      <div className={classes.scrollContainer}>
        <div className={classes.logoContainer}>
          <a href="https://react.dev" target="_blank">
            <img
              src={reactLogo}
              className={classNames(classes.logo, classes.react)}
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
          <a href="https://orm.drizzle.team/docs/overview" target="_blank">
            <img
              src={drizzleLogo}
              className={classNames(classes.logo, classes.drizzle)}
              alt="Drizzle logo"
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
          <h1> = ❤️</h1>
          <p className={classes.readTheDocs}>
            Click on any of the logos to read their documentation.
            <br />
            <span className="gradient"> Scroll down for more information.</span>
          </p>
        </div>
        <div className={classes.docsContainer}>
          <Markdown />
        </div>
      </div>
    </div>
  );
};

export default Docs;
