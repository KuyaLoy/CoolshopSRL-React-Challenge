import React from "react";

import "./Row.scss";

const Row = ({ sign, value, disabled, onChange, onDelete, onToggle }) => {
  return (
    <li>
      <div className="sign-buttons">
        <button
          onClick={() => onChange("sign", "+")}
          className={`${sign === "+" ? "active" : ""}`}
          disabled={disabled}
        >
          +
        </button>
        <button
          onClick={() => onChange("sign", "-")}
          className={`${sign === "-" ? "active" : ""}`}
          disabled={disabled}
        >
          -
        </button>
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange("value", e.target.value)}
        disabled={disabled}
      />
      <button className="DeleteButton" onClick={onDelete} disabled={disabled}>
        Delete
      </button>
      <button
        className={`DisableButton ${disabled ? "Enable" : "Disable"}`}
        onClick={onToggle}
      >
        {disabled ? "Enable" : "Disable"}
      </button>
    </li>
  );
};

export default Row;
