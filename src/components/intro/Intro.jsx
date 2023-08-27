import "./intro.css";

import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from '../../assets/Me.png'

// import ME from '../../assets/Rasif Tagizade image.jpg';


const Intro = () => {
  return (
    <section id="about">
      <h2>Sobre mí</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Rasif Taghizade" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Estudios</h5>
              <small>UTN - Ing en Sistemas</small><br />
              <small>Carrera Frontend Coderhouse</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Proyectos</h5>
              <small>10+ Proyectos realizados </small>
            </article>
          </div>
          <p>Leandro, Fiorotto | 24 años | La Plata. Bs As. Argentina</p>
          <p>Estoy por terminar la carrera de Ingeniería en Sistemas de Información de la UTN.</p>
          <p>Realicé la carrera Front-End en Coderhouse. </p>
          <p>Estoy en constante aprendizaje sobre nuevas tecnologías y trato de adaptarme lo mejor posible a cada marco de trabajo.</p>
          <a href="#contact" className="btn btn-primary">
            Contacto
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
