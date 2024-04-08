import React from 'react';
import { isMobile } from 'react-device-detect';
import Content1 from './Content1';
import Content2 from './Content2';
import Timer from './Timer';
import Content3 from './Content3';
import Content4 from './Content4';
import Forms from './Forms';
import Location from './location';
import Content5 from './Content5';
import MainPage from './MainPage';
import Before from './Before';

const Main = () => {
  return (
    <div className="main">
      {isMobile ? (
        <>
          <Content1 />
          <Content2 />
          <Before />
          <Timer />
          <Content3 />
          <Content4 />
          <Location />
          <Content5 />
          <Forms />
        </>
      ) : (
        <MainPage />
      )}
    </div>
  );
};

export default Main;
