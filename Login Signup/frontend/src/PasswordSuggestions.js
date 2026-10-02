import React from 'react';
import './PasswordSuggestions.css';

function PasswordSuggestions({ rules, strength, passedRules }) {
  const totalRules = 5;
  const progressPercent = (passedRules / totalRules) * 100;
  return (
    <div className="passwordSuggestion">
      <p className="passCheck">Password Requirements</p>
      <div>
        <div className={rules.length ? "valid" : "invalid"}>
          <p className="passRule">Length is between 8 to 16 characters</p>
        </div>
        <div className={rules.upper ? "valid" : "invalid"}>
          <p className="passRule">Minimum 1 uppercase letter (A-Z)</p>
        </div>
        <div className={rules.lower ? "valid" : "invalid"}>
          <p className="passRule">Minimum 1 lowercase letter (a-z)</p>
        </div>
        <div className={rules.number ? "valid" : "invalid"}>
          <p className="passRule">Minimum 1 numeric character (0-9)</p>
        </div>
        <div className={rules.special ? "valid" : "invalid"}>
          <p className="passRule">Minimum 1 special character (!@#$%^&*)</p>
        </div>

        <div className={strength === "Strong" ? "strong" : strength === "Medium" ? "medium" : "weak"}>
          <p id="passwordStrength" className="passRule">{strength} Password</p>
        </div>

        <div className="progressBar">
        <div className={`progressFill ${strength.toLowerCase()}`} style={{ width: `${progressPercent}%` }}></div>
        </div>

      </div>
    </div>
  );
}

export default PasswordSuggestions;