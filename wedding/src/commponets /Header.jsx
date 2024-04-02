import React from 'react';
import text from '../media/text.gif'
import '../styles/Header.css'

const Header = () => {
  return (
    <div className="header">
      <img src={text} alt="Text" />
    </div>
  );
};

export default Header;
