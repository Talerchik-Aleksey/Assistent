import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Message } from "..";
import { RootState } from "../../app/store";
import { setAllQuestion } from "../../features/test/testSlice";

import styles from "./Chat.module.sass";

interface Question {
  id: number;
  question_text: string;
  answer_id: number;
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
      const response: GetQuestion = await axios.post("/questions", {});
      dispatch(setAllQuestion(response.data));
    } catch (error) {}
  }

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <div className={styles.chat}>
      {displayMessage.map((message, index) => (
        <Message
          key={index}
          message={message.question_text}
          answers_id={message.answer_id}
          img={message.id === -1 ? `${image}.jpg` : "assistent.svg"}
          sender={message.id === -1 ? "user" : "assistent"}
        />
      ))}
    </div>
  );
}
