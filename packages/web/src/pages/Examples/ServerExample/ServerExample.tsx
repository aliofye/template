import ExampleNavbar from '../../../components/ExampleNavbar';
import Example from './components/Example';

const ServerExample = () => {
  return (
    <div>
      <ExampleNavbar />
      <div className="content">
        <h1>Server Example Page</h1>
        <p>This is an example page.</p>
        <Example />
      </div>
    </div>
  );
};

export default ServerExample;
