// Location.jsx
import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/Location.css';
import loc1 from '../media/1.jpeg';
import loc2 from '../media/2.jpg';
import loc3 from '../media/3.jpg';
import loc4 from '../media/4.jpeg';
import loc5 from '../media/5.jpeg';

const Location = () => {
  // Массив путей к изображениям
  const photos = [loc1, loc2, loc3, loc4, loc5];
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const handleSwipe = (event) => {
    const deltaX = event.deltaX;
    if (deltaX > 50) {
      // Свайп вправо
      setCurrentPhotoIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
    } else if (deltaX < -50) {
      // Свайп влево
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }
  };

  return (
    <div className="location" onWheel={handleSwipe}>
      <Carousel selectedItem={currentPhotoIndex} showArrows={false} showStatus={false} showThumbs={false}>
        {photos.map((photo, index) => (
          <div key={index}>
            <img src={photo} alt={`Photo ${index + 1}`} />
          </div>
        ))}
      </Carousel>
      <div className="dots">
        {photos.map((_, index) => (
          <span
            key={index}
            className={index === currentPhotoIndex ? 'dot active' : 'dot'}
            onClick={() => setCurrentPhotoIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Location;
