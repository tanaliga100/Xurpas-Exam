import React, { useEffect, useState } from "react";

const UseFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setIsLoading(true);
        setApiData(data.results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  return { isLoading, error, apiData };
};

export default UseFetch;
