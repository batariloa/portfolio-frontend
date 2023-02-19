import { useState, useEffect } from "react";

export const useGithubRepositories = (username) => {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://portfolio-express-proxy.herokuapp.com/api`,
          {
            headers: {},
          }
        );
        const data = await response.json();

        setRepositories(data);
      } catch (err) {
        console.log("error is", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username]);

  return { repositories, loading, error };
};
