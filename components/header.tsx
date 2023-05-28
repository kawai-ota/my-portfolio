import Nav from "./nav";
import styles from "../styles/header.module.css";
import Container from "./container";

export default function Header() {
  return (
    <>
      <header>
        <Container>
          <div className={styles.flexContainer}>
            <Nav />
          </div>
        </Container>
      </header>
    </>
  );
}
