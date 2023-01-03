import React from "react";
import { Link } from "react-router-dom";
import { Assistent } from "../../components";
import styles from "./Home.module.sass";

export default function Home() {
  return (
    <div className={styles.Home}>
      <h2>Привет! Хочешь узнать свою профессию?</h2>
      <div>
        <Link to="/game" className={styles.playButton}>
          ОПРЕДЕЛИ ПРОФЕССИЮ
        </Link>
      </div>
      <Assistent />
    </div>
  );
}
