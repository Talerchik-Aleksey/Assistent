import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProfessionCategoriesInfo } from "./Categories";
import styles from "./Professions.module.sass";

export default function Professions() {
  const params = useParams();
  const category = params.category || "nature";
  const [professions, setProfessions] = useState([]);

  async function loadProfessions() {
    axios
      .post(`/professions/${category}`)
      .then((response) => {
        const responseData = response.data;

        setProfessions(responseData);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    loadProfessions();
  }, [category]);

  return (
    <div className={styles.professionPage}>
      <div className={styles.headerSection}>
        <div>
          <img src={`../${category}.svg`} alt="Categori Poster" />
        </div>
        <div>
          <h1>{ProfessionCategoriesInfo[category].headding}</h1>
          <p>{ProfessionCategoriesInfo[category].describe}</p>
        </div>
      </div>
      <h2>Подходящие профессии</h2>
      <table>
        <thead>
          <tr>
            <th>Название</th>
            <th>Куда можно поступить</th>
          </tr>
        </thead>
        <tbody>
          {professions.map((profession) => (
            <tr key={profession.profession_name}>
              <td>{profession.profession_name}</td>
              <td>{profession.learningIn.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
