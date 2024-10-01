import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './component/navbar';
import Footer from './component/footer';

const BasePage = () => {
  return (
    <div>
      <Navbar />
        <main>
          <Outlet /> 
        </main>
      <Footer />
    </div>
  );
};

export default BasePage;
