import axios from "axios";
import localStorageService from "./localStorage.service";

const httpAuth = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com/v1/",
  params: {
    key: "AIzaSyCWyGreJnQoWfuZqrzykM7b3d1sqD_6xs8"
  }
});

const authService = {
  register: async ({ email, password }) => {
    const { data } = await httpAuth.post(`accounts:signUp`, {
      email,
      password,
      returnSecureToken: true
    });

    return data;
  },
  join: async ({ email, password }) => {
    const { data } = await httpAuth.post(`accounts:signInWithPassword`, {
      email,
      password,
      returnSecureToken: true
    });
    return data;
  },
  refresh: async () => {
    const { data } = await httpAuth.post("token", {
      grant_type: "refresh_token",
      refresh_token: localStorageService.getRefreshKey()
    });
    return data;
  }
};

export default authService;
