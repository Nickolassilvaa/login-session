import { useEffect, useState } from "react";
import { User } from "../../@types/User";
import { useApi } from "../../hooks/useApi";
import { AuthContext } from "./AuthContext";

export function AuthProvider({ children }: { children: JSX.Element }) {
  const [user, setUser] = useState<User | null>(null);
  const api = useApi();

  const validateToken = async () => {
    const storageData = localStorage.getItem("authToken");
    if (storageData) {
      const data = await api.validateToken(storageData);
      if (data.user) {
        setUser(data.user);
      }
    }
  };

  useEffect(() => {
    validateToken();
  }, []);

  const singin = async (email: string, password: string) => {
    const data = await api.singin(email, password);
    if (data.user && data.token) {
      setUser(data.user);
      setToken(data.token);
      return true;
    }
    return false;
  };

  const singout = async () => {
    await api.logout();
    setUser(null);
    setToken("");
  };

  const setToken = (token: string) => {
    localStorage.setItem("authToken", token);
  };

  return (
    <AuthContext.Provider value={{ user, singin, singout }}>
      {children}
    </AuthContext.Provider>
  );
}
