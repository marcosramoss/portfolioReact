import React from 'react'
import Section from './Section'
import styles from './Certificados.module.css'
import Certificado from './Certificado'
import origamid from '../assets/origamidlogo.png'
import cod3rlogo from '../assets/cod3rlogo.png'
import Head from './Head'

const Certificados = () => {
  return (
    <Section>
      <Head title='Marcos Ramos | Certificados' description='Veja meus certificados saiba tudo oque eu aprendi até agora.'/>
      <div className={styles.certificados}>
        <div>
          <span className='fontCorpo'>Minhas conquistas.</span>
          <h1 className='fontTitulo'>Certificados.</h1>
        </div>
        <Certificado logo={origamid} curso='UI Design' link='https://www.origamid.com/certificate/45e3c383'/>

        <Certificado logo={origamid} curso='HTML e CSS' link='https://www.origamid.com/certificate/81713890' />

        <Certificado logo={origamid} curso='JavaScript' link='https://www.origamid.com/certificate/803cbec3'/>

        <Certificado logo={origamid} curso='UI Design Avançado' link='https://www.origamid.com/certificate/09de8fa8' />

        <Certificado logo={origamid} curso='CSS Flexbox' link='https://www.origamid.com/certificate/079f44a1' />
        
        <Certificado logo={cod3rlogo} curso='TypeScript' link='https://escola.formacao.dev/certificado/c9b17b30-0725-4570-b09e-d5e9de8e42b9' />
      </div>
    </Section>
  )
}

export default Certificados
