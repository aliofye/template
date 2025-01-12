import ExampleNavbar from '../../../components/ExampleNavbar';

const NestedExample = () => {
  return (
    <div>
      <ExampleNavbar />
      <div className="content">
        <h1>Nested Example Page</h1>
        <p className="gradient fade-transition">
          Look at the address bar. You can nest routes by putting a page inside of
          another page in <code>src/pages</code>
        </p>
      </div>
    </div>
  );
};

export default NestedExample;
