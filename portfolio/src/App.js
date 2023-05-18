import React from 'react';
import './App.css';

function App() {
  const handleClick = (buttonNumber) => {
    console.log(`Button ${buttonNumber} clicked`);
  };

  return (
    <div className="App">
      <div className="App-header">
        <div className="button-container">
          <button onClick={() => handleClick(1)} className="centered-button">
            Button 1
          </button>
          <button onClick={() => handleClick(2)} className="centered-button">
            Button 2
          </button>
          <button onClick={() => handleClick(3)} className="centered-button">
            Button 3
          </button>
          <button onClick={() => handleClick(4)} className="centered-button">
            Button 4
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;