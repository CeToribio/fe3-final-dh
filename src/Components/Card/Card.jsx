//import React from "react";
import { useNavigate } from "react-router-dom";
import imgDentist from "../../../public/images/doctor.jpg";
import "./card.css";
import imgHeart from "../../../public/images/heart.svg";
import { useContextGlobal } from "../../Context/global.context";

const Card = ({ name, username, id }) => {
  const navigate = useNavigate();
  const {setFavs} = useContextGlobal();

  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    setFavs((prevFavs) => [...prevFavs, { name, username, id }]);
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
      <button onClick={addFav} className="favButton">
        Añadir a favoritos <img src={imgHeart} alt="" />
      </button>
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
    </div>
  );
};

export default Card;
