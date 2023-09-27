import "./certifications.css";

import IMG1 from "../../assets/DesarrolloWeb.png";
import IMG2 from "../../assets/JS.png";
import IMG3 from "../../assets/react.png";
import IMG4 from "../../assets/backend.png";
import IMG5 from "../../assets/frontend.png"
import React from "react";

// Función Portfolio
const Certifications = () => {
  const soloProjects = [
    {
      id: 1,
      img: IMG1,
      link: "https://www.coderhouse.com/certificados/64f7789cfffc6108f94fe834",
    },
    {
      id: 2,
      img: IMG2,
      link: "https://www.coderhouse.com/certificados/651149f2dfa4926652b7535a?lang",
    },
    {
      id: 3,
      img: IMG3,
      link: "https://www.coderhouse.com/certificados/651149f2dfa4926652b7535a?lang",
    },
    {
      id: 4,
      img: IMG4,
      link: "https://calculadora-jet-kappa.vercel.app/",
    },
    {
      id: 5,
      img: IMG5,
      link: "https://calculadora-jet-kappa.vercel.app/",
    },
    {
      id: 5,
      img: IMG2,
      link: "https://calculadora-jet-kappa.vercel.app/",
    },
    // {
    //   id: 5,
    //   title: "Lista de Tareas",
    //   img: IMG5,
    //   description:
    //     "Lista de tareas para que nunca olvides lo que tienes que hacer",
    //   technologies: "React | CSS",
    //   link: "https://lista-tareas-seven.vercel.app/",
    //   github: "https://github.com/leofiorotto/listaTareas",
    // },
    // {
    //   id: 6,
    //   title: "Contador de Clicks",
    //   img: IMG6,
    //   description:
    //     "Comencé este proyecto en React para aprender sobre hooks y crear una interfaz dinámica",
    //   technologies: "HTML | SCSS | JavaScript",
    //   link: "https://contador-blush-kappa.vercel.app/",
    //   github: "https://github.com/leofiorotto/contador",
    // },
  ];

  return (
    <section id="certifications">
      <h5>Algunos de mis logros</h5>
      <h2>Certificaciones</h2>
      <h1 style={{textAlign:'center', color:'red'}}>Seccion en proceso</h1>

      <div className="container certifications__container">
        {soloProjects.map((pro) => (
          <article className="certifications__item" key={pro.id}>
            <div className="certifications__item-image">
              <img className="img-certificactions" src={pro.img} alt={pro.title} />
            </div>
            <div className="certifications__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
          </article>
        ))}
      </div>
      
    </section>
  );
};

export default Certifications;
