import "./form.css";
import { useState } from "react";
import Swal from "sweetalert2";

const Form = () => {
  const [contactUser, SetContactUSer] = useState({
    name: "",
    email: "",
    message: "",
  });

  // const [error, setError] = useState(false);
  // const [success, setSuccess] = useState(false);

  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  const handleName = (e) => {
    SetContactUSer({ ...contactUser, name: e.target.value });
  };

  const handleEmail = (e) => {
    SetContactUSer({ ...contactUser, email: e.target.value });
  };

  const handleMessage = (e) => {
    SetContactUSer({ ...contactUser, message: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contactUser);
    if (contactUser.name.trim().length < 5) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Tu usuario debe tener al menos 5 caracteres",
        showConfirmButton: false,
        timer: 2500,
      });
    } else if (!regexEmail.test(contactUser.email)) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Email invalido",
        showConfirmButton: false,
        timer: 2500,
      });
    } else {
      const successMessage = `Gracias ${contactUser.name}, te contactaremos por email.`;
      Swal.fire({
        position: "center",
        icon: "success",
        title: successMessage,
        showConfirmButton: false,
        timer: 2500,
      });
    }
    SetContactUSer({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="div-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Usuario</label>
        <input
          type="text"
          name="name"
          value={contactUser.name}
          onChange={handleName}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={contactUser.email}
          onChange={handleEmail}
          required
        />
        <label htmlFor="message">Mensaje</label>
        <textarea
          name="message"
          placeholder="Opcional"
          value={contactUser.message}
          onChange={handleMessage}
        ></textarea>
        <button type="submit" className="btn-form">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Form;
