import styles from "./Footer.module.css";
import Image from "next/image";
import { Container } from "../";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <Container>
        <div style={styles.logo}>
          <Image
            src="/images/logo1.png"
            alt="Flacko logo"
            className={styles.image}
            height={80}
            width={80}
          />
        </div>
        <div className={styles.grid}>
          <div>
            <h5>About me</h5>
            <p>
              I'm a Norwegian Gamer that play Call Of Duty <br></br> and I do
              streams on Twitch. Do you want to team up ?<br></br> Check out my
              channel &nbsp;
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
              <li>markusb@nordevo.no</li>
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
    </footer>
  );
}
