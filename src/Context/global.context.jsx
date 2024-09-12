import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

//export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  //localsotrage para traer los favoritos
  const favsStorage = JSON.parse(localStorage.getItem("favs")) || [];
  //estados globales
  const [theme, setTheme] = useState("light");
  const [favs, setFavs] = useState([ ...favsStorage]);
  
  const [dentists, setDentists] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    const axiosData = async () => {
      try {
        const response = await axios.get(url);
        console.log(response.data);
        setDentists(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    axiosData();
  }, []);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(favs));
  }, [favs]);

  // const toggleTheme = useCallback(() => {
  //   setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  // }, []);

  return (
    <ContextGlobal.Provider
      value={{ theme, setTheme, favs, setFavs, dentists }}
    >
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useContextGlobal = () => useContext(ContextGlobal);
