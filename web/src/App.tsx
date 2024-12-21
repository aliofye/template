import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import classes from './App.module.css';
import classNames from './helpers/classNames';

import ExampleComponent from './components/ExampleComponent';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={classes.appContainer}>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className={classes.logo} alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className={classNames(classes.logo, classes.react)}
            alt="React logo"
          />
        </a>
      </div>
      <h1>Vite + React</h1>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
      <p className={classes.readTheDocs}>
        Click on the Vite and React logos to learn more
      </p>
      <ExampleComponent />
    </div>
  );
};

export default App;
