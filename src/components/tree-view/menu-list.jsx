import React from 'react';
import MenuItem from './menu-item';

const MenuList = ({ list }) => {
  return (
    <ul>
      {list.map((item) => (
        <MenuItem key={item.label} item={item} />
      ))}
    </ul>
  );
};

export default MenuList;
