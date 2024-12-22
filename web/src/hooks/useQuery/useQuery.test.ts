import { vi, it, expect, describe, beforeEach } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import { useQuery } from './useQuery';

describe('useQuery', () => {
  const mockData = { test: 'data' };
  const mockFetch = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    mockFetch.mockResolvedValue(mockData);
  });

  it('should start in loading state', () => {
    const { result } = renderHook(() => useQuery('test-id', mockFetch));

    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBe(false);
    expect(result.current.data).toBeUndefined();
  });

  it('should handle successful data fetch', async () => {
    const { result } = renderHook(() => useQuery('test-id', mockFetch));

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBe(false);
      expect(result.current.data).toEqual(mockData);
    });
  });

  it('should handle error state', async () => {
    mockFetch.mockRejectedValueOnce(new Error('Failed to fetch'));
    const { result } = renderHook(() => useQuery('test-id', mockFetch));

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBe(true);
      expect(result.current.data).toBeUndefined();
    });
  });

  it('should use cached data', async () => {
    const { result, rerender } = renderHook(
      ({ id }) => useQuery(id, mockFetch),
      { initialProps: { id: 'test-id' } },
    );

    expect(mockFetch).toHaveBeenCalledTimes(1);

    rerender({ id: 'test-id' });
    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledTimes(1);
      expect(result.current.data).toEqual(mockData);
    });
  });

  it('should not fetch when disabled', () => {
    renderHook(() => useQuery('test-id', mockFetch, { enabled: false }));
    expect(mockFetch).not.toHaveBeenCalled();
  });
});
