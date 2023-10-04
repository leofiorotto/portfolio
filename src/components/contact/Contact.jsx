import './contact.css';

import React, { useRef, useState } from 'react';

import { MdOutlineEmail } from 'react-icons/md';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [message, setMessage] = useState(false);
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs
      .sendForm(
        'service_jl8lk0h',
        'template_c6rkpn6',
        formRef.current,
        'X7K7ebhIeOy3YwHki'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>
        Puedes contactarme, responderé rapido.
      </h5>
      <h2>Contacto</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>leo.fiorotto@hotmail.com</h5>
            <a href="mailto:leo.fiorotto@hotmail.com"> Aqui puedes enviarme un mensaje</a>
          </article>
        </div>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre"
            name="user_name"
            required
          />
          <input
            type="text"
            placeholder="Tu Email"
            name="user_email"
            required
          />
          <textarea
            placeholder="Tu mensaje"
            rows="7"
            name="message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
          {message && <span>Gracias</span>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
