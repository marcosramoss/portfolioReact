import React from "react";
import Section from "./Section";
import JS from "../assets/certificadojs.jpg";
import UxUi from "../assets/uxui.jpg";

const Certificacoes = () => {
  return (
    <Section>
      <div className="bg-gradient-to-r from-[#dde9ff] to-[#dde9ff00] rounded p-[60px_30px_150px_30px] section-mb">
        <div>
          <span className={`text-body`}>Algumas de minhas conquistas.</span>
          <h1 className="title-main mb-8">Minhas certificações.</h1>
        </div>

        <div className="flex items-center justify-between gap-8 max-xl:flex-col">
          <div className="max-w-[600px] max-xl:max-w-full">
            <p className="text-body max-xl:text-start">
              Ao longo da minha carreira, me dediquei a aprender e me certificar
              em diversas tecnologias, como HTML, CSS, JavaScript e React.
            </p>
            <p className="text-body max-xl:text-start">
              Estou sempre buscando novas oportunidades para aprender e crescer,
              e pretendo continuar me certificando em áreas relevantes para o
              desenvolvimento front-end.
            </p>
            <strong className="max-xl:block max-xl:mt-8">
              Veja algumas das minhs certificações:
            </strong>
          </div>

          <div className="flex gap-10 max-w-[600px] text-body max-xl:max-w-full max-xl:mt-8 max-[800px]:flex-col">
            <img
              className="max-w-[250px] max-sm:max-w-[300px]"
              src={JS}
              alt="certificado JavaScript"
            />
            <img
              className="max-w-[250px] max-sm:max-w-[300px]"
              src={UxUi}
              alt="certificado HTML e CSS"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Certificacoes;
