import { useCallback, useState } from "react";

export type RequestConfig = {
  url: string;
  method?: string;
  headers?: HeadersInit;
  body?: BodyInit;
};

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const sendRequest = useCallback(async (config: RequestConfig, apply: any) => {
    setIsLoading(true);
    setError(false);
    try {
      const response = await fetch(config.url, {
        method: config.method ? config.method : "GET",
        headers: config.headers ? config.headers : undefined,
        body: config.body ? JSON.stringify(config.body) : undefined,
      });
      if (!response.ok) {
        throw new Error(response.status.toString());
      }
      const data = await response.json();
      apply(data);
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { isLoading, error, sendRequest };
};

export default useHttp;
