import { ReactElement, useCallback } from "react";
import { loadFull } from "tsparticles";
import { Container, Engine } from "tsparticles-engine";
import { Particles } from "react-tsparticles";

export const ParticleBackground = (): ReactElement => {

  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      console.log(container);
    }, []
  );

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#11111a",
          },
        },
        fpsLimit: 30,
        interactivity: {
          detectsOn: "canvas",
          events: {
            resize: true,
          },
        },
        particles: {
          color: {
            value: "#f1f1f1",
          },
          number: {
            density: {
              enable: true,
              area: 1080,
            },
            limit: 0,
            value: 300,
          },
          opacity: {
            animation: {
              enable: true,
              minimumValue: 0.5,
              speed: 1,
              sync: false,
            },
            random: {
              enable: true,
              minimumValue: 0.1,
            },
            value: 1,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: {
              enable: true,
              minimumValue: 0.5,
            },
            value: 1,
          },
        },
        fullScreen: {
          zIndex: -1,
        },
      }}
    />
  );
};
