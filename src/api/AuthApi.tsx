import { api } from "./axios/Api";
import { login, signup } from "../utils/endpoints";

export type AuthResponse = {
  access_token: string;
  token_type: string;
};

export const AuthApi = {
  login: async (email: string, password: string) => {
    const formData = new FormData();
    formData.append("username", email);
    formData.append("password", password);
    const response = await api.post(login, formData);
    return response.data;
  },

  signup: async (
    name: string,
    surname: string,
    email: string,
    password: string
  ) => {
    // NOT WORKING YET, WE HAVE TO ASK WHAT TYPE OF DATA SHOULD BE SENT
    const response = await api.post(signup, {
      name: name,
      surname: surname,
      email: email,
      password: password,
    });
    return response.data;
  },
};
