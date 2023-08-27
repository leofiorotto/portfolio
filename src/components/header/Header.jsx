import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Bienvenido, mi nombre es</h5>
        <h1>Leandro Fiorotto</h1>
        <h5 className="text-light">Front-end Developer</h5>
        <CTA />
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
