import React, { useState } from "react";
import "./Signup.css"; //
import { Link } from "react-router-dom";
function Login() {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const SubmitButton = (e) => {
    e.preventDefault();
    console.log("Login attempt:", { usernameOrEmail, password });
  };

  return (
    <div className="signupContainer">
      <form className="signupForm montserratFont" onSubmit={SubmitButton}>
        <h2>Login</h2>

        <input className="textField" type="text" placeholder="Username or Email" value={usernameOrEmail}
          onChange={(e) => setUsernameOrEmail(e.target.value)}
        />
        <input className="textField" type={showPassword ? "text" : "password"} placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
            
            {password && (
            <button className="toggleButton" type="button"
                onClick={() => setShowPassword(!showPassword)}
            >
                {showPassword ? "Hide Password" : "Show Password"}
            </button>
            )}

        <button className="signupButton" type="submit"> Login </button>
      </form>

      <p className="SigninLink montserratFont">
        Don't have an account? <Link to="/">Sign Up</Link>
      </p>
    </div>
  );
}

export default Login;
