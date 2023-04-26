import { ReactElement, useCallback } from "react";
import { loadFull } from "tsparticles";
import { Container, Engine } from "tsparticles-engine";
import { Particles } from "react-tsparticles";
import { Img } from "@chakra-ui/image";

export const ParticleBackground = (): ReactElement => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      url="parcicleConfig.json"
      init={particlesInit}
    />
  );
};
