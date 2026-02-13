import React from "react";
import Section from "./Section";
import {
  IconBraces,
  IconBrandCss3,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandReact,
  IconCode,
  IconMedal,
  IconMedal2,
  IconPencil,
} from "@tabler/icons-react";

const Formacao = () => {
  return (
    <Section>
      <div className="-translate-x-[60px] animate-animeLeft opacity-0">
        <div>
          <span className={`text-body`}>Em que sou certificado.</span>
          <h1 className="title-main mb-12">Formação técnica.</h1>
        </div>

        <div className="grid grid-cols-2 gap-20 section-mb max-xl:grid-cols-1 max-xl:items-center max-xl:justify-center max-xl:gap-8">
          <div className="grid grid-cols-2 gap-10 max-w-[580px] max-xl:justify-center max-xl:max-w-full max-sm:grid-cols-1">
            <div className="bg-card flex flex-col items-center justify-center p-4 text-center">
              <div className="flex items-center justify-center w-20 h-20 p-4 bg-white rounded-full">
                <IconBrandHtml5 size={48} color="#ff6d00" />
              </div>
              <h3 className="title-card">A base da web</h3>
              <p className="m-0 text-muted text-body">
                Define a estrutura das páginas.
              </p>
            </div>

            <div className="bg-card flex flex-col items-center justify-center p-4 text-center">
              <div className="flex items-center justify-center w-20 h-20 p-4 bg-white rounded-full">
                <IconBrandCss3 size={48} color="#039be5" />
              </div>
              <h3 className="title-card">Dê vida à sua web</h3>
              <p className="m-0 text-muted text-body">
                Estilize e torne as páginas atraentes.
              </p>
            </div>

            <div className="bg-card flex flex-col items-center justify-center p-4 text-center">
              <div className="flex items-center justify-center w-20 h-20 p-4 bg-white rounded-full">
                <IconBrandJavascript size={48} color="#dcc61e" />
              </div>
              <h3 className="title-card">Interatividade na web</h3>
              <p className="m-0 text-muted text-body">
                Adiciona funcionalidades dinâmicas.
              </p>
            </div>

            <div className="bg-card flex flex-col items-center justify-center p-4 text-center">
              <div className="flex items-center justify-center w-20 h-20 p-4 bg-white rounded-full">
                <IconBrandReact size={48} color="#57c2de" />
              </div>
              <h3 className="title-card">Crie interfaces web modernas</h3>
              <p className="m-0 text-muted text-body">
                Constroi interfaces web complexas e de alta performance.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start p-0 group max-xl:px-12">
            <div className="transition duration-300 cursor-pointer group-hover:opacity-20 hover:!opacity-100">
              <IconPencil size={26} color="#aaa" />
              <h2 className="relative mb-0">UX e UI Design</h2>
              <p className="mb-16 text-muted text-body max-xl:text-start">
                Aprendi a criar interfaces de usuário, Tipografia, espaçamentos,
                cores, protótipos e wireframes, que é a base necessária para
                construir um projeto do zero.
              </p>
            </div>

            <div className="transition duration-300 cursor-pointer group-hover:opacity-20 hover:!opacity-100">
              <IconCode size={26} color="#aaa" />
              <h2 className="relative mb-0">HTML, CSS e JavaScript</h2>
              <p className="mb-16 text-muted text-body max-xl:text-start">
                Aprendi a usar as tags semânticas mais usadas em HTML. Com CSS
                aprendi muito FlexBox Layout, Grid Layout e mais. Em JavaScript
                aprendi sobre objetos, tratamento de Strings, Arrays, DOM e
                mais.
              </p>
            </div>

            <div className="transition duration-300 cursor-pointer group-hover:opacity-20 hover:!opacity-100">
              <IconBraces size={26} color="#aaa" />
              <h2 className="relative mb-0">React e Next.Js</h2>
              <p className="mb-16 text-muted text-body max-xl:text-start">
                Aprendi a usar Hooks, Componentes Funcionais, Eventos,
                PropTypes, useContext e mais.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Formacao;
