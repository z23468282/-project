import React from 'react';
import MenuList from './menu-list';
import menus from './data';
import './styles.css';

const TreeView = () => {
  return (
    <div className="tree-view">
      <MenuList list={menus} />
    </div>
  );
};

export default TreeView;
