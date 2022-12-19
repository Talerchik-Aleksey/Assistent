import styles from "./Assistent.module.sass";
import AssistentMark from "../../assets/Assistent_mark.svg";
import { Link } from "react-router-dom";
import AssistentSVG from "../../assets/Assistent.png";
export default function Assistent() {
  return (
    <>
      <Link to="/dialog">
        <img className={styles.Assistent} src={AssistentSVG}></img>
      </Link>
    </>
  );
}
