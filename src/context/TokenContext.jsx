import { useContext, createContext, useEffect, useState } from "react";

const TokenContext = createContext();

export const useToken = () => useContext(TokenContext);

const initialToken = () => sessionStorage.getItem("token") || null;

export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState(initialToken);
  useEffect(() => {
    const savedToken = sessionStorage.getItem("token");
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  return (
    <TokenContext.Provider value={{ token }}>{children}</TokenContext.Provider>
  );
};
