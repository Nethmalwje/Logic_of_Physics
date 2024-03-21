import { useContext } from "react";
import AuthContext from "../components/context/AuthProvider";

const useAuth = () => {
  return useContext(AuthContext); //middleware beacuse we dont need to implement this everywhere
};

export default useAuth;
