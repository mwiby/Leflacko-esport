import styles from "./Footer.module.css";
import Image from "next/image";
import { Container } from "../";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <Container>
        <div style={styles.logo}>
          <img
            className={styles.image}
            src="/images/logo1.png"
            alt="Player logo"
          />
        </div>
        <div className={styles.grid}>
          <div className={styles.box}>
            <h5>About me</h5>
            <p>
              I'm a Call of Duty Streamer from the south of Norway.<br></br>I
              enjoy creating awesome and hilarious CoD content, and sharing this
              with other players around the world.<br></br> Check out my channel
              &nbsp;
              <a href="https://www.twitch.tv/leflacko" target="_blank">
                Flacko
              </a>
            </p>
          </div>
          <div className={styles.box}>
            <h5>Social</h5>
            <ul className="socialList">
              <li>
                <a href="https://www.tiktok.com/@leflacko" target="_blank">
                  TikTok
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UC-S8c9bVpQDGC4sy_IDxFFw"
                  target="_blank"
                >
                  Youtube
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.box}>
            <h5>Contact</h5>
            <ul>
              <li>markusb@nordevo.no</li>
            </ul>
          </div>
        </div>
        <div className={styles.nordevo}>
          <h5>Powered By</h5>
          <a href="https://www.nordevo.no" target="_blank">
            Nordevo
          </a>
        </div>
      </Container>
    </footer>
  );
}
