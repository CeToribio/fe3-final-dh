// import React from 'react'
import axios from "axios";
import Card from "../../Components/Card/Card";
import "./home.css";
import { useState, useEffect } from "react";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [dentists, setDentists] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    const axiosData = async () => {
      try {
        const response = await axios.get(url);
        console.log(response.data);
        setDentists(response.data);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      } catch (error) {
        console.error(error);
      }
    };
    axiosData();
  }, []);

  return (
    <main className="div-home">
      <h2>Dentistas</h2>
      <p>Encuentra a nuestros dentistas</p>
      <div className="card-grid">
        {/* Aqui deberias renderizar las cards */}
        {loading ? <h3>Cargando...</h3> : dentists.map((dentist) => (
          <Card key={dentist.id} {...dentist} />
        ))}
      </div>
    </main>
  );
};

export default Home;
