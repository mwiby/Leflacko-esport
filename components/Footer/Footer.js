import styles from "./Footer.module.css";
import { Container } from "../";

export default function Footer() {
  return (
    <div className={styles.container}>
      <Container>
        <div style={styles.logo}></div>
        <div className={styles.grid}>
          <div>Test1</div>
          <div>Test2</div>
          <div>Test3</div>
          <div>Test4</div>
        </div>
      </Container>
    </div>
  );
}
