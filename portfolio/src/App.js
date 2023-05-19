// eslint-disable-next-line
import { useCallback, useEffect, useState } from 'react'
import React from 'react';
import './App.css';
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

function App() {
  // eslint-disable-next-line
  const init = useCallback(async (engine) => {
    await loadFull(engine)
  })
  const [isAnimationFinished, setIsAnimationFinished] = useState(false);
  
  const handleHireMeClick = () => {
    const win = window.open("", "_blank");
    win.document.write(`
      <style>
        body {
          text-align: center;
          padding: 0;
          margin: 0;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: #282c34;
        }
      </style>
      <button style="background-color: #b362ffff; border: none; color: white; padding: 15px 32px; text-align: center; text-decoration: none; font-size: 16px; cursor: pointer; border-radius: 4px; margin: 10px auto; transition: transform 0.3s; width: auto; font-weight: bold;" onClick="window.location.href='https://raw.githubusercontent.com/SatireSage/Resume/main/resume.pdf'">
        Download Resume
      </button>
      <iframe
        src="https://docs.google.com/gview?url=https://raw.githubusercontent.com/SatireSage/Resume/main/resume.pdf&embedded=true"
        style="width:100%; height:calc(100vh - 60px); border:none;"
        title="Resume"
      ></iframe>
    `);
  
    win.document.querySelector('button').addEventListener('mouseover', function() {
      this.style.transform = 'scale(1.1)';
      this.style.backgroundColor = '#2d2b55';
    });
  
    win.document.querySelector('button').addEventListener('mouseout', function() {
      this.style.transform = '';
      this.style.backgroundColor = '#b362ffff';
    });
  }
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimationFinished(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

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
          <a href="https://www.linkedin.com/in/sahaj--singh/" target="_blank" rel="noopener noreferrer" className="centered-button" onClick={e => !isAnimationFinished && e.preventDefault()}>
            Connect With Me
          </a>
          <button onClick={isAnimationFinished ? handleHireMeClick : undefined} className="centered-button">
            Hire Me!
          </button>
          <a href="https://github.com/SatireSage" target="_blank" rel="noopener noreferrer" className="centered-button" onClick={e => !isAnimationFinished && e.preventDefault()}>
            Check Out My Work
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;