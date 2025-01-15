import ExampleCodeBlock from '@/web/components/ExampleCodeBlock';
import { useQuery } from '@/web/lib/hooks/useQuery';

import { getMessage } from './Example.queries';

const Example = () => {
  const getMessageQuery = useQuery('message', getMessage);

  if (getMessageQuery.loading) return <></>;
  if (getMessageQuery.error)
    return (
      <div className="fade-transition">
        <div className="gradient">
          Your database is empty. Run the following commands.
        </div>
        <br />
        <ExampleCodeBlock text={'docker compose exec dev bun run db:migrate'} />
        <ExampleCodeBlock text={'docker compose exec dev bun run db:seed'} />
      </div>
    );

  const curlCommand = `curl ${import.meta.env.PUBLIC_WEB_API_URL}/example`;
  return (
    <div className="gradient fade-transition">
      <ExampleCodeBlock text={curlCommand} />
      <p>{getMessageQuery.data ? getMessageQuery.data.text : getMessageQuery.error}</p>
    </div>
  );
};

export default Example;
