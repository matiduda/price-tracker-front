import { ReactElement, useCallback } from "react";
import { loadFull } from "tsparticles";
import { Container, Engine } from "tsparticles-engine";
import { Particles } from "react-tsparticles";
import { Img } from "@chakra-ui/image";

export const ParticleBackground = (): ReactElement => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container);
  }, []);

  return (
    <Particles id="tsparticles" url="parcicleConfig.json" init={particlesInit} loaded={particlesLoaded} />
  );
};
