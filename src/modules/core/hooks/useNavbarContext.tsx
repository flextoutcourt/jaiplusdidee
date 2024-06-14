import { useContext } from "react";
import NavbarContext from "../context/NavbarContext";

const useNavbarContext = () => useContext(NavbarContext);

export default useNavbarContext;