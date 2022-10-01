import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import { CarComponent } from './features/car/carComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <CarComponent/>
      </header>
    </div>
  );
}

export default App;
