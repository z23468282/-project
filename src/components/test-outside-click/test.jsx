import React, { useRef, useState } from 'react';
import useOutsideClick from '../../Hooks/useOutsideClick';

const UseOnclickOutsideTest = () => {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  useOutsideClick(ref, () => setShowContent(false));

  return (
    <div style={{ margin: '20px 300px' }}>
      {showContent ? (
        <div style={{ background: 'lightgreen' }} ref={ref}>
          <h1>這是一個隨機內容</h1>
          <p style={{ color: 'red', fontSize: '22px' }}>
            請按一下此框外部以關閉此框
          </p>
        </div>
      ) : (
        <button
          style={{
            fontSize: '20px',
            background: 'lightgreen',
            border: 'none',
            cursor: 'pointer',
          }}
          onClick={() => setShowContent(true)}
        >
          顯示內容
        </button>
      )}
    </div>
  );
};

export default UseOnclickOutsideTest;
