import classes from './ExampleComponent.module.css';
import { useMessage } from './ExampleComponent.queries';
import classNames from '../../helpers/classNames';

const ExampleComponent = () => {
  const { data, loading, error } = useMessage();

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
