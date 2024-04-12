import React, { useState, useEffect, useCallback, useRef } from 'react';
import Particles from 'react-tsparticles'
import { FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa';
import { ThreeDots } from 'react-loader-spinner';
import { loadFull } from 'tsparticles'
import Typed from 'react-typed';
import Tilt from 'react-parallax-tilt';
import { FiSun, FiMoon, FiCode } from 'react-icons/fi';
import './App.css';

function App() {
  // eslint-disable-next-line
  const init = useCallback(async (engine) => {
    await loadFull(engine)
  })

  const [mode, setMode] = useState(
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  );

  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  }

  const terminalMode = () => {
    window.open('https://terminal.sahajs.com');
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => setMode(mediaQuery.matches ? 'dark' : 'light');
  
    mediaQuery.addListener(handleChange);

    return () => mediaQuery.removeListener(handleChange);
  }, []);

  const [loading, setLoading] = useState(true);
  const [profilePic, setProfilePic] = useState(null);
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setFirstLoad(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    fetch('https://api.github.com/users/SatireSage')
    .then(response => response.json())
    .then(data => setProfilePic(data.avatar_url))
    .catch(error => console.log(error));
  }, []);
  
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = e => {
      const { clientX: x, clientY: y } = e;
      if (cursorRef.current) {
        cursorRef.current.style.left = `${x}px`;
        cursorRef.current.style.top = `${y}px`;
      }
    };

    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div className={`App ${mode}`}>
      <div className="cursor" ref={cursorRef}></div>
      <div className={`watermark ${mode === 'dark' ? 'light' : 'dark'}`}>
  ©     {new Date().getFullYear()} Sahaj Singh. All Rights Reserved.
      </div>
      <div className={loading ? 'loader visible' : 'loader hidden'}>
        <ThreeDots
          color={mode === 'dark' ? "#fffff0" : "#0c1117"}
          height={100}
          width={100}
        />
      </div>
      <div className={loading ? 'particles hidden' : 'particles visible'}>
      <Particles options={{
        "particles": {
          "number": {
            "value": 6,
            "density": {
              "enable": true,
              "value_area": 600
            }
          },
          "color": {
            "value": mode === 'dark' ? "#fffff0" : "#0c1117"
          },
          "shape": {
            "type": "polygon",
            "stroke": {
              "width": 0,
              "color": "#000"
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
            "value": 0.1,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 160,
            "random": false,
            "anim": {
              "enable": true,
              "speed": 10,
              "size_min": 40,
              "sync": false
            }
          },
          "line_linked": {
            "enable": false,
            "distance": 200,
            "color": "#ffffff",
            "opacity": 1,
            "width": 2
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
              "enable": false,
              "mode": "grab"
            },
            "onclick": {
              "enable": true,
              "mode": "repulse"
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
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 510,
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
        }
      } init={init}/>
      </div>
      <div className="App-header">
        {!loading && (
          <>
            {profilePic && (
              <Tilt className="Tilt" ttiltEnable={true} trackOnWindow={true} tiltAngleXPercentage={90} tiltAngleYPercentage={90}>
                <img src={profilePic} alt="Profile" className="profile-pic"/>
              </Tilt>
            )}
            <h1>
              <Typed
                strings={[
                  'Hi, my name is Sahaj Singh. 👋',
                ]}
                startDelay={2000}
                typeSpeed={40}
                showCursor={false}
                loop={false}
              />
            </h1>
            <h2>
              <Typed
                strings={[
                  'I\'m a Computer Engineer 🧑‍💻',
                  'I\'m a Software Developer 💻',
                  'I\'m a Writer 📝',
                  'I\'m a Student 📕 and a TA at SFU 🎓',
                  'I like mystery movies 🎥',
                  'I can\'t sing 🎤 but I\'m a music lover 🎧',
                  'I\'m a gamer 🎮',
                  'I\'ve traveled a lot 🛫',
                  'I\'m an avid photographer 📷',
                  'I love cooking 🍳',
                  'I\'m a dreamer 💭',
                  'I\'ve been coding since middle school 📖'
                ]}
                startDelay={firstLoad ? 6000 : 0}
                typeSpeed={40}
                backSpeed={40}
                backDelay={2000}
                showCursor={true}
                loop
              />
            </h2>
          </>
        )}
        <button onClick={toggleMode} className={`mode-switcher ${mode}`}>
          {mode === 'light' ? <FiMoon /> : <FiSun />}
        </button>
        <button onClick={terminalMode} className={`terminal-button ${mode}`}>
          <FiCode />
        </button>
        <div className="button-container">
          <a href="http://linkedin.sahajs.com/" target="_blank" rel="noopener noreferrer" className="centered-button">
            <FaLinkedin style={{ marginRight: '8px', verticalAlign: 'middle', fontSize: '24px' }} />
            <span>Get in link with me</span>
          </a>
          <a href={mode === 'dark' ? 'http://resume.dark.sahajs.com/' : 'http://resume.sahajs.com/'} target="_blank" rel="noopener noreferrer" className="centered-button">
            <FaFileAlt style={{ marginRight: '8px', verticalAlign: 'middle', fontSize: '24px' }} />
            <span>Look at my resume</span>
          </a>
          <a href="http://github.sahajs.com/" target="_blank" rel="noopener noreferrer" className="centered-button">
            <FaGithub style={{ marginRight: '8px', verticalAlign: 'middle', fontSize: '24px' }} />
            <span>Check out my work</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
