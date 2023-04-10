import { ReactElement } from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../../components/footer/Footer";
import { Navbar } from "../../components/navbar/Navbar";
import { ParticleBackground } from "../../components/background/ParticleBackground";

export const Wraper = (): ReactElement => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <ParticleBackground />
    </>
  );
};
