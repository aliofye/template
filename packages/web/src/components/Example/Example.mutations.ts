import { client } from '../../lib/api/client';

export const createMessage = async (text: string) => {
  const res = await client.example.$post({
    form: {
      text,
    },
  });
  return res.json();
};