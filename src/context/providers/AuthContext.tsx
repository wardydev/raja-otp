import React, { createContext, useState } from "react";

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

type AuthContextType = {
  isAuthenticated: boolean;
  login: (token: string) => void;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const login = (token: string) => {
    if (token) {
      localStorage.setItem("token", token);
      setIsAuthenticated(true);
    }
  };

  return (
    <AuthContext.Provider value={{ login, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
