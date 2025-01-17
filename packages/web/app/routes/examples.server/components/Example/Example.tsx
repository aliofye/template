import ExampleCodeBlock from '@/web/components/ExampleCodeBlock';

interface ExampleProps {
  message: string;
}

const Example: React.FC<ExampleProps> = ({ message }) => {
  if (!message)
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
      <p>{message}</p>
    </div>
  );
};

export default Example;
