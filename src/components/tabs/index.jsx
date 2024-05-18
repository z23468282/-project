import React, { useState } from 'react';
import './styles.css';

const tabs = [
  {
    label: 'Tab 1',
    content: <div>這是選項 1</div>,
  },
  {
    label: 'Tab 2',
    content: <div>這是選項 2</div>,
  },
  {
    label: 'Tab 3',
    content: <div>這是選項 3</div>,
  },
];

const Tabs = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="tabs-wrapper">
      <h1>選項卡功能</h1>
      <div className="heading">
        {tabs.map((item, index) => (
          <div
            className={`tab-item ${tabIndex === index ? 'active' : ''}`}
            onClick={() => setTabIndex(index)}
            key={item.label}
          >
            <span>{item.label}</span>
          </div>
        ))}
      </div>
      <div className="tabs-content">{tabs[tabIndex].content}</div>
    </div>
  );
};

export default Tabs;
