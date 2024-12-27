import type { Message } from '@shared';
import classes from './ExampleComponent.module.css';
import classNames from '../../helpers/classNames';
import { useQuery } from '../../hooks/useQuery';

const ExampleComponent = () => {
  const getMessage = async (): Promise<Message> => {
    const res = await fetch(`/api/message`);
    return res.json();
  };
  const { data, error, loading } = useQuery<Message>('message', getMessage);

  if (loading) return <></>;
  if (error) return <div>API Error</div>;

  return (
    <div className={classNames(classes.gradient, classes.center)}>
      <h1>Example Component</h1>
      <p>Psst. the server wants to tell you: {data ? data.message : error}</p>
    </div>
  );
};

export default ExampleComponent;
