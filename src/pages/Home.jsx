import React from "react";
import Intro from "../components/Intro";
import Habilidades from "../components/Habilidades";
import Formacao from "../components/Formacao";
import Experiencia from "../components/Experiencia";

const Home = () => {
  return (
    <>
      <Intro />
      <Habilidades />
      <Formacao />
      <Experiencia />
    </>
  );
};

export default Home;
