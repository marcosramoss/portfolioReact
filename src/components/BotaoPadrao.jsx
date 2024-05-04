import React from 'react'
import styles from './BotaoPadrao.module.css'

const BotaoPadrao = ({ texto, id }) => {
  return <a href={`#${id}`}><button className={styles.btn}>{texto}</button></a>

}

export default BotaoPadrao
