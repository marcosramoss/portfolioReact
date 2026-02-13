import React from "react";
import BotaoPadrao from "./BotaoPadrao";
import Section from "./Section";
// import Reacoes from './Reacoes'

const Intro = () => {
  // const [foguete, setFogete] = React.useState(0)
  // const [fogo, setFogo] = React.useState(0)
  // const [coracao, setCoracao] = React.useState(0)
  // const [ok, setOk] = React.useState(0)
  // const [pensando, setPensando] = React.useState(0)

  return (
    <Section>
      <div className="flex items-center justify-between gap-10 -translate-x-[60px] opacity-0 animate-animeLeft max-[1100px]:flex-col mt-14 mb-14">
        <h1 className="title-hero w-[590px] max-[1100px]:w-auto max-[1100px]:text-center max-[1100px]:mb-0">
          Desenvolvedor Front-end & <br /> UX / UI Designer.
        </h1>
        <div className="max-w-[500px] max-[1100px]:max-w-full max-lg:flex max-lg:flex-col max-lg:items-center max-lg:gap-8">
          <p className="text-body mb-[60px] max-[1100px]:text-center max-[1100px]:mb-0 max-md:mb-8">
            Olá, meu nome é Marcos, e sou um desenvolvedor front-end. Tenho
            experiência em criar experiências de usuário ricas e intuitivas
            usando HTML, CSS, JavaScript e React. Possuo habilidades de design,
            além de técnicas de codificação.
          </p>
          <BotaoPadrao id="experiencias" texto="Ver projetos" />
        </div>
      </div>

      {/* <div className={`${styles.card}`}>
        <h2>agora você pode reagir às sessões!</h2>
        <p>Isso mesmo, você pode dar seu pitaco sobre o que achou do conteúdo, seja um ❤️,  ou até um 🤔. É a sua chance de me mostrar como você se sentiu e me ajudar a melhorar cada vez mais as sessões.</p>
        <p>Na parte inferior de cada sessão, você verá os botões de reação. Clique no botão que melhor representa o que você achou</p>
      </div> */}
      <div>
        <div className="flex max-lg:flex-col max-lg:items-center gap-10 items-start justify-between section-mb bg-gradient-to-r from-[rgba(255,212,199,1)] to-[rgba(255,212,199,0)] rounded p-[3rem_1rem] mt-4 -translate-x-[60px] opacity-0 animate-animeLeft">
          <h1 className="grow title-main max-w-[500px]">
            Por que escolhi o Front-end?
          </h1>
          <p className="text-body max-w-[300px] max-lg:max-w-[500px]">
            Eu escolhi o front-end porque é uma área versátil que oferece muitas
            possibilidades. A combinação de design e codificação me permite
            criar experiências de usuário ricas e intuitivas.
          </p>
          <p className="text-body max-w-[300px] max-lg:max-w-[500px]">
            Eu amo a ideia de poder criar sites, aplicativos e interfaces
            responsivas que possam ajudar os usuários a executar tarefas de
            forma rápida e eficiente.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Intro;
