import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import Detail from "./Pages/Detail/Detail.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import Favs from "./Pages/Favs.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import { routes } from "./utils/routes.js";
import ErrorPageNotFound from "./Pages/Error_404/Error_404.jsx";

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
