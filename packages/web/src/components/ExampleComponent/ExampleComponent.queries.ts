import type { Message } from '@shared';
import { useQuery } from '../../hooks/useQuery';

export const useMessage = () => {
  const getMessage = async (): Promise<Message> => {
    const res = await fetch(`/api/message`);
    return res.json();
  };
  return useQuery<Message>('message', getMessage);
};
