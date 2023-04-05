import { renderHook } from "@testing-library/react-hooks"

import { useFetch } from ".";
import { mockData, mockServiceFailure, mockServiceSuccess } from "./mocks";

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
