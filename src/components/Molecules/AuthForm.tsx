import React, { useState } from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import CheckBox from "../atoms/CheckBox";
import { Link } from "react-router-dom";

interface AuthFormProps {
  formType: "login" | "register";
}

const AuthForm: React.FC<AuthFormProps> = ({ formType }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  // Setting up some default values for the form based on formType
  const label =
    formType === "login" ? "Remember Me" : "I agree to privacy policy & terms";

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Perform form submission logic here based on the formType (login or register)
    if (formType === "login") {
      // Handle login form submission
      console.log("Logging in...");
    } else if (formType === "register") {
      // Handle register form submission
      console.log("Registering...");
    }
  };

  return (
    <div className="flex flex-col space-y-2 min-w-[250px] max-w-[300px] w-full">
      <h1 className="text-xl xs:text-2xl text-secondary font-bold ">
        Welcome to PolliFy! 👋🏻
      </h1>

      <p className="text-xs xs:text-sm text-secondary ">
        Please {formType === "login" ? "sign in" : "sign up"} to your account
        and start the adventure
      </p>

      <form
        className="flex flex-col pt-4 space-y-4 justify-center"
        onSubmit={handleSubmit}
      >
        {formType === "register" && (
          <Input
            placeholder="email"
            variant="primary"
            value={email}
            onChange={handleEmailChange}
          />
        )}

        <Input
          placeholder="Username"
          variant="primary"
          value={username}
          onChange={handleUsernameChange}
        />
        <Input
          placeholder="Password"
          variant="primary"
          value={password}
          onChange={handlePasswordChange}
        />
        <div className={` pl-2`}>
          <CheckBox
            label={label}
            checked={checkbox}
            onChange={() => setCheckbox(!checkbox)}
          />
        </div>
        <Button variant="login">
          <span className="text-sm ">
            {formType === "login" ? "LOGIN" : "SIGN UP"}
          </span>
        </Button>
      </form>

      <div className="flex flex-row items-center justify-center space-x-2 pt-2">
        <p className="text-secondary text-xs xs:text-sm">
          {formType === "login"
            ? "New to our platform?"
            : "Already have an account?"}
        </p>
        <Link
          to={formType === "login" ? "/register" : "/login"}
          className="text-main text-xs xs:text-sm font-bold hover:text-opacity-80 hover:underline hover:delay-100"
        >
          {formType === "login" ? "Create an account" : "Sign In Instead"}
        </Link>
      </div>
    </div>
  );
};

export default AuthForm;
