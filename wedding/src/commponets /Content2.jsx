import React from 'react';
import '../styles/Content2.css';

const Content2 = () => {
  return (
    <div className="content2">
      <div className="title-container">
        <h2 className="title">Дорогие <br/> друзья <br/> и родные</h2>
      </div>
      <div className="message-container">
        <p className="message">
          Летом состоится очень важное <br/> 
          и радостное для нас событие - наша свадьба.<br/> <br/>
          Этот день невозможно представить без <br/>
          самых близких для нас людей, мы бы очень<br/>
          хотели, чтобы вы провели его вместе с нами.
        </p>
      </div>
      <div className="date-container">
        <h2 className="date">08.07.2024</h2>
      </div>
    </div>
  );
};

export default Content2;
