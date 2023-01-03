import professions from "./profession";
import styles from "./Game.module.sass";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  clearAnswers,
  setAnswer,
  setBadAnswers,
  setCards,
} from "../../features/game/gameSlice";
import { RootState } from "../../app/store";
import { getRandomElements } from "../../utilities/GetRandomElements";

export default function Game() {
  const dispatch = useDispatch();
  const cards = useSelector((state: RootState) => state.game.cards);
  const columns = useSelector((state: RootState) => state.game.columns);
  const badId = useSelector((state: RootState) => state.game.badAnswers);

  useEffect(() => {
    dispatch(setCards(professions));
  }, []);

  const handleAnswerClick = (category: number) => {
    if (cards[0].category !== category) {
      dispatch(setBadAnswers(category));
      return;
    }

    dispatch(
      setAnswer({
        category: category - 1,
        profession_name: cards[0].profession_name,
      })
    );
    dispatch(setCards(cards.slice(1, cards.length)));
    dispatch(clearAnswers());
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>
              <p>1</p>
              <p>Человек - Человек</p>
            </th>
            <th>
              <p>2</p>
              <p>Человек - Природа</p>
            </th>
            <th>
              <p>3</p>
              <p>Человек - Техника</p>
            </th>
            <th>
              <p>4</p>
              <p>Человек - Художественный образ</p>
            </th>
            <th>
              <p>5</p>
              <p>Человек - знаковая система</p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {columns.map((column, index) => (
              <td key={index}>{column.join(", ")}</td>
            ))}
          </tr>
        </tbody>
      </table>
      {cards.length === 0 && (
        <h1 className={styles.winMessage}>
          Поздравляем! Вы успешно прошли игру!
        </h1>
      )}
      <div className={styles.controls}>
        {cards.length > 0 && (
          <div className={styles.controlButtons}>
            {Array(5)
              .fill("0")
              .map((el, index) => (
                <button
                  key={index}
                  type="button"
                  style={
                    badId.find((id) => id === index + 1)
                      ? { borderColor: "red" }
                      : { borderColor: "black" }
                  }
                  onClick={() => handleAnswerClick(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
          </div>
        )}
        <div className={styles.professionList}>
          {cards.map((profession) => (
            <div className={styles.card} key={profession.profession_name}>
              <h2>{profession.profession_name.toUpperCase()}</h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
