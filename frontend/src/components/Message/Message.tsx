import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Message.module.sass";
import {
  setAddNewMessage,
  setNewMessage,
  setAnswer,
} from "../../features/test/testSlice";
import scoreAnswer from "../../utilities/ScoredAnswers";

interface Answer {
  id: number;
  question_id: number;
  answers: string;
}

interface MessageProps {
  message: string;
  answers: Answer;
  sender: string;
  img: string;
}

export default function Message({
  message,
  answers,
  sender,
  img,
}: MessageProps) {
  const dispatch = useDispatch();
  const [isDisabled, setIsDisabled] = useState(false);
  const currentQuestion = useSelector(
    (state: RootState) => state.test.currentQuestion
  );

  const handleAnswerClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(
      setAnswer(
        scoreAnswer({
          questionId: currentQuestion,
          answer: e.target.innerHTML,
        })
      )
    );
    dispatch(
      setAddNewMessage({
        id: -1,
        answer_id: 0,
        question_text: e.target.innerHTML,
      })
    );
    dispatch(setNewMessage());
    setIsDisabled(true);
  };

  return (
    <div className={styles.message}>
      <div
        className={
          sender === "assistent"
            ? styles.messageFromAssistent
            : styles.messageFromUser
        }
      >
        <img src={`${img}`} alt="Avatar" className={styles.userAvatar} />
        <div className={styles.messageBody}>
          <p className={styles.messageText}>{message}</p>
          <div className={styles.answers}>
            {answers &&
              answers.map((answer: string) => (
                <button
                  key={answer}
                  type="button"
                  onClick={handleAnswerClick}
                  disabled={isDisabled}
                >
                  {answer}
                </button>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
