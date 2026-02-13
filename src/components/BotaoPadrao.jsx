import React from 'react'

const BotaoPadrao = ({ texto, id }) => {
  return <a href={`#${id}`}><button className="px-8 py-4 bg-gradient-to-br from-[#e5856e] to-[#e03593] text-white border-none rounded text-base cursor-pointer transition duration-300 hover:shadow-[0_0_0_4px_#e5856e]">{texto}</button></a>

}

export default BotaoPadrao