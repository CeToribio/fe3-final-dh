//import React from "react";
//import Card from "../Components/Card";

import Card from "../Components/Card/Card";
import { useContextGlobal } from "../Context/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { favs } = useContextGlobal();

  return (
    <>
      <h1>Tus dentistas favoritos</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favs.length === 0 ? (
          <h4>Todavía no tienes dentistas favoritos</h4>
        ) : (
          favs.map((dentist) => <Card key={dentist.id} {...dentist} />)
        )}
      </div>
    </>
  );
};

export default Favs;
