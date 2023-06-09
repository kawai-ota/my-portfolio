import Link from "next/link";
import styles from "../styles/nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <Link href="/" legacyBehavior>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about" legacyBehavior>
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/works" legacyBehavior>
            <a>Works</a>
          </Link>
        </li>
        <li>
          <Link href="/blog" legacyBehavior>
            <a>Blog</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
