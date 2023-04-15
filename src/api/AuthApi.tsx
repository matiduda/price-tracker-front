import { api } from "./axios/Api";
import { login, signup } from "../utils/endpoints";
import { ReactNode, createContext, useState } from "react";

export type LoginResponse = {
  access_token: string;
  token_type: string;
};

export type SignupResponse = {
  email: string;
  id: number;
  is_active: boolean;
  role: string;
  username: string;
};

type AuthInfo = {
  authenticated: boolean;
  setAuthenticated: (value: boolean) => void;
};

type Props = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthInfo>(null as unknown as AuthInfo);

export const AuthContextProvider = ({ children }: Props) => {
  const [authenticated, setAuthenticated] = useState(false);
  return (
    <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const AuthApi = {
  login: async (username: string, password: string) => {
    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    const response = await api.post(login, formData);
    return response.data;
  },

  signup: async (username: string, email: string, password: string) => {
    const response = await api.post(signup, {
      username: username,
      email: email,
      password: password,
    });
    return response.data;
  },
};
