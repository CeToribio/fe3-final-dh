import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Contact from "./pages/Contact";
import Favs from "./pages/Favs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { routes } from "./utils/routes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.dentist} element={<Detail />} />
        <Route path={routes.contact} element={<Contact />} />
        <Route path={routes.favs} element={<Favs />} />
        <Route path={routes.notFound} element={<h2>Error 404 - Page not found</h2>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
