import React from 'react'
import styles from './intro.module.css'
import BotaoPadrao from './BotaoPadrao'
import Section from './Section'
// import Reacoes from './Reacoes'

const Intro = () => {

  // const [foguete, setFogete] = React.useState(0)
  // const [fogo, setFogo] = React.useState(0)
  // const [coracao, setCoracao] = React.useState(0)
  // const [ok, setOk] = React.useState(0)
  // const [pensando, setPensando] = React.useState(0)

  return (
    <Section>
      <div className={`${styles.intro}`}>
        <h1 >Desenvolvedor Front-end & <br /> UX / UI Designer.</h1>
        <div className={styles.conteudo}>
          <p>Olá, meu nome é Marcos, e sou um desenvolvedor front-end. Tenho experiência em criar experiências de usuário ricas e intuitivas usando HTML, CSS, JavaScript e React. Possuo habilidades de design, além de técnicas de codificação.</p>
          <BotaoPadrao id='experiencias' texto='Ver projetos' />
        </div>
      </div >

      {/* <div className={`${styles.card}`}>
        <h2>agora você pode reagir às sessões!</h2>
        <p>Isso mesmo, você pode dar seu pitaco sobre o que achou do conteúdo, seja um ❤️,  ou até um 🤔. É a sua chance de me mostrar como você se sentiu e me ajudar a melhorar cada vez mais as sessões.</p>
        <p>Na parte inferior de cada sessão, você verá os botões de reação. Clique no botão que melhor representa o que você achou</p>
      </div> */}
      <div>

        <div className={`${styles.introContent}`}>
          <h1>Por que escolhi o Front-end?</h1>
          <p>Eu escolhi o front-end porque é uma área versátil que oferece muitas possibilidades. A combinação de design e codificação me permite criar experiências de usuário ricas e intuitivas.</p>
          <p>Eu amo a ideia de poder criar sites, aplicativos e interfaces responsivas que possam ajudar os usuários a executar tarefas de forma rápida e eficiente.</p>
        </div>
      </div>
    </Section>
  )
}

export default Intro
