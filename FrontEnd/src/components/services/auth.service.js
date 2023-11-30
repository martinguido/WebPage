import axios from "axios";
import apiUrl from "../deploy";

const API_URL = apiUrl + "/api/v1/auth";

const login = (email, password) => {
  return axios
    .post(API_URL + "/authenticate", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.access_token && response.data.role === "ADMIN") {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  login,
  logout,
};

export default authService;
