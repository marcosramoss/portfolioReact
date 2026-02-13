import React from "react";
import Section from "./Section";
import Logo from "../assets/essencialweblogo.png";
import PrintEw from "../assets/ew.png";
import Printrbb from "../assets/rbb.png";
import Printsnj from "../assets/snj.png";

const Experiencia = () => {
  return (
    <Section>
      <div className="translate-x-[60px] opacity-0 animate-animeRight">
        <div id="experiencias" className="section-mb">
          <div>
            <span className="text-body">Alguns de meus trabalhos.</span>
            <h1 className="title-main mb-12">Experiência.</h1>
          </div>

          <div className="grid grid-cols-[1fr_24%_24%] gap-10 max-xl:grid-cols-1 max-xl:grid-rows-[1fr_30%_30%] max-sm:gap-[60px]">
            <div className="bg-gradient-to-b from-[#47da4460] to-[#eee] p-10 rounded overflow-hidden relative h-[600px] group max-sm:h-[700px]">
              <img className="" src={Logo} alt="logo EssencialWeb" />
              <h2 className="title-card max-w-[370px] max-[800px]:max-w-[300px]">
                Conheça o Essencialweb.dev Uma agência digital focada em design
                criativo e desenvolvimento de sites para impulsionar seu
                negócio.
              </h2>
              <div>
                <a
                  href="https://essencialweb.dev"
                  target="blank"
                  rel="noopener"
                >
                  <img
                    className="absolute right-10 -bottom-[320px] transition-all duration-500 cursor-pointer group-hover:-bottom-[290px]"
                    src={PrintEw}
                    alt="print do site essencial web"
                  />
                </a>
              </div>
            </div>

            <div className="relative overflow-hidden p-[30px] flex flex-col justify-end transition duration-500 bg-card group hover:bg-[#222] max-sm:h-[600px]">
              <a href="https://rbbrandao.com.br" target="blank" rel="noopener">
                <img
                  className="rotate-[-45deg] absolute border border-black rounded-[10px] -right-[110px] top-[10px] transition duration-1000"
                  src={Printrbb}
                  alt="print do site rbb"
                />
              </a>
              <h2 className="title-card mb-0 transition duration-500 group-hover:text-white">
                Conheça o <br /> site RBB
              </h2>
              <p className="text-body font-bold text-muted max-xl:text-start max-xl:max-w-[500px] max-xl:mb-5">
                Agência de advocacia localizada no Rio de Janeiro com
                especialização em diversas áreas do direito.
              </p>
            </div>

            <div className="p-[30px] overflow-hidden relative transition duration-500 bg-card group hover:bg-[#222] max-sm:h-[600px]">
              <h2 className="title-card mb-0 transition duration-500 group-hover:text-white">
                Conheça o site SINERJ
              </h2>
              <p className="text-body font-bold text-muted max-xl:text-start max-xl:max-w-[500px] max-xl:mb-5">
                SINERJ, o sindicato dos nutricionistas do Rio de Janeiro, une a
                comunidade em prol da excelência, ética e inovação na nutrição.
              </p>
              <a href="https://sinerj.com" target="blank" rel="noopener">
                {" "}
                <img
                  className="absolute border border-black rounded-[10px]"
                  src={Printsnj}
                  alt="print do site sinerj"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Experiencia;
