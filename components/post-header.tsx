import { faClock } from "@fortawesome/free-regular-svg-icons";
import styles from "../styles/post-header.module.css";
import ConvertDate from "./convert-date";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface PostProps {
  title: string;
  subtitle?: string;
  publish: string;
}

export default function PostHeader({ title, publish }: PostProps) {
  return (
    <div className={styles.stack}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.publish}>
        <FontAwesomeIcon icon={faClock} size="lg" color="var(--gray-25)" />
        <ConvertDate dateISO={publish} />
      </div>
    </div>
  );
}
