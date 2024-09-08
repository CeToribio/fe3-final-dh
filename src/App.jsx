import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Detail from "./Pages/Detail";
import Contact from "./Pages/Contact/Contact";
import Favs from "./Pages/Favs";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { routes } from "./utils/routes";
import ErrorPageNotFound from "./Pages/Error_404/Error_404";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.dentist} element={<Detail />} />
        <Route path={routes.contact} element={<Contact />} />
        <Route path={routes.favs} element={<Favs />} />
        <Route path={routes.notFound} element={<ErrorPageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
