import React, { useEffect, useState } from 'react';
import User from './user';
import './styles.css';

const GithubProfileFinder = () => {
  const [userName, setUserName] = useState('swag');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleSubmit() {
    if (userName !== '') {
      fetchGithubUserData();
    }
  }

  async function fetchGithubUserData() {
    setLoading(true);
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();
    if (data.id) {
      setUserData(data);
    } else {
      setUserData(null);
    }

    setLoading(false);
    setUserName('');
  }

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  if (loading) {
    return <h1>加載數據中...</h1>;
  }

  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          type="text"
          name="search-username"
          placeholder="搜尋 Github 使用者"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={handleSubmit}>搜尋</button>
      </div>
      {userData ? <User user={userData} /> : <div>查無此使用者</div>}
    </div>
  );
};

export default GithubProfileFinder;
