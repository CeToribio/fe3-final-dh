//import React from 'react'

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const params = useParams();
  const [dentist, setDentist] = useState({});
  const [loading, setLoading] = useState(true);
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`;

  useEffect(() => {
    const axiosDetail = async () => {
      try {
        const response = await axios.get(url);
        console.log(response.data);
        setDentist(response.data);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      } catch (error) {
        console.error(error);
      }
    };
    axiosDetail();
  });

  return (
    <>
      <div>
        {loading ? (
          <h3>Cargando...</h3>
        ) : (
          <div>
            <h1>Detail Dentist id </h1>
            {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
            {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
            <h2>{dentist.name}</h2>
            <p>{dentist.email}</p>
            <p>{dentist.phone}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Detail;
