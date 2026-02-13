import React from "react";
import Section from "./Section";
import HabilidadesItem from "./HabilidadesItem";
import BotaoPadrao from "./BotaoPadrao";
import {
  IconEyeglass,
  IconPencil,
  IconPerspective,
  IconPointer,
} from "@tabler/icons-react";

const Habilidades = () => {
  return (
    <Section>
      <div className="translate-x-[60px] opacity-0 animate-animeRight">
        <span className={`text-body`}>O que consigo fazer.</span>
        <h1 className="title-main mb-12">Habilidades.</h1>
      </div>

      <div className="flex gap-10 section-mb justify-between translate-x-[60px] opacity-0 animate-animeRight max-xl:flex-col max-xl:items-start max-xl:justify-center">
        <div className="grid grid-cols-2 gap-8 max-w-[680px] max-xl:max-w-full max-sm:grid-cols-1">
          <HabilidadesItem>
            <IconPencil />
            <h3 className="title-card">Prototipagem</h3>
            <p className="text-body text-muted max-xl:text-start">
              Um protótipo é fundamental para projetos, pois fornece aos
              desenvolvedores, designers, usuários e clientes uma visão concreta
              do produto final.
            </p>
          </HabilidadesItem>
          <HabilidadesItem>
            <IconPerspective />
            <h3 className="title-card">Responsividade</h3>
            <p className="text-body text-muted max-xl:text-start">
              Um site responsivo se adapta automaticamente às dimensões da tela
              do dispositivo, oferecendo aos usuários um conteúdo de qualidade,
              independentemente de qual dispositivo eles estão usando.
            </p>
          </HabilidadesItem>
          <HabilidadesItem>
            <IconPointer />
            <h3 className="title-card">Interatividade</h3>
            <p className="text-body text-muted max-xl:text-start">
              A interatividade é essencial para os aplicativos, pois proporciona
              uma experiência mais rica aos usuários, permitindo explorar novas
              funcionalidades e interagir com o conteúdo de forma significativa.
            </p>
          </HabilidadesItem>
          <HabilidadesItem>
            <IconEyeglass />
            <h3 className="title-card">Acessibilidade</h3>
            <p className="text-body text-muted max-xl:text-start">
              A acessibilidade é essencial para criar soluções inclusivas e
              acessíveis para todos os usuários, independentemente de qual
              habilidade ou deficiência.
            </p>
          </HabilidadesItem>
        </div>

        <div className="flex flex-col items-center bg-gradient-to-r from-[#ffc8e6] to-[#f8f8f800] rounded p-8 text-center max-xl:p-8 max-xl:w-full max-sm:p-12">
          <h3 className="title-lg mb-16">Veja meus projetos</h3>
          <p className="text-body mb-8 max-w-[380px]">
            Conheça minhas experiências de desenvolvimento Front-end em sites e
            aplicativos.
          </p>
          <p className="text-body mb-8 max-w-[380px]">
            Você também pode baixa-los e ter acesso a todo código fonte deles.
          </p>
          <div className="mt-8 place-self-center">
            <BotaoPadrao id="experiencias" texto="Ver projetos" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Habilidades;
