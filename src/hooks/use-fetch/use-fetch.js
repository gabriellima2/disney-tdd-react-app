import { useEffect, useState } from "react";

export function useFetch(service) {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const execute = async () => {
    try {
      const response = await service();
      setData(response);
    } catch (err) {
      setIsError(true);
      setError(err.message || "Bad Request");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    execute()
  }, []);

  return {
    isLoading,
    isError,
    error,
    data,
  };
}
