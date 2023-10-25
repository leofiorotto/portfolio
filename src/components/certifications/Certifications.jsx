import "./certifications.css";

import IMG1 from "../../assets/DesarrolloWeb.png";
import IMG2 from "../../assets/JS.png";
import IMG3 from "../../assets/react.png";
import IMG5 from "../../assets/frontend.png"
import React from "react";
import IMG6 from "../../assets/frontend-coder.png";
import IMG7 from "../../assets/react.png";

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
      img: IMG6,
      link: "https://www.coderhouse.com/certificados/653028f98da4042772268500?lang=es",
    },
    {
      id: 4,
      img: IMG7,
      link: "https://www.coderhouse.com/certificados/653028f98da404fe872684e9?lang=es",
    },
  
    {
      id: 5,
      img: IMG5,
    },
   
  ];

  return (
    <section id="certifications">
      <h5>Algunos de mis logros</h5>
      <h2>Certificaciones</h2>
      <h1 style={{textAlign:'center', color:'red'}}>Seccion en proceso</h1>

      <div className="container certifications__container">
        {soloProjects.map((pro) => (
          <article className="certifications__item" key={pro.id}>
            <a href={pro.link}>
              <div className="certifications__item-image">
                <img className="img-certificactions" src={pro.img} alt={pro.title} />
              </div>
            </a>
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
