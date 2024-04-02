import React from 'react';
import '../styles/Content4.css';

const Content4 = () => {
  return (
    <div className="content4">
      <h2 className="title4">Программа дня</h2>
      <div className="events">
        <div className="event">
          <div className="time">14:45</div>
          <div className="description">Сборы по адресу: наб. реки Фонтанки 51-53 "Трансфер"</div>
        </div>
        <div className="event">
          <div className="time">17:00</div>
          <div className="description">Прибытие в ресторан "Паруса Крестовский"</div>
        </div>
        <div className="event">
          <div className="time">17:30</div>
          <div className="description">Ужин</div>
        </div>
        <div className="event">
          <div className="time">21:00</div>
          <div className="description">Окончание программы</div>
        </div>
        <div className="event">
          <div className="time">23:00</div>
          <div className="description">Окончание Вечера</div>
        </div>
      </div>
    </div>
  );
};

export default Content4;
