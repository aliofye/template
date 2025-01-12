/**
 * A hook to handle mutation requests.
 *
 * @template TRequest - The type of the request object.
 * @template TData - The type of the data returned by the mutation function.
 *
 * @param {TRequest} request - The request object to be passed to the mutation function.
 * @returns {Promise<TData>} - A promise that resolves to the result of the mutation function.
 *
 * @throws {Error} - Throws an error if the mutation function fails.
 *
 * @example
 * ```typescript
 * const { mutate } = useMutation(async (request) => {
 *   // perform mutation
 *   return result;
 * });
 *
 * try {
 *   const result = await mutate(request);
 *   console.log('Mutation successful:', result);
 * } catch (error) {
 *   console.error('Mutation failed:', error);
 * }
 * ```
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
