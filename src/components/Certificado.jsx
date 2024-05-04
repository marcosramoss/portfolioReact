import React from 'react'
import styles from './Certificado.module.css'

const Certificado = ({ curso, link, logo }) => {

  return (
    <div className={`${styles.certificado}`}>
      <div className={styles.descricao}>
        <img src={logo} alt='logo' />
        <h2>{curso}</h2>
      </div>
      <div className={styles.buttons}>
        <a className={styles.btngn} href={link} target='blank' rel='noopener'>Ver certificado</a>
      </div>
    </div>
  )
}

export default Certificado
