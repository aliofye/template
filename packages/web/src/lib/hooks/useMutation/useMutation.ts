/**
 * This is a custom hook that sends a mutation to an API.
 */

import { useCallback, useState } from 'react';

export interface Mutation<TData, TRequest> {
  loading: boolean;
  error: boolean | Error;
  data: TData | undefined;
  mutate: (request: TRequest) => Promise<TData>;
}
interface Options<TData> {
  onSuccess?: (data: TData) => void;
  onError?: (error: Error) => void;
}

export const useMutation = <TData, TRequest>(
  mutationFn: (request: TRequest) => Promise<TData>,
  options: Options<TData> = {},
): Mutation<TData, TRequest> => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean | Error>(false);
  const [data, setData] = useState<TData>();

  const mutate = useCallback(
    async (request: TRequest) => {
      try {
        setLoading(true);
        setError(false);
        const result = await mutationFn(request);
        setData(result);
        options.onSuccess?.(result);
        return result;
      } catch (err) {
        const error = err as Error;
        setError(error);
        options.onError?.(error);
        throw error;
      } finally {
        setLoading(false);
      }
    },
    [mutationFn, options],
  );

  return { loading, error, data, mutate };
};
