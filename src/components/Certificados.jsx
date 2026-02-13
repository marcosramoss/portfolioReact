import React from "react";
import Section from "./Section";
import Certificado from "./Certificado";
import origamid from "../assets/origamidlogo.png";
import cod3rlogo from "../assets/cod3rlogo.png";

const Certificados = () => {
  return (
    <Section>
      <div className="mt-[30px] section-mb">
        <div>
          <span className="text-body">Minhas conquistas.</span>
          <h1 className="title-main mb-12">Certificados.</h1>
        </div>
        <Certificado
          logo={origamid}
          curso="UI Design"
          link="https://www.origamid.com/certificate/45e3c383"
        />

        <Certificado
          logo={origamid}
          curso="HTML e CSS"
          link="https://www.origamid.com/certificate/81713890"
        />

        <Certificado
          logo={origamid}
          curso="JavaScript"
          link="https://www.origamid.com/certificate/803cbec3"
        />

        <Certificado
          logo={origamid}
          curso="UI Design Avançado"
          link="https://www.origamid.com/certificate/09de8fa8"
        />

        <Certificado
          logo={origamid}
          curso="CSS Flexbox"
          link="https://www.origamid.com/certificate/079f44a1"
        />

        <Certificado
          logo={cod3rlogo}
          curso="TypeScript"
          link="https://escola.formacao.dev/certificado/c9b17b30-0725-4570-b09e-d5e9de8e42b9"
        />
      </div>
    </Section>
  );
};

export default Certificados;
