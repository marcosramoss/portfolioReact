import React from 'react'
import Intro from '../components/Intro'
import Head from '../components/Head'
import Habilidades from '../components/Habilidades'
import Formacao from '../components/Formacao'
import Experiencia from '../components/Experiencia'


const Home = () => {
  return (
    <>
      <Head title='Marcos Ramos Desenvolvedor e Designer' description='Sou um desenvolvedor front-end e Tenho experiência em criar experiências de usuário ricas e intuitivas usando HTML, CSS, JavaScript e React. Possuo habilidades de design, além de técnicas de codificação.' />
      <Intro />
      <Habilidades />
      <Formacao/>
      <Experiencia/>
    </>
  )
}

export default Home
