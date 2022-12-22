import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Message } from "..";
import { RootState } from "../../app/store";
import { setAllQuestion } from "../../features/test/testSlice";

import styles from "./Chat.module.sass";

interface Question {
  id: number;
  question_text: string;
  answers: Answer[];
}

interface Answer {
  id: number;
  question_id: number;
  answers: string;
}

interface GetQuestion {
  data: Array<Question>;
}

export default function Chat() {
  const displayMessage = useSelector(
    (state: RootState) => state.test.displayMessage
  );
  const dispatch = useDispatch();
  const image = useSelector((state: RootState) => state.user.image);
  async function getQuestions() {
    try {
      const response: GetQuestion = await axios.post("/questions/get", {});
      const questions = response.data.map((question) => {
        return {
          ...question,
          answers: question.answers.map((answer) => answer.answers),
        };
      });
      dispatch(setAllQuestion(questions));
    } catch (error) {
      console.error(error);
      // Display an error message to the user
      alert(
        "An error occurred while fetching the questions. Please try again later."
      );
    }
  }

  useEffect(() => {
    getQuestions();
  }, []);

  const redirectToResults = () => {
    return <Navigate to="/results" />;
  };

  return (
    <div className={styles.chat}>
      {displayMessage.map((message, index) => (
        <Message
          key={index}
          message={message.question_text}
          answers={message.answers}
          img={message.id === -1 ? `${image || "ghost"}.jpg` : "assistent.svg"}
          sender={message.id === -1 ? "user" : "assistent"}
        />
      ))}
      {displayMessage.length === 20 && redirectToResults()}
    </div>
  );
}
