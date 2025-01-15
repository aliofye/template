import { client } from '@/web/lib/api/client';

export const getMessage = async () => {
  const res = await client.v1.example.$get();
  return res.json();
};
