import { useState } from "react";
import { Link } from "react-router-dom";
import { BurgerMenu } from "..";
import Logo from "../../assets/logo.svg";
import styles from "./Header.module.sass";

export default function Header() {
  const [menuState, setMenuState] = useState<boolean>(false);

  const handleBurgerOpen = async () => {
    setMenuState(true);
  };

  return (
    <>
      <header>
        <div className={styles.headerContainer}>
          <div className={styles.logo}>
            <Link to="/">
              <img src={Logo} alt="WebSite Logo" />
            </Link>
            <h1>Поиск Профессии </h1>
          </div>

          <div className={styles.activeMenu}>
            <nav>
              <Link to="/help">Помощь</Link>
              <Link to="/servicies">Сервисы</Link>
              <Link to="/about-us">О нас</Link>
            </nav>
            <Link to="/login" className={styles.loginButton}>
              Войти
            </Link>
            <button
              onClick={handleBurgerOpen}
              type="button"
              className={styles.burgerMenu}
            >
              <div className={styles.burgerLine} />
              <div className={styles.burgerLine} />
            </button>
          </div>
        </div>
      </header>
      {menuState && <BurgerMenu changeMenustateFunction={setMenuState} />}
    </>
  );
}
