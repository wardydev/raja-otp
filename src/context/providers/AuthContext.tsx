import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

type AuthContextType = {
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const login = (token: string) => {
    if (token) {
      localStorage.setItem("token", token);
      setIsAuthenticated(true);
    }
  };

  const logout = async () => {
    try {
      const token = localStorage.getItem("token");

      if (token) {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", token);

        const res = await fetch(
          import.meta.env.VITE_API_URL + "api/auth/logout",
          {
            method: "GET",
            headers: myHeaders,
            redirect: "follow",
          }
        );
        const resJson = await res.json();
        if (resJson) {
          toast.success("Logout berhasil");
          localStorage.removeItem("token");
          setIsAuthenticated(false);
        }
      }
    } catch (err) {
      toast.error("Terjadi kesalahan!");
    }
  };

  return (
    <AuthContext.Provider value={{ login, isAuthenticated, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
