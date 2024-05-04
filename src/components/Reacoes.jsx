import React from 'react'
import styles from './Reacoes.module.css'

const Reacoes = ({state, setState}) => {
  const [foguete, setFogete] = React.useState(0)
  const [fogo, setFogo] = React.useState(0)
  const [coracao, setCoracao] = React.useState(0)
  const [ok, setOk] = React.useState(0)
  const [pensando, setPensando] = React.useState(0)

  return (
    <div className={`${styles.reacoes}`}>
      <button onClick={() => setFogete(foguete + 1)}>🚀| {foguete}</button>
      <button onClick={() => setFogo(fogo + 1)}>🔥| {fogo}</button>
      <button onClick={() => setCoracao(coracao + 1)}>❤️| {coracao}</button>
      <button onClick={() => setOk(ok + 1)}>👌| {ok}</button>
      <button onClick={() => setPensando(pensando + 1)}>🤔| {pensando}</button>
    </div>
  )
}

export default Reacoes
