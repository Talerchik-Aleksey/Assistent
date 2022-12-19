import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAuth } from "../../features/user/userSlice";
import styles from "./Exit.module.sass";

export default function Exit() {
  const dispatch = useDispatch();

  return (
    <div className={styles.exitContainer}>
      <h2>Вы действительно хотите выйти?</h2>
      <p>
        При выходе из аккаунта вы потеряете возможность взаимодействия с
        проектом. А так же в следующий раз вам придётся вводить данные заново
      </p>
      <div className={styles.exitButtons}>
        <Link
          to="/"
          onClick={() => {
            localStorage.removeItem("Token");
            dispatch(setAuth(false));
          }}
        >
          Выйти
        </Link>
        <Link to="/">Назад</Link>
      </div>
    </div>
  );
}
