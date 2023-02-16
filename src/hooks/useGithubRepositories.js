import { useState, useEffect } from "react";
import env from "react-dotenv";

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
        console.log("sorted data", process.env.REACT_APP_GITHUB_KEY);

        console.log("sorted data", data);

        const filteredData = data
          .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
          .slice(0, 6);
        setRepositories(filteredData);
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
