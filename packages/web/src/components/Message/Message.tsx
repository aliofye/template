import { useState } from 'react';
import classNames from '../../helpers/classNames';
import { useQuery } from '../../hooks/useQuery';
import { useMutation } from '../../hooks/useMutation';

import classes from './Message.module.css';
import { getMessage } from './Message.queries';
import { createMessage } from './Message.mutations';

const Message = () => {
  const [text, setText] = useState('');

  const getMessageQuery = useQuery('message', getMessage);
  const createMessageMutation = useMutation(createMessage);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createMessageMutation.mutate(text);
  };

  if (getMessageQuery.loading) return <></>;
  if (getMessageQuery.error) return <div>API Error</div>;

  return (
    <div>
      <div className={classNames('gradient', classes.center)}>
        <h1>Message</h1>
        <code>API URL: {import.meta.env.PUBLIC_WEB_API_URL}</code>
        <p>
          Psst. the server wants to tell you:{' '}
          {getMessageQuery.data
            ? getMessageQuery.data.text
            : getMessageQuery.error}
        </p>
      </div>
      <div className={classes.center}>
        <p>Want to reply?</p>
        <form className={classes.inputContainer} onSubmit={onSubmit}>
          <input type="text" onChange={(e) => setText(e.target.value)} />
          <button className={classes.button} type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Message;
