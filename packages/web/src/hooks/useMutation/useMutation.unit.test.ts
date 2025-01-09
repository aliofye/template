import { mock, it, expect, describe, beforeEach } from 'bun:test';
import { cleanup, renderHook, act, waitFor } from '@testing-library/react';
import { useMutation } from './useMutation';

describe('useMutation', () => {
  const mockData = { test: 'data' };
  const mockMutate = mock();

  beforeEach(() => {
    mockMutate.mockClear();
    mockMutate.mockResolvedValue(mockData);
    cleanup();
  });

  it('should start in non-loading state', () => {
    const { result } = renderHook(() => useMutation(mockMutate));

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(false);
    expect(result.current.data).toBeUndefined();
  });

  it('should handle successful mutation', async () => {
    const { result } = renderHook(() => useMutation(mockMutate));

    await act(async () => {
      await result.current.mutate({ id: 1 });
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(false);
    expect(result.current.data).toEqual(mockData);
    expect(mockMutate).toHaveBeenCalledWith({ id: 1 });
  });

  it('should handle error state', async () => {
    const error = new Error('Mutation failed');
    mockMutate.mockRejectedValueOnce(error);
    const { result } = renderHook(() => useMutation(mockMutate));

    await act(async () => {
      try {
        await result.current.mutate({ id: 1 });
      } catch (e) {
        console.assert(e === error);
      }
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toEqual(error);
    expect(result.current.data).toBeUndefined();
  });

  it('should call onSuccess callback', async () => {
    const onSuccess = mock();
    const { result } = renderHook(() => useMutation(mockMutate, { onSuccess }));

    await act(async () => {
      await result.current.mutate({ id: 1 });
    });

    expect(onSuccess).toHaveBeenCalledWith(mockData);
  });

  it('should call onError callback', async () => {
    const error = new Error('Mutation failed');
    mockMutate.mockRejectedValueOnce(error);
    const onError = mock();
    const { result } = renderHook(() => useMutation(mockMutate, { onError }));

    await act(async () => {
      try {
        await result.current.mutate({ id: 1 });
      } catch (e) {
        console.assert(e === error);
      }
    });

    expect(onError).toHaveBeenCalledWith(error);
  });

  it('should set loading state during mutation', async () => {
    const { result } = renderHook(() => useMutation(mockMutate));

    act(() => {
      result.current.mutate({ id: 1 });
    });

    expect(result.current.loading).toBe(true);

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });
  });
});
