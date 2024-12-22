import reactLogo from '/react.svg';
import viteLogo from '/vite.svg';
import vitestLogo from '/vitest.svg';
import lefthookLogo from '/lefthook.svg';
import classes from './index.module.css';
import classNames from '../helpers/classNames';

const Home = () => {
  return (
    <div className={classes.container}>
      <div>
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
        <a href="https://vitest.dev" target="_blank">
          <img
            src={vitestLogo}
            className={classNames(classes.logo, classes.vitest)}
            alt="Vitest logo"
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
      <h1>React + Vite + Vitest + Lefthook</h1>
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
