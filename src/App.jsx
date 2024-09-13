import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Detail from "./pages/Detail/Detail.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Favs from "./pages/Favs.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import { routes } from "./utils/routes.js";
import ErrorPageNotFound from "./pages/Error_404/Error_404.jsx";

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
