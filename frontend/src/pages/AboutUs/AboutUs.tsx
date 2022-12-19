import styles from "./AboutUs.module.sass";

export default function AboutUs() {
  return (
    <div className={styles.AboutUs}>
      <div className={styles.firstLine}>
        <h5>Зачем?</h5>
        <div className={styles.article}>
          <p>
            Сложность определения профессии заставила нас задумается. Как мы
            можем облегчить этот процесс. И мы нашли такой способ
          </p>{" "}
          <p>
            Так и появился наш сайт. Умные алгоритмы анализируют ваши ответы и
            дают вам лучший вариант вашего будущего
          </p>
        </div>
        <h5>Разработчик</h5>
        <div className={styles.article}>
          <ul>
            <li>Талерчик Алексей Сергеевич</li>
            <li>mail: talerchyk@protonmail.com</li>
            <li>Телефон: +375 (29) 240-09-85</li>
          </ul>
        </div>
      </div>
      <div className={styles.secondLine}>
        <h5>Для кого?</h5>

        <div className={styles.article}>
          <p>
            Наш сайт отличной подойдёт для молодых людей которые впервые
            выбирают свою профессию.{" "}
          </p>
          <p>Но так же поможет людям которые хотят поменять своё направление</p>
        </div>
        <h5>Задание</h5>
        <div className={styles.article}>
          <p>
            Проект разрабатывался в качестве проекта на технологическую
            практику.
          </p>
          <p>
            Тема “Разработка игрового приложения - как маркетингового хода
            выбора профессии
          </p>
        </div>
      </div>
    </div>
  );
}
