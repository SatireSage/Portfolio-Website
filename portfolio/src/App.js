// eslint-disable-next-line
import { useCallback, useState } from 'react'
import React from 'react';
import { Document, Page } from 'react-pdf';
import './App.css';
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

function App() {
  // eslint-disable-next-line
  const init = useCallback(async (engine) => {
    await loadFull(engine)
  })
  
  const [loading, setLoading] = React.useState(true);

  function onDocumentLoadSuccess() {
    setLoading(false);
  }

  return (
    <div className="App">
      <Particles options={{
        "particles": {
          "number": {
            "value": 100,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#b362ffff"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 6
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 4,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#FFFFFF",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 3,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "bubble"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 10,
              "duration": 3,
              "opacity": 1,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      }} init={init}/>
      <div className="App-header">
        <h1 className="typing-animation">Welcome! I'm Sahaj Singh.</h1>
        <div className="button-container">
          <a href="https://www.linkedin.com/in/sahaj--singh/" className="centered-button">
            Connect With Me
          </a>
          <button onClick={() => window.location.href = process.env.PUBLIC_URL + "/resume.pdf"} className="centered-button">
            Hire Me!
          </button>
          <a href="https://github.com/SatireSage" rel="noopener noreferrer" className="centered-button">
            Check Out My Work
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
