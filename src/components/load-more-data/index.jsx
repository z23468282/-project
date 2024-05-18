import React, { useEffect, useState } from 'react';
import './styles.css';

const LoadMoreData = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);

      const res = await fetch(
        `https://dummyjson.com/products?limit=4&skip=${
          count === 0 ? 0 : count * 4
        }`
      );
      const data = await res.json();

      if (data) {
        setProducts((prevData) => [...prevData, ...data.products]);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products.length === 20) setDisableButton(true);
  }, [products]);

  if (loading) {
    return <div>加載數據中...</div>;
  }

  return (
    <div className="load-more-container">
      <div className="product-container">
        {products &&
          products.map((item) => {
            return (
              <div className="product" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            );
          })}
      </div>
      <div>
        <button disabled={disableButton} onClick={() => setCount(count + 1)}>
          {disableButton ? '你已達到20個商品' : '加載更多商品'}
        </button>
      </div>
    </div>
  );
};

export default LoadMoreData;
