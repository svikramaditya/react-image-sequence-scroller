import React, { useState, useEffect } from 'react';

const ImageScroller = ({ images, interval = 100 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    // Cleanup the interval on unmount
    return () => clearInterval(intervalId);
  }, [images, interval]);

  return (
    <div style={{ overflow: 'hidden', width: '100%', height: '100%' }}>
      <img
        src={images[currentImageIndex]}
        alt="Scrolling"
        style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
      />
    </div>
  );
};

export default ImageScroller;
