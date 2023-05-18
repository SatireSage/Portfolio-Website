import React from 'react';
import { Document, Page } from 'react-pdf';
import './App.css';

function App() {
  const [loading, setLoading] = React.useState(true);

  function onDocumentLoadSuccess() {
    setLoading(false);
  }

  return (
    <div className="App">
      <div className="App-header">
        <h1 className="typing-animation">Welcome! I'm Sahaj Singh.</h1>
        <div className="button-container">
          <a href="mailto:sahaj_singh@sfu.ca" className="centered-button">
            Contact Me
          </a>
          <button onClick={() => window.open(process.env.PUBLIC_URL + "/resume.pdf")} target="_blank" className="centered-button">
            My Resume
          </button>
          <a href="https://github.com/SatireSage" rel="noopener noreferrer" className="centered-button">
            My Work
          </a>
        </div>
        {!loading && (
          <React.Fragment>
            <Document
              file={process.env.PUBLIC_URL + "/resume.pdf"}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={() => setLoading(false)}
              loading=""
            >
              <Page pageNumber={1} />
            </Document>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

export default App;
