import { useEffect, useState } from "react";
import { renderHook } from "@testing-library/react-hooks"

import { mockData, mockServiceFailure, mockServiceSuccess } from "./mocks";

function useFetch(service) {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await service();
        setData(response);
      } catch (err) {
        setIsError(true);
        setError(err.message || "Bad Request");
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return {
    isLoading,
    isError,
    error,
    data,
  };
}

describe("useFetch", () => {
  it("should return initial values", async () => {
    const { result } = executeHook(vitest.fn());

    expect(result.current.isLoading).toBeTruthy();
    expect(result.current.isError).toBeFalsy();
    expect(result.current.error).toBeNull();
    expect(result.current.data).toBeNull();
  });
  describe("Request", () => {
    it("should return correct values with success request", async () => {
      const { result, waitForNextUpdate } = executeHook(mockServiceSuccess);

      await waitForNextUpdate();

      expect(result.current.isLoading).toBeFalsy();
      expect(result.current.isError).toBeFalsy();
      expect(result.current.error).toBeNull();
      expect(result.current.data).toMatchObject(mockData);
    });
    it("should return correct values with failure request", async () => {
      const { result, waitForNextUpdate } = executeHook(mockServiceFailure);

      await waitForNextUpdate();

      expect(result.current.isLoading).toBeFalsy();
      expect(result.current.isError).toBeTruthy();
      expect(result.current.error).toBeTruthy();
      expect(result.current.data).toBeNull();
    });
  })
});

function executeHook(service) {
  return renderHook(() => useFetch(service));
}
