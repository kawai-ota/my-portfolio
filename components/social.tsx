import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faQ } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/social.module.css";

const Social = () => {
  return (
    <ul className={styles.list}>
      <li>
        <a href="https://qiita.com/outahehe">
          <FontAwesomeIcon icon={faQ} style={{ color: "#55c500" }} />
          <span className="sr-only">Qiita</span>
        </a>
      </li>
      <li>
        <a href="https://github.com/kawai-ota?tab=repositories">
          <FontAwesomeIcon icon={faGithub} />
          <span className="sr-only">Github</span>
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/otaaaaa0929/">
          <FontAwesomeIcon icon={faInstagram} style={{ color: "#CF2E92" }} />
          <span className="sr-only">Instagram</span>
        </a>
      </li>
    </ul>
  );
};

export default Social;
