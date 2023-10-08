import "./portfolio.css";

import IMG1 from "../../assets/img1.png";
import IMG2 from "../../assets/img2.png";
import IMG3 from "../../assets/img3.png";
import IMG4 from "../../assets/img4.png";
import IMG5 from "../../assets/img5.png";
import IMG6 from "../../assets/img6.png";
import IMG7 from "../../assets/img7.png";
import IMG8 from "../../assets/img8.png";
import IMG9 from "../../assets/img9.png";
import IMG10 from "../../assets/img10.png";
import IMG11 from "../../assets/img11.png";
import IMG12 from "../../assets/img12.png";

import React from "react";

// Función Portfolio
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Landing Tesla",
      img: IMG1,
      description:
        "Página de aterrizaje de la plataforma de Tesla, creada para reforzar mis habilidades como práctica",
      technologies: "Astro | Tailwind",
      link: "https://tesla-landing-indol.vercel.app/",
      github: "https://github.com/leofiorotto/tesla-landing",
    },
    {
      id: 3,
      title: "Marketplace NFT",
      img: IMG3,
      description: "Marketplace NFT en proceso, actualmente en desarrollo durante el curso de React de Coderhouse",
      technologies: "React | Vite | TypeScript",
      link: "https://ecommerce-react-five-delta.vercel.app/",
      github: "https://github.com/leofiorotto/ecommerce-react",
    },
    {
      id: 4,
      title: "Sunnyside agency",
      img: IMG9,
      description: "Los desafíos de Frontend Mentor lo ayudan a mejorar las habilidades mediante la creación de proyectos realistas.",
      technologies: "React | Vite | TypeScript",
      link: "https://leofiorotto.github.io/sunnyside-landing/",
      github: "https://github.com/leofiorotto/sunnyside-landing",
    },

    {
      id: 8,
      title: "Desafio Frontend Mentor",
      img: IMG7,
      description:
      "Los desafíos de Frontend Mentor lo ayudan a mejorar las habilidades mediante la creación de proyectos realistas.",
      technologies: "HTML | SCSS | JavaScript",
      link: "https://leofiorotto.github.io/web3-digital-diary/",
      github: "https://github.com/leofiorotto/web3-digital-diary",
    },
    {
      id: 10,
      title: "Huddle",
      img: IMG12,
      description:
        "Empresa dedicada a crear equipos de desarrollo",
      technologies: "React | CSS",
      link: "https://leofiorotto.github.io/huddle/",
      github: "https://github.com/leofiorotto/huddle",
    },
    {
      id: 9,
      title: "Componente de tarjetas de precios",
      img: IMG11,
      description:
        "Componente reutilizable para mostrar precios de productos",
      technologies: "HTML | SCSS | JavaScript",
      link: "https://leofiorotto.github.io/price-card-component/",
      github: "https://github.com/leofiorotto/price-card-component",
    },
    {
      id: 6,
      title: "Lista de Tareas",
      img: IMG5,
      description:
        "Lista de tareas para que nunca olvides lo que tienes que hacer",
      technologies: "React | CSS",
      link: "https://lista-tareas-seven.vercel.app/",
      github: "https://github.com/leofiorotto/listaTareas",
    },

    {
      id: 2,
      title: "E-commerce Digital-Coder",
      img: IMG2,
      description:
        "E-commerce realizado durante el curso de Desarrollo Web de Coderhouse",
      technologies: "HTML | CSS | Bootstrap | SASS",
      link: "https://leofiorotto.github.io/EntregaFinal-Fiorotto/",
      github: "https://github.com/leofiorotto/EntregaFinal-Fiorotto",
    },
    {
      id: 5,
      title: "Consultoria",
      img: IMG10,
      description:
        "Empresa Biztec Solutions - Consultoria de IT. Proyecto en conjunto con el equipo de Biztec Solutions",
      technologies: "Astro | Tailwind",
      link: "https://consultory.vercel.app/",
      github: "https://github.com/leofiorotto/consultory",
    },

  ];

  return (
    <section id="portfolio">
      <h5>Algunos de mis trabajos</h5>
      <h2>Proyectos</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} className="img_item" />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Demo en Vivo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
