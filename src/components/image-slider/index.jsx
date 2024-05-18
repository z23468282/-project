import React, { useEffect, useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import './styles.css';

const ImageSlider = ({ url, limit = 5, page = 1 }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);

      const res = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await res.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }

  function handlePrev() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  useEffect(() => {
    if (url !== '') fetchImages(url);
  }, [url]);

  if (loading) {
    return <div>加載中...</div>;
  }

  if (errorMsg !== null) {
    return <div>發生錯誤!! {errorMsg}</div>;
  }

  return (
    <div className="slider-container">
      <BsArrowLeftCircleFill
        onClick={handlePrev}
        className="arrow arrow-left"
      />
      {images &&
        images.length &&
        images.map((item, index) => (
          <img
            key={item.id}
            alt={item.download_url}
            src={item.download_url}
            className={
              currentSlide === index ? 'current-image' : 'current-image hide'
            }
          />
        ))}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
      />
      <span className="circle-indicators">
        {images &&
          images.length &&
          images.map((_, index) => (
            <button
              onClick={() => setCurrentSlide(index)}
              key={index}
              className={
                currentSlide === index
                  ? 'current-indicator active'
                  : 'current-indicator'
              }
            ></button>
          ))}
      </span>
    </div>
  );
};

export default ImageSlider;
