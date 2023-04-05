import { vitest } from "vitest";
import { mockData } from "./mock-data";

export const mockServiceSuccess = vitest.fn().mockResolvedValue(mockData);
export const mockServiceFailure = vitest.fn().mockRejectedValue({ message: "Bad Request" });
