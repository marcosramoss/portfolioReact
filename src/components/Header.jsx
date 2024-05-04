import { IconBrandGithub, IconBrandLinkedin, IconCertificate } from '@tabler/icons-react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'


const Header = () => {

  function scrollTop() {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  return (
    <header className={`${styles.headerBg}`}>
      <nav className={`${styles.nav} container`}>
        <NavLink onClick={scrollTop} to='/' end><img src="./logo.svg" alt="Logo" /></NavLink>
        <ul>
          <li><NavLink onClick={scrollTop} to={'certificados'} title='Certificados'><IconCertificate size={32} /></NavLink></li>

          <li><a href="https://github.com/marcosramoss" title='Github' target='blank' rel='noopener'><IconBrandGithub size={32} /> </a> </li>

          <li><a href="https://www.linkedin.com/in/marcosramoss/" title='Linkedin' target='blank' rel='noopener'><IconBrandLinkedin size={32} /></a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
