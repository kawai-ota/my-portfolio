import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import styles from "../styles/social.module.css";

const Social = () => {
  return (
    <ul className={styles.list}>
      <li>
        <a href="https://twitter.com/">
          <FontAwesomeIcon icon={faTwitter} />
          <span className="sr-only">Twitter</span>
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
          <FontAwesomeIcon icon={faInstagram} />
          <span className="sr-only">Instagram</span>
        </a>
      </li>
    </ul>
  );
};

export default Social;
