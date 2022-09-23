import React from "react";
import { Link } from "react-router-dom";
import pika from "../images/4tym.gif";

import s from "./LandingPage.module.css";

export function LandingPage() {
  return (
    <div className={s.landing} id={s.imgfondo}>
      <img src={pika} alt="loading..." id={s.img} />

      <div id={s.enter}>
        <Link to="/home">
          <button id={s.button}>ENTER</button>
        </Link>
      </div>
    </div>
  );
}
