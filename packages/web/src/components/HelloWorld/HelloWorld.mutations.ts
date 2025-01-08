import { client } from '../../../lib/client';

export const createMessage = async (text: string) => {
  const res = await client.helloworld.$post({
    form: {
      text,
    },
  });
  return res.json();
};
