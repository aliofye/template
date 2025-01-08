import { client } from '../../../lib/client';

export const getMessage = async () => {
  const res = await client.helloworld.$get();
  return res.json();
};
