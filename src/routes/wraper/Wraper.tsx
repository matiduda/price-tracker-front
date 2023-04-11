import { ReactElement } from "react";
import { Outlet } from "react-router-dom";
import { ParticleBackground } from "../../components/Background/ParticleBackground";
import { Footer } from "../../components/Footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";

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
