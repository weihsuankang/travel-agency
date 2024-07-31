import logo from './logo.svg';
import './App.css';
import React from 'react';
import TripCard from './components/TripCard';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
        <div className="container mt-5">
          <div className="row">
            {trips.map((trip, index) => (
              <div key={index} className="col-md-4">
                <TripCard {...trip} />
              </div>
            ))}
          </div>
      </div>
    </div>
  );
}

export default App;
