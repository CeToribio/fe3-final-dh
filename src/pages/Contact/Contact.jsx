//import React from 'react'
import Form from "../../Components/Form/Form";
import { useContextGlobal } from "../../Context/global.context";
import "./contact.css";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const { theme } = useContextGlobal();
  return (
    <div className={`div-contact-${theme}`}>
      <h2 className={`div-contact-p-${theme}`}>¿Quieres saber más?</h2>
      <p className={`div-contact-p-${theme}`}>Envíanos tus consultas y nos pondremos en contacto contigo</p>
      <Form />
    </div>
  );
};

export default Contact;
