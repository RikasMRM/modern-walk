import React, { useState } from "react";
import Button from "../components/atoms/Button";
import FormField from "../components/atoms/FormField";
import { UsersAPI } from "../services/index";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutate, isLoading, isError } = UsersAPI.useLoginUser();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const userData = { email, password };
      await mutate(userData);
      console.log("Login successful!");
      window.location.href = "/home";
    } catch (error) {
      console.error("Login failed:", error);
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
        <h2 className="text-2xl font-bold mb-4">Login</h2>
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
          <Button
            type="submit"
            className="bg-blue-500 text-white rounded-md px-4 py-2 mb-2"
            disabled={isLoading}
          >
            {isLoading ? "Logging In..." : "Login"}
          </Button>
          {isError && <p>Error logging in</p>}
          <br />
          <p>
            Don't have an account? <a href="/register">Register here</a>.
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
