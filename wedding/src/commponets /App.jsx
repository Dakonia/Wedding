// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Main';
import Info from './Info';

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/info" element={<Info />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
