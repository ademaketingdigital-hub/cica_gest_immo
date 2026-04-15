import React, { createContext, useContext, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export type UserRole =
  | "gestionnaire_vente"
  | "gestionnaire_location"
  | "tresorer"
  | "proprietaire"
  | "locataire"
  | "client_parcelle"
  | "superviseur"
  | "gerant"
  | "commercial"
  | "administrateur"
  | "super_admin";

export interface User {
  id: string;
  nom: string;
  email: string;
  telephone: string;
  role: UserRole;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (user: User, token: string) => void;
  logout: () => void;
  token: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const ROLE_REDIRECTS: Record<UserRole, string> = {
  gestionnaire_vente: "/vente/dashboard",
  gestionnaire_location: "/location/dashboard",
  tresorer: "/caisse/dashboard",
  proprietaire: "/proprietaire/dashboard",
  locataire: "/locataire/dashboard",
  client_parcelle: "/client-parcelle/dashboard",
  superviseur: "/superviseur/dashboard",
  gerant: "/gerant/dashboard",
  commercial: "/commercial/dashboard",
  administrateur: "/administrateur/dashboard",
  super_admin: "/super-admin/dashboard",
};

export const redirectAfterLogin = (role: UserRole): string => {
  return ROLE_REDIRECTS[role] || "/";
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const stored = localStorage.getItem("cica_user");
    return stored ? JSON.parse(stored) : null;
  });
  const [token, setToken] = useState<string | null>(() => localStorage.getItem("cica_token"));

  const login = useCallback((user: User, token: string) => {
    setUser(user);
    setToken(token);
    localStorage.setItem("cica_user", JSON.stringify(user));
    localStorage.setItem("cica_token", token);
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("cica_user");
    localStorage.removeItem("cica_token");
  }, []);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth doit être utilisé dans un AuthProvider");
  return context;
};
