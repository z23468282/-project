import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import './styles.css';

const ScrollIndicator = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [scrollPercentage, setScrollPercentage] = useState(0);

  async function fetchData() {
    try {
      setLoading(true);
      const res = await fetch(url);
      const data = await res.json();

      setData(data.products);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setErrorMsg(e.message);
    }
  }

  function handleScroll() {
    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((howMuchScrolled / height) * 100);
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, []);

  if (loading) {
    return <div>加載數據中，請稍後</div>;
  }

  if (errorMsg) {
    return <div>發生錯誤 ! {errorMsg}</div>;
  }

  return (
    <div>
      <div className="top-container">
        <h1>進度條</h1>
        <div className="progress-tracking-container">
          <div
            className="progress-bar"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>

      {/* <div className="data-container">
        {data.map((item) => (
          <p key={item.title}>{item.title}</p>
        ))}
      </div> */}
    </div>
  );
};

export default ScrollIndicator;
