import axios from "axios";

const api = axios.create({
  baseURL: "https://api.google.com",
});

export const useApi = () => ({
  validateToken: async (token: string) => {
    return {
      user: {
        id: 1,
        name: "Nickolas",
        email: "nickolas@gmail.com",
      },
    };
    const response = await api.post("/validate", { token });
    return response.data;
  },

  singin: async (email: string, password: string) => {
    return {
      user: {
        id: 1,
        name: "Nickolas",
        email: "nickolas@gmail.com",
      },
      token: "d61350f5e5048ce2a771db72a6cd5d0232519773",
    };
    const response = await api.post("/singin", { email, password });
    return response.data;
  },

  logout: async () => {
    return { status: true };
    const response = await api.post("/logout");
    return response.data;
  },
});
