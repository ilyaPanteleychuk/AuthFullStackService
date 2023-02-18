import { $api } from "../http";

export const AuthService = {
  login: (username, password) => {
    return $api.post("/auth/login", { username, password });
  },

  register: (username, password) => {
    return $api.post("/auth/register", { username, password });
  },

  refresh: () => {
    const config = {
      headers: {
        Authorization: "Bearer_" + localStorage.getItem("refreshToken"),
      },
    };
    return $api.get("/auth/refresh", config);
  },

  isTokenExpired: (token) => {
    return $api.post("/auth/isTokenExpired", { token });
  },

  getProducts: () => {
    const config = {
      headers: {
        Authorization: "Bearer_" + localStorage.getItem("token"),
      },
    };
    return $api.get("/product/list", config);
  },

  addNewProduct: (title, manufacturer, categoryTitle) => {
    const config = {
      headers: {
        Authorization: "Bearer_" + localStorage.getItem("token"),
      },
    };
    return $api.post("/product/add", { title, manufacturer, categoryTitle }, config);
  },

  deleteProduct: (id) => {
    const config = {
      headers: {
        Authorization: "Bearer_" + localStorage.getItem("token"),
      },
    };
    return $api.delete("/product/delete/" + id, config);
  },

  updateProduct: (title, manufacturer, categoryTitle, id) => {
    const config = {
      headers: {
        Authorization: "Bearer_" + localStorage.getItem("token"),
      },
    };
    return $api.put("/product/update/" + id, { title, manufacturer, categoryTitle }, config);
  },
};
