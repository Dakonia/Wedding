import React, { useState, useEffect } from 'react';
import '../styles/Timer.css';

const Timer = () => {
  const weddingDate = new Date('2024-07-08'); // Установите дату свадьбы

  const calculateTimeLeft = () => {
    const difference = +weddingDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [prevTimeLeft, setPrevTimeLeft] = useState(timeLeft);

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentTimeLeft = calculateTimeLeft();
      setTimeLeft(currentTimeLeft);

      // Сравниваем текущее и предыдущее состояние таймера
      if (currentTimeLeft.days !== prevTimeLeft.days ||
          currentTimeLeft.hours !== prevTimeLeft.hours ||
          currentTimeLeft.minutes !== prevTimeLeft.minutes ||
          currentTimeLeft.seconds !== prevTimeLeft.seconds) {
        setPrevTimeLeft(currentTimeLeft);
      }
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="timer">
      <div className="timer-item">
        <span className={timeLeft.days !== prevTimeLeft.days ? 'changing' : ''}>{timeLeft.days}</span>
        <p>Дней</p>
      </div>
      <div className="timer-item">
        <span className={timeLeft.hours !== prevTimeLeft.hours ? 'changing' : ''}>{timeLeft.hours}</span>
        <p>Часов</p>
      </div>
      <div className="timer-item">
        <span className={timeLeft.minutes !== prevTimeLeft.minutes ? 'changing' : ''}>{timeLeft.minutes}</span>
        <p>Минут</p>
      </div>
      <div className="timer-item">
        <span className={timeLeft.seconds !== prevTimeLeft.seconds ? 'changing' : ''}>{timeLeft.seconds}</span>
        <p>Секунд</p>
      </div>
    </div>
  );
};

export default Timer;
