import styles from "./Help.module.sass";

export default function Help() {
  return (
    <div className={styles.helpPage}>
      <div className={styles.helpForm}>
        <h2>Обратная связь</h2>
        <div>
          <label>
            Почта
            <br />
            <input type="email" />
          </label>
        </div>
        <div>
          <label>
            Сообщение
            <br />
            <textarea max-width="560px" />
          </label>
        </div>
        <button>Отправить</button>
      </div>
      <div className={styles.regularQuestion}>
        <div className={styles.firstMessage}>
          <h3>Страница не найдена</h3>
          <p>При переходе на страницу попадаю на страницу с ошибкой 404</p>
          <p>На данный момент разработаны не все страницы. Попробуйте позже</p>
        </div>
        <div className={styles.secondMessage}>
          <h3>Регистрация/авторизация</h3>
          <p>
            Не могу зайти войти в аккаунт или зарегистрировать новый аккаунт
          </p>
          <p>
            К сожалению мы можем в данный момент испытать трудности с нашей
            сверенной частью. Мы стараемся всё исправить в ближайшее время
          </p>
        </div>
      </div>
    </div>
  );
}
