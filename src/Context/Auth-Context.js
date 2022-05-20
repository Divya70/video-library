import { useContext, createContext, useReducer } from "react";
import { authReduce } from "../Reducer/Auth-Reducer";

const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReduce, {
    token: localStorage.getItem("token") || "",
    user: JSON.parse(localStorage.getItem("user")) || "",
  });
  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
const useAuth = () => useContext(AuthContext);
export { AuthProvider, useAuth };
