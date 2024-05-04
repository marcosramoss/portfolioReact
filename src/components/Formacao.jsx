import React from 'react'
import Section from './Section'
import styles from './Formacao.module.css'
import { IconBraces, IconBrandCss3, IconBrandHtml5, IconBrandJavascript, IconBrandReact, IconCode, IconMedal, IconMedal2, IconPencil } from '@tabler/icons-react'

const Formacao = () => {

  return (
    <Section >
      <div className={styles.animarFormacao}>

        <div>
          <span className={`fontCorpo`}>Em que sou certificado.</span>
          <h1 className={`${styles.titulo} fontTitulo`}>Formação técnica.</h1>
        </div>

        <div className={`${styles.formacao}`}>

          <div className={`${styles.cardsContainer}`}>
            <div className={`${styles.item}`}>
              <div className={`${styles.iconBg}`}>
                <IconBrandHtml5 size={48} color='#ff6d00' />
              </div>
              <h3>A base da web</h3>
              <p className={`fontCorpo`}>Define a estrutura das páginas.</p>
            </div>

            <div className={`${styles.item}`}>
              <div className={`${styles.iconBg}`}>
                <IconBrandCss3 size={48} color='#039be5' />
              </div>
              <h3>Dê vida à sua web</h3>
              <p className={`fontCorpo`}>Estilize e torne as páginas atraentes.</p>
            </div>

            <div className={`${styles.item}`}>
              <div className={`${styles.iconBg}`}>
                <IconBrandJavascript size={48} color='#dcc61e' />
              </div>
              <h3>Interatividade na web</h3>
              <p className={`fontCorpo`}>Adiciona funcionalidades dinâmicas.</p>
            </div>

            <div className={`${styles.item}`}>
              <div className={`${styles.iconBg}`}>
                <IconBrandReact size={48} color='#57c2de' />
              </div>
              <h3>Crie interfaces web modernas</h3>
              <p className={`fontCorpo`}>Constroi interfaces web complexas e de alta performance.</p>
            </div>
          </div>

          <div className={`${styles.descricao}`}>
            <div className={`${styles.descricaoItem}`}>
              <IconPencil size={26} color='#aaa' />
              <h2>UX e UI Design</h2>
              <p className={`fontCorpo`}>Aprendi a criar interfaces de usuário, Tipografia, espaçamentos, cores, protótipos e wireframes, que é a base necessária para construir um projeto do zero.</p>
            </div>

            <div className={`${styles.descricaoItem}`}>
              <IconCode size={26} color='#aaa' />
              <h2>HTML, CSS e JavaScript</h2>
              <p className={`fontCorpo`}>Aprendi a usar as tags semânticas mais usadas em HTML. Com CSS aprendi muito FlexBox Layout, Grid Layout e mais. Em JavaScript aprendi sobre objetos, tratamento de Strings, Arrays, DOM e mais.</p>
            </div>

            <div className={`${styles.descricaoItem}`}>
              <IconBraces size={26} color='#aaa' />
              <h2>React e Next.Js</h2>
              <p className={`fontCorpo`}>Aprendi a usar Hooks, Componentes Funcionais, Eventos, PropTypes, useContext e mais.</p>
            </div>
          </div>

        </div>
      </div>
    </Section>
  )
}

export default Formacao
