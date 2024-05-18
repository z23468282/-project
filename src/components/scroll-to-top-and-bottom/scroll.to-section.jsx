import React, { useRef } from 'react';

const ScrollToSection = () => {
  const itemRef = useRef();

  const data = [
    {
      label: '第一張卡',
      style: {
        width: '100%',
        height: '600px',
        background: 'red',
      },
    },
    {
      label: '第二張卡',
      style: {
        width: '100%',
        height: '600px',
        background: 'grey',
      },
    },
    {
      label: '第三張卡',
      style: {
        width: '100%',
        height: '600px',
        background: 'blue',
      },
    },
    {
      label: '第四張卡',
      style: {
        width: '100%',
        height: '600px',
        background: 'green',
      },
    },
    {
      label: '第五張卡',
      style: {
        width: '100%',
        height: '600px',
        background: 'orange',
      },
    },
  ];

  function handleScrollToSection() {
    let pos = itemRef.current.getBoundingClientRect().top;

    console.log(itemRef.current.getBoundingClientRect());
    window.scrollTo({
      top: pos,
      behavior: 'smooth',
    });
  }

  return (
    <div style={{ marginTop: '40px' }}>
      <h1>滾動到指定區域(第四張卡)</h1>
      <button onClick={handleScrollToSection}>單擊滾動</button>
      {data.map((item) => {
        return (
          <div
            ref={item.label === '第四張卡' ? itemRef : null}
            key={item.label}
            style={item.style}
          >
            <h3>{item.label}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default ScrollToSection;
