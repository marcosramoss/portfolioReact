import React from 'react'
import styles from './Experiencia.module.css'
import Section from './Section'
import Logo from '../assets/essencialweblogo.png'
import PrintEw from '../assets/ew.png'
import Printrbb from '../assets/rbb.png'
import Printsnj from '../assets/snj.png'


const Experiencia = () => {
  return (
    <Section>
      <div className={styles.animarExperiencias}>
        <div id='experiencias' className={`${styles.experiencia}`}>
          <div >
            <span className='fontCorpo'>Alguns de meus trabalhos.</span>
            <h1 className='fontTitulo'>Experiência.</h1>
          </div>

          <div className={`${styles.projetos}`}>

            <div className={`${styles.essencial}`}>
              <img className={`${styles.logo}`} src={Logo} alt="logo EssencialWeb" />
              <h2>Conheça o Essencialweb.dev Uma agência digital focada em design criativo e desenvolvimento de sites para impulsionar seu negócio.</h2>
              <div>
                
                <a href="https://essencialweb.dev" target='blank' rel='noopener'><img className={`${styles.printew}`} src={PrintEw} alt="print do site essencial web" /></a>
              </div>
            </div>

            <div className={`${styles.rbb}`}>
              <a href="https://rbbrandao.com.br" target='blank' rel='noopener'><img className={`${styles.printrbb}`} src={Printrbb} alt="print do site rbb" /></a>
              <h2 className={styles.rbbh2}>Conheça o <br /> site RBB</h2>
              <p >Agência de advocacia localizada no Rio de Janeiro com especialização em diversas áreas do direito.</p>
            </div>

            <div className={`${styles.snj}`}>
              <h2 className={styles.snjh2}>Conheça o site SINERJ</h2>
              <p>SINERJ, o sindicato dos nutricionistas do Rio de Janeiro, une a comunidade em prol da excelência, ética e inovação na nutrição.</p>
              <a href="https://sinerj.com" target='blank' rel='noopener'> <img src={Printsnj} alt="print do site sinerj" /></a>
            </div>

          </div>
        </div>
      </div>
    </Section>
  )
}

export default Experiencia
