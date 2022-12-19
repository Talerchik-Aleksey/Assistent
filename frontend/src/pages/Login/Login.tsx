import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import styles from "./Login.module.sass";
import { RootState } from "../../app/store";
import {
  setAuth,
  setCountry,
  setEmail,
  setFullName,
  setImage,
  setPassword,
  setPhone,
} from "../../features/user/userSlice";

export default function Login() {
  const dispatch = useDispatch();
  const [error, setError] = useState<{ isError: boolean; message: string }>({
    isError: false,
    message: "",
  });
  const [active, setActive] = useState<boolean>(true);
  const email = useSelector((state: RootState) => state.user.email);
  const password = useSelector((state: RootState) => state.user.password);
  const [toDashboard, setToDashboard] = useState(false);

  async function loadUserData(): Promise<void> {
    try {
      const response = await axios.post(
        "/users/user-info",
        {},
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` },
        }
      );
      dispatch(setFullName(response.data.full_name));
      dispatch(setCountry(response.data.country));
      dispatch(setImage(response.data.image));
      dispatch(setPhone(response.data.phone));
      dispatch(setAuth(true));
    } catch (e) {
      console.log(e);
    }
  }

  const handleLogin = async () => {
    const userResponse = await axios.post("/users/login", {
      login: email,
      password: password,
    });

    if (userResponse.data.token) {
      setToDashboard(true);
      localStorage.setItem("Token", userResponse.data.token);
      loadUserData();
    }
  };

  if (toDashboard === true) {
    return <Navigate to="/" />;
  }

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
          <Link to="/login" className={styles.active}>
            Вход
          </Link>
          <p>|</p>
          <Link to="/signup">Регистрация</Link>
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
                  dispatch(setEmail(event.target.value));
                }}
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
                  dispatch(setPassword(event.target.value));
                }}
              />
            </label>
          </div>
        </div>
        <button onClick={handleLogin}>Вход</button>
        {error.isError && <p>Вы не заполнили обязательное поля</p>}
      </div>
    </>
  );
}
