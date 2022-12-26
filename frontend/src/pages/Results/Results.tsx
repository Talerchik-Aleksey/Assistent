import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../app/store";
import { CalculateAnswerStatistics } from "../../utilities/CalculateAnswerStatistics";
import { categories } from "./Categories";
import styles from "./Results.module.sass";

export default function Results() {
  type Stats = {
    [key: string]: number;
  };

  const scoredAnswers = useSelector(
    (state: RootState) => state.test.scoredAnswers
  );

  const [stats, setStats] = useState<Stats>({
    humanNatureScore: 0,
    manTechnologyScore: 0,
    manManScore: 0,
    manArtisticImageScore: 0,
    manSignScore: 0,
  });

  useEffect(() => {
    setStats(CalculateAnswerStatistics(scoredAnswers));
  }, []);

  const maxValue = Math.max(...Object.values(stats));

  const maxResults = Object.keys(stats).filter(
    (scoreName: string) => stats[scoreName] === maxValue
  );

  interface Category {
    [key: string]: string;
  }

  const category: Category = {
    humanNatureScore: "nature",
    manTechnologyScore: "technology",
    manManScore: "human",
    manArtisticImageScore: "artistic",
    manSignScore: "sign",
  };

  return (
    <div className={styles.results}>
      <h2>Результаты</h2>
      <div>
        {maxResults.map((scoreName: string) => (
          <div key={scoreName} className={styles.resultBlock}>
            <h3>{categories[scoreName].heading}</h3>
            <p>{categories[scoreName].description}</p>
            <img
              src={`${category[scoreName]}.svg`}
              alt={`Tematic Ilustretion for ${scoreName}`}
            />
            <Link to={`/prof/${category[scoreName]}`}>Список професcий</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
