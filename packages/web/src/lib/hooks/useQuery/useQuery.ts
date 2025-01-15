/**
 * @fileoverview A custom hook for fetching data with caching and loading state management.
 *
 * @version 1.0.0
 * @date 2025-01-15
 * @author Ali Morshid
 *
 * @template T - The type of the data to be fetched.
 * @param {string | string[]} key - A unique key or array of keys to identify the query.
 * @param {() => Promise<T>} fetcher - A function that returns a promise resolving to the data.
 * @param {Options} [options] - Optional settings for the query.
 * @param {boolean} [options.enabled=true] - Whether the query should be enabled.
 * @param {number} [options.cacheTime=0] - The duration (in milliseconds) to cache the data. Use `Infinity` for indefinite caching.
 * @returns {Query<T>} An object containing the loading state, error state, and fetched data.
 */

import { useEffect, useMemo, useRef, useState } from 'react';

export interface Query<T> {
  loading: boolean;
  error: boolean;
  data: T | undefined;
}
interface Options {
  enabled?: boolean;
  cacheTime?: number;
}

const defaultOptions: Options = { enabled: true, cacheTime: 0 };

const cache = new Map<string, unknown>();

export const useQuery = <T>(
  key: string | string[],
  fetcher: () => Promise<T>,
  options?: Options,
): Query<T> => {
  const ref = useRef<() => Promise<T>>();

  const [status, setStatus] = useState<'stale' | 'loading' | 'error' | 'done'>('stale');
  const [data, setData] = useState<T>();

  const id = useMemo(() => (typeof key === 'string' ? key : key.join('/')), [key]);
  const { enabled, cacheTime } = { ...defaultOptions, ...options };

  ref.current = fetcher;

  useEffect(() => {
    if (enabled) {
      if (cacheTime === Infinity && cache.has(id)) {
        setData(cache.get(id) as T);
      } else {
        setStatus('loading');
        ref
          .current?.()
          .then((data) => (setData(data), setStatus('done'), cache.set(id, data)))
          .catch(() => setStatus('error'));
      }
    }
  }, [id, enabled, cacheTime]);

  return { loading: status === 'loading', error: status === 'error', data };
};
