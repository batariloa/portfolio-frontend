import { useState, useEffect } from "react";

export const useGithubRepositories = (username) => {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [offline, setOffline] = useState(false);
  const [cached, setCached] = useState(false);

  //get online status on reload
  useEffect(() => {
    if (!navigator.onLine) setOffline(true);
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      //Check for offline mode
      if (offline) {
        //if it is offline get items from cache
        const cachedRepos = JSON.parse(localStorage.getItem("Repos"));
        if (cachedRepos) {
          setRepositories(cachedRepos);
          setCached(true);
          setError(null);
        }
        //don't call API
        return;
      }

      try {
        const signal = controller.signal;

        const response = await fetch(
          `https://portfolio-express-proxy.herokuapp.com/api`,
          {
            headers: {},
            signal,
          }
        );
        const data = await response.json();

        setRepositories(data);
        localStorage.setItem("Repos", JSON.stringify(data));
      } catch (err) {
        console.log("error name  is", err.name);

        if (err.name !== "AbortError") {
          console.log("error is", err);
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    return () => {
      controller.abort();
    };
  }, [offline]);

  return { repositories, loading, error, cached };
};
