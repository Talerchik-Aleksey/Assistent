import axios from "axios";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import styles from "../Login/Login.module.sass";
import backArrow from "../../assets/backArrow.svg";

export default function Registration() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [page, setPage] = useState(1);
  const [selectAvatar, setSelectAvatar] = useState("");
  const [active, setActive] = useState<boolean>(true);
  const [toLogin, setToLogin] = useState(false);
  const [error, setError] = useState({ isError: false, Message: "" });
  const handleCreate = async () => {
    try {
      const image = selectAvatar.replace(".jpg", "");
      const response = await axios.post("/users/signup", {
        login: mail,
        password: password,
        fullName: fullName,
        country: country,
        phone: phone,
        image: image,
      });
      setToLogin(true);
    } catch (e) {
      setError({
        isError: true,
        Message: "Ошибка! Проверьте введённые данные",
      });
    }
  };

  if (toLogin === true) {
    return <Navigate to="/login" />;
  }

  const avatars = [
    "avatar-1.jpg",
    "avatar-2.jpg",
    "avatar-3.jpg",
    "avatar-4.jpg",
    "avatar-5.jpg",
  ];

  switch (page) {
    case 1:
      return (
        <>
          {active && (
            <Link
              to="/"
              className={styles.modalBackground}
              onClick={() => setActive(!active)}
            />
          )}
          <div className={styles.loginForm}>
            <div className={styles.loginControls}>
              <Link to="/login">Вход</Link>
              <p>|</p>
              <Link to="/signup" className={styles.active}>
                Регистрация
              </Link>
            </div>

            <div className={styles.inputsContainer}>
              <div>
                <label>
                  Почта
                  <br />
                  <input
                    type="email"
                    required
                    name="email"
                    onChange={(event) => {
                      setMail(event.target.value);
                    }}
                    value={mail}
                    autoComplete="off"
                  />
                </label>
              </div>
              <div>
                <label>
                  Пароль
                  <br />
                  <input
                    type="password"
                    required
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                  />
                </label>
              </div>
            </div>
            <button onClick={() => setPage(2)} type="button">
              Далее
            </button>
          </div>
        </>
      );
    case 2:
      return (
        <>
          {active && (
            <Link
              to="/"
              className={styles.modalBackground}
              onClick={() => setActive(!active)}
            />
          )}
          <div className={styles.loginForm}>
            <img
              src={backArrow}
              alt="Back Arrow"
              onClick={() => setPage(page - 1)}
              className={styles.backArrow}
            />
            <div className={styles.inputsContainer}>
              <div>
                <label>
                  ФИО
                  <br />
                  <input
                    type="text"
                    required
                    onChange={(event) => {
                      setFullName(event.target.value);
                    }}
                    autoComplete="new-password"
                    value={fullName}
                  />
                </label>
              </div>
              <div>
                <label>
                  Страна поступления
                  <br />
                  <input
                    type="text"
                    required
                    onChange={(event) => {
                      setCountry(event.target.value);
                    }}
                    value={country}
                  />
                </label>
              </div>
              <div>
                <label>
                  Телефон
                  <br />
                  <input
                    type="phone"
                    required
                    onChange={(event) => {
                      setPhone(event.target.value);
                    }}
                    value={phone}
                  />
                </label>
              </div>
            </div>
            <button onClick={() => setPage(3)} type="button">
              Далее
            </button>
          </div>
        </>
      );
    case 3:
      return (
        <>
          {active && (
            <Link
              to="/"
              className={styles.modalBackground}
              onClick={() => setActive(!active)}
            />
          )}
          <div className={styles.loginForm}>
            <img
              src={backArrow}
              alt="Back Arrow"
              onClick={() => setPage(page - 1)}
              className={styles.backArrow}
            />
            <div className={styles.inputsContainer}>
              <h2>Выберите аватарку</h2>
              <div className={styles.userAvatars}>
                {avatars.map((avatar: string) => (
                  <img
                    key={avatar}
                    src={avatar}
                    alt={avatar}
                    className={
                      avatar === selectAvatar
                        ? styles.selectAvatar
                        : styles.avatar
                    }
                    onClick={() => setSelectAvatar(avatar)}
                  />
                ))}
              </div>
            </div>
            <button onClick={handleCreate} type="submit">
              Регистрация
            </button>
            {error.isError && (
              <p className={styles.errorMessage}>{error.Message}</p>
            )}
          </div>
        </>
      );
    default:
      return <h1>Error</h1>;
  }
}
