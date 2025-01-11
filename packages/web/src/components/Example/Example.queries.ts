import { client } from '@/web/lib/api/client';

export const getMessage = async () => {
  const res = await client.example.$get();
  return res.json();
};
