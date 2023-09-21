import React from "react";
import { AuthProvider } from "./providers/AuthContext";

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default ContextProvider;
