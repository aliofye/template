import type { Route } from './+types/route';
import Example from './components/Example';
import { getMessage } from './loaders';

export const clientLoader = async () => {
  const data = await getMessage();
  return data;
};

const ServerExample = ({ loaderData }: Route.ComponentProps) => {
  const { text } = loaderData;

  return (
    <div className="content">
      <h1>Server Example Page</h1>
      <p>This is an example page.</p>
      <Example message={text} />
    </div>
  );
};

export default ServerExample;
