import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver'; // Импорт библиотеки для скачивания файла
import '../styles/Info.css'; // Импортируем файл стилей

const Info = () => {
  const [guestInfo, setGuestInfo] = useState([]);

  useEffect(() => {
    // Функция для загрузки данных о гостях с сервера
    const fetchGuestInfo = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/guests/');
        setGuestInfo(response.data); // Устанавливаем полученные данные в состояние
      } catch (error) {
        console.error('Ошибка при загрузке данных о гостях:', error);
      }
    };

    // Вызываем функцию загрузки данных при монтировании компонента
    fetchGuestInfo();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Пустой массив зависимостей, чтобы вызвать useEffect только один раз при монтировании

  const handleDownloadTxt = () => {
    // Проверяем, есть ли данные о гостях
    if (guestInfo.length > 0) {
      // Формируем текстовую строку с данными о гостях
      const textData = guestInfo.map((guest, index) => (
        `
        Гость ${index + 1}
        Имя: ${guest.name}
        Статус: ${guest.status}
        Предпочтения по алкоголю: ${guest.alcohol}
        Предпочтения по еде: ${guest.food}
        `
      )).join('\n');

      // Создаем новый Blob с текстовой строкой
      const blob = new Blob([textData], { type: 'text/plain;charset=utf-8' });
      // Скачиваем файл с помощью библиотеки file-saver
      saveAs(blob, 'guest_info.txt');
    }
  };

  return (
    <div className="info-container">
      <button onClick={handleDownloadTxt}>Скачать в формате TXT</button>
      {guestInfo.map((guest, index) => (
        <div key={index} className="guest-info">
          <h3>Гость {index + 1}</h3>
          <p>Имя: {guest.name}</p>
          <p>Статус: {guest.status}</p>
          <p>Предпочтения по алкоголю: {guest.alcohol}</p>
          <p>Предпочтения по еде: {guest.food}</p>
        </div>
      ))}
    </div>
  );
};

export default Info;
