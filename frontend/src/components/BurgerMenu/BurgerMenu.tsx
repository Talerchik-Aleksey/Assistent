import { Dispatch } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./BurgerMenu.module.sass";
import packageJSON from "../../../package.json";
import { RootState } from "../../app/store";

interface BurgreMenuProps {
  changeMenustateFunction: Dispatch<React.SetStateAction<boolean>>;
  isAuth?: boolean;
}

export default function BurgerMenu({
  changeMenustateFunction,
}: BurgreMenuProps) {
  const handleCloseModal = () => {
    changeMenustateFunction(false);
  };

  const userImage = useSelector((state: RootState) => state.user.image);
  const fullName = useSelector((state: RootState) => state.user.fullName);
  const isAuth = useSelector((state: RootState) => state.user.auth);
  const menuItems = [
    { itemName: "Платная подпиcка", to: "/subscribe" },
    { itemName: "Уведомления", to: "/subscribe" },
    { itemName: "Настройки аккаунта", to: "/account" },
    { itemName: "Информация", to: "/about-us" },
    { itemName: "Поддержка", to: "/help" },
    { itemName: "История", to: "/subscribe" },
    { itemName: "Выйти", to: "/exit" },
  ];

  const onKeyPressDiv = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      e.preventDefault();
      onClick(e);
    }
  };

  return (
    <>
      <div
        className={styles.modalBackground}
        onClick={handleCloseModal}
        role="button"
        tabIndex={1}
        onKeyDown={onKeyPressDiv}
      />

      <div className={styles.modalContent}>
        <button
          type="button"
          className={styles.closeButton}
          onClick={() => changeMenustateFunction(false)}
        >
          {" "}
        </button>
        <div className={styles.menuProfile}>
          {isAuth ? (
            <>
              <div className={styles.userCard}>
                <Link
                  to="/account"
                  onClick={() => changeMenustateFunction(false)}
                >
                  <img src={`${userImage}.jpg`} alt="User Avatar" />
                </Link>
                <div className={styles.userInfo}>
                  <h4>{fullName}</h4>
                  <p>Баланс: 0 рублей</p>
                </div>
              </div>

              <div className={styles.menu}>
                <ul>
                  {menuItems.map((item: { itemName: string; to: string }) => (
                    <li key={item.itemName}>
                      <Link to={item.to} onClick={handleCloseModal}>
                        {item.itemName}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          ) : (
            <div className={styles.notInAccount}>
              <h5>Авторизация в аккаунте</h5>
              <Link
                to="login"
                onClick={handleCloseModal}
                className={styles.loginButton}
              >
                Войти
              </Link>
              <Link
                to="signup"
                onClick={handleCloseModal}
                className={styles.sigupLink}
              >
                Зарегистрировать аккаунт
              </Link>
            </div>
          )}

          <div className={styles.infoBlock}>
            <div>
              <h5>Поиск Профессии</h5>
              <p>Версия: {packageJSON.version}</p>
            </div>
            <div>
              <h5>Сообщение администрации</h5>
              <p>
                В 18:00 по UTC на сайте будут происходить технические работы
              </p>
            </div>
          </div>
          <a
            className={styles.license}
            href="https://www.gnu.org/licenses/lgpl-3.0.html"
          >
            GNU Lesser General public license
          </a>
        </div>
      </div>
    </>
  );
}
