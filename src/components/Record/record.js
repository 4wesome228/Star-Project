import React from "react";
import "./record.css";
export default function Record({ itemDetails, field, label }) {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{itemDetails[field]}</span>
    </li>
  );
}
