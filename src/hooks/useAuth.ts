import { useContext } from "react";
import { AuthContext } from "../context/providers/AuthContext";

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("Error!");
  }
  return context;
};
