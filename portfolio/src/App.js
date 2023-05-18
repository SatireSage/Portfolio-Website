import React from 'react';
import './App.css';

function App() {

  return (
    <div className="App">
      <div className="App-header">
        <h1 className="typing-animation">Welcome! I'm Sahaj Singh.</h1>
        <div className="button-container">
          <a href="mailto:sahaj_singh@sfu.ca" className="centered-button">
            Contact Me
          </a>
          <a href="%PUBLIC_URL%/resume.pdf" target="_blank" rel="noopener noreferrer" className="centered-button">
            My Resume
          </a>
          <a href={process.env.PUBLIC_URL + "/resume.pdf"} target="_blank" rel="noopener noreferrer" className="centered-button">
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
