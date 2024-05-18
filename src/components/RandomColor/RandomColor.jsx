import React, { useEffect, useState } from 'react';

const RandomColor = () => {
  const [typeOfColor, serTypeOfColor] = useState('hex');
  const [color, setColor] = useState('#000000');

  function randomColorUtil(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexColor = '#';

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtil(hex.length)];
    }

    setColor(hexColor);
  }

  function handleCreateRandomRgbColor() {
    const r = randomColorUtil(256);
    const g = randomColorUtil(256);
    const b = randomColorUtil(256);

    setColor(`rgb(${r},${g},${b})`);
  }

  useEffect(() => {
    if (typeOfColor === 'rgb') handleCreateRandomRgbColor();
    else handleCreateRandomHexColor();
  }, [typeOfColor]);

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        background: color,
      }}
    >
      <button onClick={() => serTypeOfColor('hex')}>創建十六進制顏色</button>
      <button onClick={() => serTypeOfColor('rgb')}>創建RGB顏色</button>
      <button
        onClick={
          typeOfColor === 'hex'
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
      >
        生成隨機顏色
      </button>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          fontSize: '60px',
          marginTop: '50px',
          gap: '50px',
        }}
      >
        <h3>{typeOfColor === 'rgb' ? 'RGB 顏色' : '十六進制 顏色'}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
};

export default RandomColor;
