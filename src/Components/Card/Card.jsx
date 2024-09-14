//import React from "react";
import { useNavigate } from "react-router-dom";
import imgDentist from "../../../public/images/doctor.jpg";
import "./card.css";
import imgHeart from "../../../public/images/heart.svg";
import { useContextGlobal } from "../../Context/global.context";

const Card = ({ name, username, id }) => {
  const navigate = useNavigate();
  const { favs, setFavs, isFavorite } = useContextGlobal();

  const addOrRemoveFav = () => {
    const existingFavIndex = favs.findIndex((dentist) => dentist.id === id);

    if (existingFavIndex !== -1) {
      //delete
      setFavs((prevFavs) => prevFavs.filter((dentist) => dentist.id !== id));
    } else {
      //add
      setFavs((prevFavs) => [...prevFavs, { name, username, id }]);
    }
  };

  return (
    <div className="div-card">
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      {/* En cada card deberan mostrar en name - username y el id */}
      <img src={imgDentist} alt="imagen dentista" className="img-dentist" />
      <h4
        onClick={() => {
          navigate("/dentist/" + id);
        }}
      >
        {name}
      </h4>
      <p>{username}</p>
      <button onClick={addOrRemoveFav} className="favButton">
        {isFavorite(id) ? "Quitar de favoritos" : "Añadir a favoritos"}
        {!isFavorite(id) && (
          <img src={imgHeart} alt="Ícono corazón" className="heart-icon" />
        )}
      </button>
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
    </div>
  );
};

export default Card;
