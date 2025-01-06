import { client } from '../../../lib/client';

export const getMessage = async () => {
  const res = await client.message.$get();
  return res.json();
};
