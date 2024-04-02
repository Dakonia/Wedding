import React from 'react';
import Header from './Header';
import Content1 from './Content1';
import Content2 from './Content2';
import Timer from './Timer';
import Content3 from './Content3';
import Content4 from './Content4';
import Forms from './Forms';



const Main = () => {
  return (
    <div className="main">
      {/* <Header /> */}
      <Content1 />
      <Content2 />
      <Timer />
      <Content3 />
      <Content4 />
      <Forms />
    </div>
  );
};

export default Main;
