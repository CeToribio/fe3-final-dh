import img404 from "../../../public/images/error-404.png";
import { useNavigate } from "react-router-dom";
import { routes } from "../../utils/routes";
import "./error_404.css";

const ErrorPageNotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="div-error-404">
        <img src={img404} alt="image-page-not-found" />
        <h3 >Página no encontrada</h3>
        <button
          onClick={() => navigate(routes.home)}
          className="btn-error-to-home"
        >
          Ir a Home
        </button>
      </div>
    </>
  );
};

export default ErrorPageNotFound;
