// App.js

import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import SideColumnLeft from './components/SideColumnLeft';
import SideColumnRight from './components/SideColumnRight';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="content-wrapper">
        <SideColumnLeft />
        <MainContent />
        <SideColumnRight />
      </div>
      <Footer />
    </div>
  );
}

export default App;
