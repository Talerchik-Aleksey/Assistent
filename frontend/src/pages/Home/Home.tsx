import React from "react";
import { Assistent } from "../../components";
import styles from "./Home.module.sass";

export default function Home() {
  return (
    <div className={styles.Home}>
      <h2>Привет! Хочешь узнать свою профессию?</h2>
      <Assistent />
    </div>
  );
}
