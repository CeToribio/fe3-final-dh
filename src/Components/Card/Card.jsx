//import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ name, username, id }) => {
  const navigate = useNavigate();

  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
  };

  return (
    <div
      onClick={() => {
        navigate("/dentist/" + id);
      }}
      className="div-card"
    >
      {/* En cada card deberan mostrar en name - username y el id */}
      <h3>{name}</h3>
      <p>{username}</p>
      <p>{id}</p>

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={addFav} className="favButton">
        Add fav
      </button>
    </div>
  );
};

export default Card;
