import React from 'react';
import './App.css';

function App() {
  const handleClick = (buttonNumber) => {
    console.log(`Button ${buttonNumber} clicked`);
  };

  return (
    <div className="App">
      <div className="App-header">
        <h1 className="typing-animation">Welcome! I'm Sahaj Singh.</h1>
        <div className="button-container">
          <button onClick={() => handleClick(1)} className="centered-button">
            Contact Me
          </button>
          <button onClick={() => handleClick(2)} className="centered-button">
            My Resume
          </button>
          <button onClick={() => handleClick(3)} className="centered-button">
            My Work
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
