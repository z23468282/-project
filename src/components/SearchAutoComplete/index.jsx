import React, { useEffect, useState } from 'react';
import Suggestions from './suggestions';

const SearchAutoComplete = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);

  function handleChange(e) {
    const query = e.target.value.toLowerCase();
    setSearchInput(e.target.value);
    if (query.length > 1) {
      const filteredData = users.filter(
        (item) => item.toLowerCase().indexOf(query) > -1
      );

      setFilteredUsers(filteredData);
    } else {
      setFilteredUsers([]);
    }
  }

  function handleClick(e) {
    setSearchInput(e.target.innerText);
    setFilteredUsers([]);
  }

  async function fetchListOfUsers() {
    try {
      setLoading(true);
      const res = await fetch('https://dummyjson.com/users');
      const data = await res.json();
      if (data.users) {
        setUsers(data.users.map((item) => item.firstName));
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  return (
    <div className="search-autocomplete-container">
      <input
        value={searchInput}
        onChange={handleChange}
        type="text"
        name="search-users"
        placeholder="請輸入用戶"
      />
      {loading && <h1>加載中，請稍後!</h1>}
      {
        <Suggestions
          handleClick={handleClick}
          data={filteredUsers.length > 0 ? filteredUsers : users}
        />
      }
    </div>
  );
};

export default SearchAutoComplete;
