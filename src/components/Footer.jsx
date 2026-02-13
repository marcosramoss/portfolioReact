import React from 'react'
import logo from '../img/logo.svg'
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react'

const Footer = () => {

  const data = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-[#ddd]">
      <div className="container flex items-start justify-around p-4 bg-card max-md:flex-col max-md:items-center max-md:gap-12">
        <div className="flex flex-col items-center max-w-[260px] text-center pt-6">
          <img src={logo} alt="" className="w-12 mb-[6.5px]" />
          <p className="text-body">Um portfolio feito com amor
            para compartilhar minhas
            habilidades e conhecimentos.</p>
        </div>
  
        <div className="flex flex-col items-start max-md:items-center max-md:text-center">
          <h3>Contato</h3>
          <ul className="p-0">
            <li className="mb-2.5 text-body"><a href="mailto:marcosramoss.pessoal@gmail.com" className="hover:text-[#888] hover:translate-x-[30px] transition-transform block">marcosramoss.pessoal@gmail.com</a></li>
            <li className="mb-2.5 text-body"><a href="tel: +351913463399" className="hover:text-[#888] hover:translate-x-[30px] transition-transform block">+351913463399</a></li>
            <li className="mb-2.5 text-body"><a href="https://google.com/maps/place/Batalha/@39.657519,-8.8736517,13z/data=!3m1!4b1!4m6!3m5!1s0xd22754dcc2a014b:0x40721e63fabf1bed!8m2!3d39.6582957!4d-8.8241243!16zL20vMDd6bTZo?entry=ttu" target='blank' rel='noopener' className="hover:text-[#888] hover:translate-x-[30px] transition-transform block">Batalha, Leiria - Portugal</a></li>
          </ul>
        </div>

        <div className="flex flex-col items-start max-md:items-center max-md:text-center">
          <h3>Redes</h3>
          <ul className="flex gap-4 p-0">
            <li><a href="https://github.com/marcosramoss" title='Github' target='blank' rel='noopener'><IconBrandGithub size={32} /> </a> </li>
            <li><a href="https://www.linkedin.com/in/marcosramoss/" title='Linkedin' target='blank' rel='noopener'><IconBrandLinkedin size={32} /></a></li>
          </ul>
        </div>
      </div>
      <div className="font-open-sans text-center pb-4">
        <p>Marcos Ramos © 2023 - {data} | Todos os direitos.</p>
      </div>
    </footer>
  )
}

export default Footer