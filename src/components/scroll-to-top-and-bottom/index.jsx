import React, { useRef } from 'react';
import useFetch from '../../Hooks/useFetch';

const ScrollToTopAndBottom = () => {
  const { data, error, pending } = useFetch(
    'https://dummyjson.com/products?limit=100'
  );

  const bottomRef = useRef();
  const topRef = useRef();

  function handleScrollToTop() {
    // window.scrollTo({
    //   top: 0,
    //   behavior: 'smooth',
    // });
    topRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  function handleScrollToBottom() {
    // window.scrollTo({
    //   top: 200000,
    //   behavior: 'smooth',
    // });
    bottomRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  if (pending) {
    return <h1>加載中，請稍後!</h1>;
  }

  if (error) {
    return <h1>發生錯誤! 請重試</h1>;
  }

  return (
    <div>
      <h1 ref={topRef}>滾動到頂部和底部功能</h1>
      <h3>這是頂部</h3>
      <button onClick={handleScrollToBottom}>滾動到底部</button>
      <ul style={{ listStyle: 'none' }}>
        {data &&
          data.products.map((item) => <li key={item.id}>{item.title}</li>)}
      </ul>
      <button ref={bottomRef} onClick={handleScrollToTop}>
        滾動到頂部
      </button>
      <h3>這是底部</h3>
    </div>
  );
};

export default ScrollToTopAndBottom;
