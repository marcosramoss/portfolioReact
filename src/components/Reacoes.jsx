import React from 'react'

const Reacoes = ({state, setState}) => {
  const [foguete, setFogete] = React.useState(0)
  const [fogo, setFogo] = React.useState(0)
  const [coracao, setCoracao] = React.useState(0)
  const [ok, setOk] = React.useState(0)
  const [pensando, setPensando] = React.useState(0)

  return (
    <div className="flex gap-4">
      <button className="bg-[#f6f6f6] px-4 py-2 rounded-[50px] border-none cursor-pointer transition duration-200 hover:bg-[#dfdfdf]" onClick={() => setFogete(foguete + 1)}>🚀| {foguete}</button>
      <button className="bg-[#f6f6f6] px-4 py-2 rounded-[50px] border-none cursor-pointer transition duration-200 hover:bg-[#dfdfdf]" onClick={() => setFogo(fogo + 1)}>🔥| {fogo}</button>
      <button className="bg-[#f6f6f6] px-4 py-2 rounded-[50px] border-none cursor-pointer transition duration-200 hover:bg-[#dfdfdf]" onClick={() => setCoracao(coracao + 1)}>❤️| {coracao}</button>
      <button className="bg-[#f6f6f6] px-4 py-2 rounded-[50px] border-none cursor-pointer transition duration-200 hover:bg-[#dfdfdf]" onClick={() => setOk(ok + 1)}>👌| {ok}</button>
      <button className="bg-[#f6f6f6] px-4 py-2 rounded-[50px] border-none cursor-pointer transition duration-200 hover:bg-[#dfdfdf]" onClick={() => setPensando(pensando + 1)}>🤔| {pensando}</button>
    </div>
  )
}

export default Reacoes