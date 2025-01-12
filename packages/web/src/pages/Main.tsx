import ExampleNavbar from '../components/ExampleNavbar';

const Main = () => {
  return (
    <div>
      <ExampleNavbar />
      <div className="content">
        <h1 className="gradient">Hello World</h1>
        <p>
          Edit <code>src/pages/Main.tsx</code> and save to test HMR
        </p>
      </div>
    </div>
  );
};

export default Main;
