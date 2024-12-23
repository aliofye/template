import classes from './ExampleComponent.module.css';
import classNames from '../../helpers/classNames';
import { useQuery } from '../../hooks/useQuery';
interface Message {
  message: string;
}

const ExampleComponent = () => {
  const getMessage = async () => {
    const res = await fetch(`${import.meta.env.PUBLIC_WEB_API_URL}/message`);
    return res.json();
  };
  const { data, error, loading } = useQuery<Message>('message', getMessage);

  if (loading) return <></>;
  if (error) return <div>API Error</div>;

  return (
    <div className={classNames(classes.red, classes.italic)}>
      <h1>Example Component</h1>
      <p>Psst. the server wants to tell you: {data ? data.message : error}</p>
    </div>
  );
};

export default ExampleComponent;
