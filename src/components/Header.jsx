import { IconBrandGithub, IconBrandLinkedin, IconCertificate } from '@tabler/icons-react'
import { NavLink } from 'react-router-dom'

const Header = () => {

  function scrollTop() {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  return (
    <header className="bg-card sticky top-0 z-10 border-b border-[#ddd] p-4">
      <nav className="container flex items-center justify-between mx-auto">
        <NavLink onClick={scrollTop} to='/' end><img src="./logo.svg" alt="Logo" /></NavLink>
        <ul className="flex gap-4 pl-0">
          <li><NavLink onClick={scrollTop} to={'certificados'} title='Certificados'><IconCertificate size={32} /></NavLink></li>

          <li><a href="https://github.com/marcosramoss" title='Github' target='blank' rel='noopener'><IconBrandGithub size={32} /> </a> </li>

          <li><a href="https://www.linkedin.com/in/marcosramoss/" title='Linkedin' target='blank' rel='noopener'><IconBrandLinkedin size={32} /></a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header