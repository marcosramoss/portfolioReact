import React from 'react'
import logo from '../img/logo.svg'
import styles from './Footer.module.css'
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react'

const Footer = () => {

  const data = new Date().getFullYear()

  return (
    <footer className={styles.footerBg}>
      <div className={`${styles.footer} container`}>
        <div className={styles.itemSlogan}>
          <img src={logo} alt="" />
          <p>Um portfolio feito com amor
            para compartilhar minhas
            habilidades e conhecimentos.</p>
        </div>
  
        <div className={styles.item}>
          <h3>Contato</h3>
          <ul>
            <li><a href="mailto:marcosramoss.pessoal@gmail.com">marcosramoss.pessoal@gmail.com</a></li>
            <li><a href="tel: +351913463399">+351913463399</a></li>
            <li><a href="https://google.com/maps/place/Batalha/@39.657519,-8.8736517,13z/data=!3m1!4b1!4m6!3m5!1s0xd22754dcc2a014b:0x40721e63fabf1bed!8m2!3d39.6582957!4d-8.8241243!16zL20vMDd6bTZo?entry=ttu" target='blank' rel='noopener'>Batalha, Leiria - Portugal</a></li>
          </ul>
        </div>

        <div className={styles.item}>
          <h3>Redes</h3>
          <ul className={styles.redes}>
            <li><a href="https://github.com/marcosramoss" title='Github' target='blank' rel='noopener'><IconBrandGithub size={32} /> </a> </li>
            <li><a href="https://www.linkedin.com/in/marcosramoss/" title='Linkedin' target='blank' rel='noopener'><IconBrandLinkedin size={32} /></a></li>
          </ul>
        </div>
      </div>
      <div className={styles.copy}>
        <p>Marcos Ramos © 2023 - {data} | Todos os direitos.</p>
      </div>
    </footer>
  )
}

export default Footer
