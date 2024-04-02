import React from 'react';
import Foto1 from '../media/Foto1.png';
import '../styles/Content1.css';

const Content1 = () => {
  return (
    <div className="content">
      <div className="image-container">
        <img src={Foto1} alt="Image" className="rounded-image" />
        <div className="text-overlay">
          <div>
            <h2 className="overlay-text">Яна</h2>
            <h2 className="overlay-text second-line">и Алексей</h2>
          </div>
          <p className="date-text">08.07</p>
        </div>
      </div>
    </div>
  );
};

export default Content1;
