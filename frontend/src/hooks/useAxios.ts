import axios from "axios";
import { useState, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

interface IConfigObject {
  method: string;
  url: string;
  requestConfig: {
    headers: {
      [key: string]: string;
    };
  };
}

const useAxios = (configObj: IConfigObject) => {
  const { method, url, requestConfig = {} } = configObj;

  const [response, setResponse] = useLocalStorage("response", []);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(0);

  const refetch = () => setReload((prev) => prev + 1);

  useEffect(() => {
    //let isMounted = true;
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        const res = await axios({
          method: method,
          url: url,
          ...requestConfig,
          signal: controller.signal,
        });
        setResponse(res.data.data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    // call the function
    fetchData();
    // useEffect cleanup function
    return () => controller.abort();

    // eslint-disable-next-line
  }, [reload]);

  return [response, error, loading, refetch];
};

export default useAxios;
