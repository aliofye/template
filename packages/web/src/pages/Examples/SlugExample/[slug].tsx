import { useParams } from 'react-router-dom';
import ExampleNavbar from '@/web/components/ExampleNavbar';

const SlugExample = () => {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div>
      <ExampleNavbar />
      <div className="content">
        <h1>Slug Example Page</h1>
        <p>
          This is an example page using slug:
          <span className="gradient"> {slug}</span>.
        </p>
        <p className="gradient fade-transition">
          Try to adjust the url from <code>/slug-example/slug</code> to{' '}
          <code>/slug-example/hello</code>
        </p>
      </div>
    </div>
  );
};

export default SlugExample;
