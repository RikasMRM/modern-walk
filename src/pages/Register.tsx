import React, { useState } from "react";
import Button from "../components/atoms/Button";
import FormField from "../components/atoms/FormField";
import { UsersAPI } from "../services/index";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const userData = { email, password };
      const newUser = await UsersAPI.registerUser(userData);
      console.log("Registered new user:", newUser);
      window.location.href = "/login";
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div>
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <FormField
            label="Email:"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <FormField
            label="Password:"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <Button
            type="submit"
            className="bg-blue-500 text-white rounded-md px-4 py-2 mb-2"
          >
            Register
          </Button>
          <br />
          <p>
            Already have an account? <a href="/">Login here</a>.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
