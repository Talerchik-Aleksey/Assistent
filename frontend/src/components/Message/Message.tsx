import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./Message.module.sass";
import { setAddNewMessage, setNewMessage } from "../../features/test/testSlice";

interface MessageProps {
  message: string;
  answers_id: number | undefined;
  sender: string;
  img: string;
}

interface AnswersReq {
  data: {
    id: number;
    answers: Array<string>;
  };
}

export default function Message({
  message,
  answers_id,
  sender,
  img,
}: MessageProps) {
  const [answers, setAnswers] = useState<Array<string | never>>([]);
  const dispatch = useDispatch();
  async function getAnswers() {
    try {
      const response: AnswersReq = await axios.post(
        `/answers/${answers_id}`,
        {}
      );
      setAnswers(response.data.answers);
    } catch (error) {}
  }

  if (answers_id) {
    getAnswers();
  }

  const handleAnswerClick = async (e: any) => {
    dispatch(
      setAddNewMessage({
        id: -1,
        answer_id: 0,
        question_text: e.target.innerHTML,
      })
    );
    dispatch(setNewMessage());
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
                <button key={answer} type="button" onClick={handleAnswerClick}>
                  {answer}
                </button>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
