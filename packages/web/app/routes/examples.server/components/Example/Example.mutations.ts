import { client } from '@/web/lib/api/client';

export const createMessage = async (text: string) => {
  const res = await client.v1.example.$post({ json: { text } });
  return res.json();
};
