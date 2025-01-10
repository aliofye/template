import { client } from '../../../lib/client';

export const getMessage = async () => {
  const res = await client.example.$get();
  return res.json();
};
