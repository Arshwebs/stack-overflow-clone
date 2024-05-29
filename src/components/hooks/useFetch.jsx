import { useEffect, useState } from "react";

const useFetch = ({ url }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    const Signal = new AbortController();
    async function fetching() {
      try {
        setIsLoading(true);
        const request = await fetch(url, { signal: Signal.signal });
        const response = await request.json();
        setData(response);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetching();

    return () => {
      Signal.abort();
    };
  }, [url]);

  return [isLoading, data];
};

export default useFetch;
