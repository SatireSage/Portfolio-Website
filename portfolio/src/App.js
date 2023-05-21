import React, { useState, useEffect, useCallback } from 'react';
import Particles from 'react-tsparticles'
import { ThreeDots } from 'react-loader-spinner';
import { loadFull } from 'tsparticles'
import Typed from 'react-typed';
import Tilt from 'react-parallax-tilt';
import './App.css';

function App() {
  // eslint-disable-next-line
  const init = useCallback(async (engine) => {
    await loadFull(engine)
  })

  const [loading, setLoading] = useState(true);
  const [profilePic, setProfilePic] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    fetch('https://api.github.com/users/SatireSage')
    .then(response => response.json())
    .then(data => setProfilePic(data.avatar_url))
    .catch(error => console.log(error));
  }, []);

  return (
    <div className="App">
      <div className={loading ? 'loader visible' : 'loader hidden'}>
        <ThreeDots
          color="#b362ffff"
          height={100}
          width={100}
          timeout={2000}
        />
      </div>
      <div className={loading ? 'particles hidden' : 'particles visible'}>
      <Particles options={{
          "particles": {
            "number": {
              "value": 123,
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
      </div>
      <div className="App-header">
      {!loading && (
          <>
            {profilePic && (
              <Tilt className="Tilt" ttiltEnable={true} trackOnWindow={true} tiltAngleXPercentage={90} tiltAngleYPercentage={90}>
                <img src={profilePic} alt="Profile" className="profile-pic"/>
              </Tilt>
            )}
            <h1>Hi! My Name Is Sahaj Singh.</h1>
            <h2>
              <Typed
                strings={[
                  'I\'m majoring in Computing Engineering 🧑‍💻',
                  'I\'m a developer 💻',
                  'I\'m a writer 📝',
                  'I\'m a student at SFU 📚',
                  'I like mystery movies 🎥',
                  'I\'m a music lover 🎵',
                  'I\'m working on making a Pi-arcade 🕹️',
                  'I\'m a gamer 🎮',
                  'I\'m a traveler 🛫',
                  'I\'m a photographer 📷',
                  'I love cooking 🍳',
                  'I\'m a dreamer 💭',
                  'I\'m a learner 📖',
                ]}
                startDelay={2000}
                typeSpeed={40}
                backSpeed={50}
                showCursor={true}
                cursorChar='_'
                loop
              />
            </h2>
          </>
        )}
        <div className="button-container">
          <a href="https://www.linkedin.com/in/sahaj--singh/" target="_blank" rel="noopener noreferrer" className="centered-button">
            Connect With Me
          </a>
          <a href="https://docs.google.com/gview?url=https://raw.githubusercontent.com/SatireSage/Resume/main/Sahaj_Singh_Resume.pdf&embedded=true" target="_blank" rel="noopener noreferrer" className="centered-button">
            Look At My Resume
          </a>
          <a href="https://github.com/SatireSage" target="_blank" rel="noopener noreferrer" className="centered-button">
            Check Out My Work
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
