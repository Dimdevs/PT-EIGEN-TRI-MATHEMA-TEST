import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BasePage from '../base';
import HomePage from '../pages/home-pages';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BasePage />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
