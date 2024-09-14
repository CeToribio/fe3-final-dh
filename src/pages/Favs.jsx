//import React from "react";
//import Card from "../Components/Card";

import Card from "../Components/Card/Card";
import { useContextGlobal } from "../Context/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { favs, theme } = useContextGlobal();

  return (
    <div className={`div-contact-${theme}`}>
      <h2 style={{ color: theme === "light" ? "#000000" : "#ffffff" }}>Tus dentistas favoritos</h2>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favs.length === 0 ? (
          <h4>Todavía no tienes dentistas favoritos</h4>
        ) : (
          favs.map((dentist) => <Card key={dentist.id} {...dentist} />)
        )}
      </div>
    </div>
  );
};

export default Favs;
