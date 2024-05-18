import React from 'react';

const Suggestions = ({ data, handleClick }) => {
  return (
    <ul style={{ listStyle: 'none' }}>
      {data.map((item, index) => (
        <li onClick={handleClick} key={index}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default Suggestions;
