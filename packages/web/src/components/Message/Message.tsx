import classes from './Message.module.css';
import { useMessage } from './Message.queries';
import classNames from '../../helpers/classNames';

const Message = () => {
  const { data, loading, error } = useMessage();

  if (loading) return <></>;
  if (error) return <div>API Error</div>;

  return (
    <div className={classNames('gradient', classes.center)}>
      <h1>Message</h1>
      <code>API URL: {import.meta.env.PUBLIC_WEB_API_URL}</code>
      <p>Psst. the server wants to tell you: {data ? data.message : error}</p>
    </div>
  );
};

export default Message;
