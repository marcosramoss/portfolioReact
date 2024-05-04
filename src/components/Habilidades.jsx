import React from 'react'
import Section from './Section'
import HabilidadesItem from './HabilidadesItem'
import styles from './Habilidades.module.css'
import BotaoPadrao from './BotaoPadrao'
import { IconEyeglass, IconPencil, IconPerspective, IconPointer } from '@tabler/icons-react'

const Habilidades = () => {
  return (
    <Section>
      <div className={styles.habilidadesTitulo}>
        <span className={`fontCorpo`}>O que consigo fazer.</span>
        <h1 className={`${styles.titulo} fontTitulo`}>Habilidades.</h1>
      </div>

      <div className={`${styles.habilidades}`}>

        <div className={`${styles.gridItems}`}>
          <HabilidadesItem>
            <IconPencil />
            <h3 className={``} >Prototipagem</h3>
            <p className={`fontCorpo`}>Um protótipo é fundamental para projetos, pois fornece aos desenvolvedores, designers, usuários e clientes uma visão concreta do produto final.</p>
          </HabilidadesItem>
          <HabilidadesItem>
            <IconPerspective />
            <h3 className={``} >Responsividade</h3>
            <p className={`fontCorpo`}>Um site responsivo se adapta automaticamente às dimensões da tela do dispositivo, oferecendo aos usuários um conteúdo de qualidade, independentemente de qual dispositivo eles estão usando.</p>
          </HabilidadesItem>
          <HabilidadesItem>
            <IconPointer />
            <h3 className={``} >Interatividade</h3>
            <p className={`fontCorpo`}>A interatividade é essencial para os aplicativos, pois proporciona uma experiência mais rica aos usuários, permitindo explorar novas funcionalidades e interagir com o conteúdo de forma significativa.</p>
          </HabilidadesItem>
          <HabilidadesItem>
            <IconEyeglass />
            <h3 className={``} >Acessibilidade</h3>
            <p className={`fontCorpo`}>A acessibilidade é essencial para criar soluções inclusivas e acessíveis para todos os usuários, independentemente de suas habilidades ou deficiências.</p>
          </HabilidadesItem>
        </div>

        <div className={`${styles.infoCard}`}>
          <h3>Veja meus projetos</h3>
          <p className={`fontCorpo`}>Conheça minhas experiências de desenvolvimento Front-end em sites e aplicativos.</p>
          <p className={`fontCorpo`}>Você também pode baixa-los e ter acesso a todo código fonte deles.</p>
          <BotaoPadrao id='experiencias' texto='Ver projetos' />
        </div>

      </div>

    </Section>
  )
}

export default Habilidades
