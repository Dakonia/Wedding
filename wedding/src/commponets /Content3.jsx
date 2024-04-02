import React, { useState, useEffect } from 'react';
import '../styles/Content3.css';
import Photo1 from '../media/Foto2.jpg'; // Путь к вашей первой фотографии
import Photo2 from '../media/Foto4.JPG'; // Путь к вашей второй фотографии

const Content3 = () => {
  const [photos, setPhotos] = useState([Photo1, Photo2]); // Массив фотографий
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0); // Текущий индекс фотографии

  // Эффект для автоматического переключения фотографий
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex(prevIndex => (prevIndex + 1) % photos.length); // Переключаемся на следующую фотографию
    }, 5000); // Интервал переключения в миллисекундах (здесь каждые 5 секунд)

    return () => clearInterval(interval); // Очистка интервала при размонтировании компонента
  }, [photos.length]); // Зависимость эффекта - длина массива фотографий

  return (
    <div className="content3">
      <img src={photos[currentPhotoIndex]} alt="Rounded Photo" className="rounded-photo" />
    </div>
  );
};

export default Content3;
