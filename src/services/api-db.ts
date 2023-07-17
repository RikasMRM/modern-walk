import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const registerUser = async (userData: any) => {
  try {
    const response = await api.post("/users", userData);
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};

export const loginUser = async (userData: { email: any; password: any; }) => {
  try {
    const response = await api.get("/users", {
      params: {
        email: userData.email,
        password: userData.password,
      },
    });
    return response.data[0];
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};
