'use client';
import { useCallback, useEffect, useState } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const ParticlesBackground = ({ variant = 'default' }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const configs = {
    default: {
      particles: {
        number: {
          value: 60,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: "#3B82F6"
        },
        shape: {
          type: "circle"
        },
        opacity: {
          value: 0.2,
          random: true
        },
        size: {
          value: 3,
          random: true
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
        },
        links: {
          enable: true,
          distance: 150,
          color: "#3B82F6",
          opacity: 0.2,
          width: 1
        }
      },
      interactivity: {
        detect_on: "window",
        events: {
          onhover: {
            enable: true,
            mode: "grab"
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 180,
            links: {
              opacity: 0.4
            }
          }
        }
      },
      retina_detect: true,
      background: {
        color: "transparent"
      }
    },
    rain: {
      particles: {
        number: {
          value: 100,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: "#3B82F6"
        },
        shape: {
          type: "line"
        },
        opacity: {
          value: 0.2,
          random: true
        },
        size: {
          value: 2,
          random: true
        },
        move: {
          enable: true,
          speed: 15,
          direction: "bottom",
          straight: true,
          out_mode: "out"
        },
        links: {
          enable: false
        }
      },
      interactivity: {
        detect_on: "window",
        events: {
          onhover: {
            enable: false
          }
        }
      },
      retina_detect: true,
      background: {
        color: "transparent"
      }
    }
  };

  if (!isClient) return null;

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={configs[variant]}
      className="absolute inset-0 -z-10 pointer-events-none"
    />
  );
};

export default ParticlesBackground;