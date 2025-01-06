import { client } from '../../../lib/client';

export const createMessage = async (text: string) => {
  const res = await client.message.$post({
    form: {
      text,
    },
  });
  return res.json();
};
