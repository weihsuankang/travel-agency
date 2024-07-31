import './App.css';
import React from 'react';
import TripCard from './components/TripCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import About from './pages/About';
import TripDetail from './pages/TripDetail';

const trips = [
  { title: 'Trip 1', description: 'Description of Trip 1', image: 'https://via.placeholder.com/150' },
  { title: 'Trip 2', description: 'Description of Trip 2', image: 'https://via.placeholder.com/150' },
  // 你可以添加更多行程
];

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/trips/:id" component={TripDetail} />
      </Routes>
    </>
  );
}

export default App;
