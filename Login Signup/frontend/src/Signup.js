import React, { useState } from 'react';
import PasswordSuggestions from './PasswordSuggestions';
import'./Signup.css';
import { Link } from "react-router-dom";

function Signup() {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  const rules = {
    length: password.length >= 8 && password.length <= 16,
    upper: /[A-Z]/.test(password),
    lower: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[!@#$%^&*]/.test(password),
  };

  const passedRules = Object.values(rules).filter(Boolean).length;
  const strength = passedRules <= 2 ? "Weak" : passedRules <= 4 ? "Medium" : "Strong";
  const allValid = Object.values(rules).every(Boolean);

  return (
    <div className="signupContainer">
      <form className="signupForm montserratFont">
        <h2>Sign Up</h2>
        <input className="textField" type="text" placeholder="User Name" />
        <input className="textField" type="email" placeholder="Email" />
        <input
          className="textField" type="password" placeholder="Enter password" value={password}
          onChange={(e) => setPassword(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        />

        {showSuggestions && (
          <PasswordSuggestions rules={rules} strength={strength} passedRules={passedRules} />
        )}

        {allValid && (
         <input className="textField" type="password" placeholder="Confirm password" value={confirmPassword}
           onChange={(e) => setConfirmPassword(e.target.value)}
         />
        )}

        {allValid && confirmPassword && confirmPassword !== password && (
          <p className="errorMessage">Passwords do not match</p>
        )}
        <button className="signupButton" type="submit">Sign Up</button>
      </form>
      <p className="SigninLink montserratFont"> 
       Already have an account? <Link to="/signin">Sign In</Link>
      </p>
    </div>
  );
}

export default Signup;