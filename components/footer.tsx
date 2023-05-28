import Logo from "./logo";
import styles from "../styles/footer.module.css";
import Container from "./container";
import Social from "./social";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();
  const isIndexPage = router.pathname === "/";

  if (isIndexPage) {
    return null;
  }

  return (
    <>
      <footer className={styles.wrapper}>
        <Container>
          <div className={styles.flexContainer}>
            <Logo />
            <Social />
          </div>
        </Container>
      </footer>
    </>
  );
}
