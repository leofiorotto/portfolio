import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">Leandro Fiorotto</a>
      <ul className="permalinks">
        <li><a href="#home">Inicio</a></li>
        <li><a href="#about">Sobre mí</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#certifications">Certificaciones</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/leandro-fiorotto/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/leofiorotto" target="_blank" rel="noreferrer" ><FaGithub /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; 2023 @ Todos los derechos reservados</small>
      </div>
    </footer>
  )
}

export default Footer