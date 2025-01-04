import classes from './index.module.css';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className={classes.container}>
        <h1 className="gradient">Hello World</h1>
        <p>
          Edit <code>src/pages/index.tsx</code> and save to test HMR
        </p>
      </div>
    </div>
  );
};

export default Home;
