import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import About from './pages/About';
import TripDetail from './pages/TripDetail';

const App = () => {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/trips/:id" element={<TripDetail />} />
      </Routes>
    </>
  );
};

export default App;