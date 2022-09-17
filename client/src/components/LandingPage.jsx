import React from "react";
import { Link } from "react-router-dom";
import pika from "../images/4tym.gif";

export function LandingPage() {
  return (
    <div>
      <img src={pika} alt="loading..." />
      <Link to="/home">
        <button>ENTER</button>
      </Link>
    </div>
  );
}
