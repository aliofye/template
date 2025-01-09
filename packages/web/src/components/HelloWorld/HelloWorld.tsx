import classNames from '../../helpers/classNames';
import { useQuery } from '../../hooks/useQuery';

import classes from './HelloWorld.module.css';
import { getMessage } from './HelloWorld.queries';

import CodeBlock from '../CodeBlock';

const HelloWorld = () => {
  const getMessageQuery = useQuery('message', getMessage);

  if (getMessageQuery.loading) return <></>;
  if (getMessageQuery.error)
    return (
      <div className="fade-transition">
        <div className="gradient">
          Your database is empty. Run the following commands.
        </div>
        <br />
        <CodeBlock text={'bun run db:generate'} />
        <CodeBlock text={'docker compose exec dev bun run db:setup'} />
      </div>
    );

  const curlCommand = `curl ${import.meta.env.PUBLIC_WEB_API_URL}/helloworld`;
  return (
    <div
      className={classNames('gradient', 'fade-transition', classes.container)}
    >
      <CodeBlock text={curlCommand} />
      <p>
        {getMessageQuery.data
          ? getMessageQuery.data.text
          : getMessageQuery.error}
      </p>
    </div>
  );
};

export default HelloWorld;
