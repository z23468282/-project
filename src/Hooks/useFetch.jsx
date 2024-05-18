import { useEffect, useState } from 'react';

export default function useFetch(url, option = {}) {
  //3種狀態
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData() {
    setPending(true);
    try {
      const res = await fetch(url, { ...option });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(res.statusText);
      }

      setData(data);
      setError(null);
      setPending(false);
    } catch (e) {
      setError(`發生錯誤! ${e}`);
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, error, pending };
}
