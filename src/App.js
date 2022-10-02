import React from 'react';
import './App.css';
import { CarComponent } from './features/car/carComponent';
import { PopupComponent } from './features/popup/poupComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <PopupComponent/>
      <CarComponent/>
      </header>
    </div>
  );
}

export default App;
