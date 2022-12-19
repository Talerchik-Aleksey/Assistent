import React from "react";
import styles from "./Message.module.sass";

interface MessageProps {
  message: string;
  answers?: Array<string> | undefined;
  sender?: string;
  img?: string;
}

export default function Message({
  message,
  answers = undefined,
  sender = "assistent",
  img = "assistent.svg",
}: MessageProps) {
  return (
    <div className={styles.message}>
      <div
        className={
          sender === "assistent"
            ? styles.messageFromAssistent
            : styles.messageFromUser
        }
      >
        <img src={img} alt="Avatar" className={styles.userAvatar} />
        <div className={styles.messageBody}>
          <p className={styles.messageText}>{message}</p>
          <div className={styles.answers}>
            {answers &&
              answers.map((answer: string) => (
                <button
                  key={answer}
                  type="button"
                  onClick={React.createElement(Message, { message: "ergerg" })}
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
