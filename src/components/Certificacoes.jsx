import React from 'react'
import styles from './Certificacoes.module.css'
import Section from './Section'
import JS from '../assets/certificadojs.jpg'
import UxUi from '../assets/uxui.jpg'


const Certificacoes = () => {
  return (
    <Section>
      <div className={styles.certificacoes}>

        <div>
          <span className={`fontCorpo`}>Algumas de minhas conquistas.</span>
          <h1 className={`fontTitulo`}>Minhas certificações.</h1>
        </div>

        <div className={`${styles.conteudo}`}>
          <div className={styles.texto}>
            <p className='fontCorpo'>Ao longo da minha carreira, me dediquei a aprender e me certificar em diversas tecnologias, como HTML, CSS, JavaScript e React.</p>
            <p className='fontCorpo'>Estou sempre buscando novas oportunidades para aprender e crescer, e pretendo continuar me certificando em áreas relevantes para o desenvolvimento front-end.</p>
            <strong>Veja algumas das minhs certificações:</strong>
          </div>

          <div className={`${styles.carrocel} fontCorpo`}>
            <img src={JS} alt="certificado JavaScript" />
            <img src={UxUi} alt="certificado HTML e CSS" />
          </div>
        </div>

      </div>

    </Section>
  )
}

export default Certificacoes
