import { clientApi } from "./api.service";

export const registerUser = async (userData: any) => {
  try {
    const response = await clientApi.post("/users", userData);
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};

export const loginUser = async (userData: { email: any; password: any; }) => {
  try {
    const response = await clientApi.get("/users", {
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
