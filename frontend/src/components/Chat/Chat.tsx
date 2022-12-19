import { Message } from "..";

import styles from "./Chat.module.sass";

const testingAnswers = [
  "Ответ 1",
  "Очень большой ответ номер два ergjegj erjrgjer esdf f eriuger erhbfebf hebh fhebh bherb ",
];

export default function Chat() {
  return (
    <div className={styles.chat}>
      <Message message="Привет" />
      <Message message="Привет" />
      <Message message="Привет" />
      <Message message="Привет" />
      <Message message="Привет" answers={testingAnswers} />
      <Message message="Привет, приятно познакомиться" sender="user" />
    </div>
  );
}
