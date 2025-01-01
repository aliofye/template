import type { AppType } from '@api';
import { hc } from 'hono/client';
import { useQuery } from '../../hooks/useQuery';

const client = hc<AppType>(import.meta.env.PUBLIC_WEB_API_URL);

export const useMessage = () => {
  const getMessage = async () => {
    const res = await client.message.$get();
    return res.json();
  };
  return useQuery('message', getMessage);
};
