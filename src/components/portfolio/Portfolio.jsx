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
      description: "This challenge will be a perfect test of your layout and responsive skills. There's a tiny bit of JS for the mobile menu, but the focus is HTML & CSS.  ",
      technologies: "React | Vite | TypeScript",
      link: "https://leofiorotto.github.io/sunnyside-landing/",
      github: "https://github.com/leofiorotto/sunnyside-landing",
    },
    {
      id: 5,
      title: "Calculadora",
      img: IMG4,
      description:
        "Calculadora creada como parte de mi proceso de aprendizaje",
      technologies: "React | CSS",
      link: "https://calculadora-jet-kappa.vercel.app/",
      github: "https://github.com/leofiorotto/calculadora",
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
      id: 7,
      title: "Contador de Clicks",
      img: IMG6,
      description:
        "Comencé este proyecto en React para aprender sobre hooks y crear una interfaz dinámica",
      technologies: "HTML | SCSS | JavaScript",
      link: "https://contador-blush-kappa.vercel.app/",
      github: "https://github.com/leofiorotto/contador",
    },
    {
      id: 8,
      title: "Desafio Frontend Mentor",
      img: IMG7,
      description:
      "Los desafíos de Frontend Mentor lo ayudan a mejorar las habilidades mediante la creación de proyectos realistas.",
      technologies: "HTML | SCSS | JavaScript",
      link: "https://leofiorotto.github.io/Frontend-Mentor1/",
      github: "https://github.com/leofiorotto/Frontend-Mentor1",
    },
    {
      id: 9,
      title: "Marketplace",
      img: IMG8,
      description:
        "Marketplace para curso de JS en Coderhouse",
      technologies: "HTML | SCSS | JavaScript",
      link: "https://leofiorotto.github.io/Entrega3-JS-Fiorotto/",
      github: "https://github.com/leofiorotto/Entrega3-JS-Fiorotto",
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
              <img src={pro.img} alt={pro.title} />
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