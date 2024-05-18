import React, { useState } from 'react';
import MenuList from './menu-list';
import { FaMinus, FaPlus } from 'react-icons/fa';

const MenuItem = ({ item }) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  function handleToggleChildren(currentLabel) {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [currentLabel]: !displayCurrentChildren[currentLabel],
    });
  }

  return (
    <li className="menu-item">
      <div onClick={() => handleToggleChildren(item.label)}>
        <p>{item.label}</p>
        {item.children && (
          <span>
            {displayCurrentChildren[item.label] ? (
              <FaMinus color="black" size={25} />
            ) : (
              <FaPlus color="black" size={25} />
            )}
          </span>
        )}
      </div>

      {item.children && displayCurrentChildren[item.label] && (
        <MenuList list={item.children} />
      )}
    </li>
  );
};

export default MenuItem;
