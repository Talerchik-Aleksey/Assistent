import { Link } from "react-router-dom";
import AssistentMark from "../../assets/Assistent_mark.svg";
import AssistentSVG from "../../assets/Assistent.svg";
import styles from "./Assistent.module.sass";

export default function Assistent() {
  return (
    <Link to="/dialog">
      <img className={styles.Assistent} src={AssistentSVG}></img>
    </Link>
  );
}
