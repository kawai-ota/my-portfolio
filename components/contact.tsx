import styles from "../styles/contact.module.css";
import Social from "./social";

interface ContactProps {
  styles?: React.CSSProperties;
}

export default function Contact(props: ContactProps) {
  return (
    <div className={styles.stack} style={props.styles}>
      <h3 className={styles.heading}>Contact</h3>
      <Social />
      <address>bv21053@shibaura-it.ac.jp</address>
    </div>
  );
}
