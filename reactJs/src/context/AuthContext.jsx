import { createContext, useEffect, useState } from "react";
import ApiSetup from "../services/ApiSetup";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  const logout = () => localStorage.removeItem("@user");

  const signIn = async (email, password) => {
    
    try {
      const api = ApiSetup();
      const response = await api.post("/authentication", {
        email: email,
        password: password,
      });

      console.log(response.data);

      localStorage.setItem(
        "@user",
        JSON.stringify({
          token: response.data.token,
          id: response.data.userId,
          logado: true,
        })
      );
      setLoading(false);
      return response.data;
      } catch (error) {
        console.log(error);
        setLoading(false);
        return {error: true};
    }
  };

  useEffect(() => {
    const verifyToken = async () => {
      const user = JSON.parse(localStorage.getItem("@user"));

      if (!user) {
        setLoading(false);
        return;
      }
      if (user.token) {
        try {
          const api = ApiSetup();
          await api.get("/user/" + user.id);
        } catch (error) {
          logout();
          console.log(error);
          console.log("entrou no catch");
        }
      }

      setLoading(false);
    };

    verifyToken();
  }, []);

  return (
    <AuthContext.Provider
      value={{loading, logout, signIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};
