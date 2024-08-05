import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import About from './pages/About';
import TripDetail from './pages/TripDetail';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
        <NavigationBar />
        <Routes>
          <Route path="/homepage" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/trips/:id" element={<TripDetail />} />
        </Routes>
        <Footer />
    </>
  );
};

export default App;