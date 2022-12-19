import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Account.module.sass";

interface UserInfo {
  login: string;
  full_name: string;
  image: string;
}

export default function Account() {
  const [userData, setUserData] = useState<UserInfo>({
    login: "GoodSpirit1",
    full_name: "Талерчик Алексей Сергеевич",
    image: "avatar-1",
  });

  async function loadData() {
    try {
      const response = await axios.post(
        "/users/user-info",
        {},
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("Token")}` },
        }
      );

      setUserData(response.data);
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className={styles.accountCard}>
      <div className={styles.profileInfo}>
        <img src={`${userData.image}.jpg`} alt="Profile photp" />
        <div className={styles.profileMainInfo}>
          <h4>{userData["full_name"]}</h4>
          <p>Баланс: 0 рублей</p>
        </div>
      </div>

      <div className={styles.infoAndControls}>
        <div className={styles.info}>
          <div className={styles.stats}>
            <h5>Информация</h5>
            <p>Почта: {userData.login}</p>
            <p>Количество пройденных тестов: 0</p>
            <p>Последний результат: Программист</p>
          </div>
          <div className={styles.referenceInformation}>
            <h5>Справочная информация</h5>
            <Link to="">Лицензия</Link>
            <Link to="">FAQ</Link>
            <Link to="">Описания обновлений</Link>
          </div>
        </div>
        <div className={styles.actionSection}>
          <h5>Взаимодействия</h5>
          <Link to="/change-password">Сменить пароль</Link>
          <Link to="/delete">Удалить аккаунт</Link>
          <Link to="/exit">Выйти</Link>
        </div>
      </div>
    </div>
  );
}
