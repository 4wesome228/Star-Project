import React from "react";
export default function Record({ itemDetails, field, label }) {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{itemDetails[field]}</span>
    </li>
  );
}
