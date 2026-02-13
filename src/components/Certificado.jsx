import React from "react";

const Certificado = ({ curso, link, logo }) => {
  return (
    <div className="bg-card mb-4 p-[0.5rem_1rem] flex items-center justify-between rounded-lg -translate-x-[60px] opacity-0 animate-animeLeft">
      <div className="flex items-center gap-2.5">
        <img className="h-8 w-8 rounded-md" src={logo} alt="logo" />
        <h2 className="title-card mb-0 max-[650px]:text-[1.2rem] max-sm:text-sm">{curso}</h2>
      </div>
      <div className="flex items-center gap-4 max-[650px]:mb-4">
        <a
          className="inline-block p-4 rounded-md transition duration-200 bg-[#ccc] text-black hover:bg-[#ddd] hover:shadow-[0_0_0_3px_#aaa] max-sm:text-sm"
          href={link}
          target="blank"
          rel="noopener"
        >
          Certificado
        </a>
      </div>
    </div>
  );
};

export default Certificado;
