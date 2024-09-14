import Card from "../../Components/Card/Card";
import "./home.css";
import { useContextGlobal } from "../../Context/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { dentists, theme } = useContextGlobal();


  return (
    <main className={`div-home-${theme}`}>
      <h2>Dentistas</h2>
      <p className={`div-home-p-${theme}`}>Encuentra a nuestros dentistas</p>
      <div className="card-grid">
        {/* Aqui deberias renderizar las cards */}
        {dentists.length == 0 ? (
          <h4>Cargando</h4>
        ) : (
          dentists.map((dentist) => <Card key={dentist.id} {...dentist} />)
        )}
       
      </div>
    </main>
  );
};

export default Home;
