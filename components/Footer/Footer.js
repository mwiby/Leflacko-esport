import styles from "./Footer.module.css";
import { Container } from "../";

export default function Footer() {
  return (
    <div className={styles.container}>
      <Container>
        <div style={styles.logo}></div>
        <div className={styles.grid}>
          <div>
            <h5>About me</h5>
            <p>
              I'm a Norwegian CoD player that loves to stream on Twitch.
              <br></br> Check out my channel -
              <a href="https://www.twitch.tv/leflacko" target="_blank">
                Flacko
              </a>
            </p>
          </div>
          <div>
            <h5>Social</h5>
            <ul>
              <li>Face</li>
              <li>TikTok</li>
              <li>Youtube</li>
            </ul>
          </div>
          <div>
            <h5>Contact</h5>
            <ul>
              <li>Email: flacko@gmail.com</li>
            </ul>
          </div>
          <div>
            <h5>Powered By</h5>
            <a href="https://www.nordevo.no" target="_blank">
              Nordevo
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
